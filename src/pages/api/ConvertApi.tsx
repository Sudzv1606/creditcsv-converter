
import { useState } from 'react';
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getConversionController, ConversionResult } from "@/api/controllers/ConversionController";
import { downloadCsv, CsvData } from "@/utils/pdfProcessing";
import FileDropzone from "@/components/FileDropzone";

// This is a test client for our API - in a real implementation
// this would be a proper API endpoint handled by a server
const ConvertApi = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (file: File) => {
    setFile(file);
    setResult(null);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsProcessing(true);
    setError(null);
    
    try {
      // Use our controller to process the file
      const controller = getConversionController();
      const response = await controller.convertPdf(file);
      
      if (response.success && response.data) {
        setResult(response.data);
      } else {
        setError(response.error || "An unknown error occurred");
      }
    } catch (err) {
      console.error("API error:", err);
      setError("Failed to process file. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!result) return;
    
    // Create a CSV data structure from the result
    const csvData: CsvData = {
      headers: result.headers,
      rows: result.rows
    };
    
    // Generate a filename based on the original file
    const downloadName = file ? `${file.name.replace(/\.[^/.]+$/, "")}-converted.csv` : "statement-converted.csv";
    
    // Download the CSV
    downloadCsv(csvData, downloadName);
  };

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">API Tester</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Test API Endpoint: /convert</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Upload PDF Statement
                </label>
                <FileDropzone onFileAccepted={handleFileChange} />
                {file && (
                  <p className="mt-2 text-sm text-gray-500">
                    {file.name} ({Math.round(file.size / 1024)} KB)
                  </p>
                )}
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  disabled={!file || isProcessing}
                  className="bg-brand-blue hover:bg-brand-darkBlue"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : "Process File"}
                </Button>
              </div>
            </form>
            
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                {error}
              </div>
            )}
            
            {result && (
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                  PDF successfully processed! Statement type: {result.statementType}
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Response Data:</h3>
                  <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm">
                    {JSON.stringify(result, null, 2)}
                  </pre>
                </div>
                
                <div>
                  <Button 
                    onClick={handleDownload} 
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Download CSV
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConvertApi;
