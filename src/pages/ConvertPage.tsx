
import { useState } from "react";
import { ArrowRight, Download, ShieldCheck, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FileDropzone from "@/components/FileDropzone";
import { CsvData, CreditCardStatementProcessor, downloadCsv } from "@/utils/pdfProcessing";
import { toast } from "@/components/ui/use-toast";

const ConvertPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [csvData, setCsvData] = useState<CsvData | null>(null);

  const handleFileAccepted = (acceptedFile: File) => {
    setFile(acceptedFile);
    // Reset CSV data when a new file is uploaded
    setCsvData(null);
  };

  const handleConvert = async () => {
    if (!file) {
      toast({
        variant: "destructive",
        title: "No file selected",
        description: "Please upload a PDF statement first."
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      const processor = new CreditCardStatementProcessor();
      const result = await processor.processPdf(file);
      
      setCsvData(result);
      
      if (result) {
        toast({
          title: "Conversion successful",
          description: "Your statement has been converted to CSV format.",
          className: "bg-green-50 border-green-200",
        });
      }
    } catch (error) {
      console.error("Error converting file:", error);
      toast({
        variant: "destructive",
        title: "Conversion failed",
        description: "There was an error converting your file. Please try again."
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!csvData || !file) return;
    
    // Generate a filename based on the original file
    const originalName = file.name.replace(/\.[^/.]+$/, ""); // Remove extension
    const downloadName = `${originalName}-converted.csv`;
    
    downloadCsv(csvData, downloadName);
    
    toast({
      title: "Download started",
      description: `${downloadName} is being downloaded.`,
    });
  };

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Credit Card Statement Converter</h1>
        <p className="text-center text-gray-600 mb-8">
          Convert your credit card PDF statements to CSV format in seconds
        </p>

        <div className="space-y-8">
          {/* Step 1: Upload File */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 rounded-full bg-brand-blue w-8 h-8 flex items-center justify-center text-white font-medium">
                  1
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold mb-4">Upload Your PDF Statement</h2>
                  <FileDropzone onFileAccepted={handleFileAccepted} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Convert */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 rounded-full bg-brand-blue w-8 h-8 flex items-center justify-center text-white font-medium">
                  2
                </div>
                <div className="ml-4 w-full">
                  <h2 className="text-xl font-semibold mb-4">Convert to CSV</h2>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                    <div className="flex-1">
                      <p className="text-gray-600 mb-2">
                        Click the convert button to process your PDF statement. This happens entirely in your browser - your data never leaves your device.
                      </p>
                      
                      <div className="flex items-center text-sm text-green-700">
                        <ShieldCheck className="h-4 w-4 mr-1 text-green-600" />
                        <span>Secure, private, and 100% client-side processing</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleConvert}
                      disabled={!file || isProcessing}
                      className="w-full sm:w-auto bg-brand-blue hover:bg-brand-darkBlue"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <ArrowRight className="h-4 w-4 mr-2" />
                          Convert Now
                        </>
                      )}
                    </Button>
                  </div>
                  
                  {/* Preview of CSV data */}
                  {csvData && (
                    <div className="mt-6 rounded border overflow-hidden">
                      <div className="bg-gray-50 px-4 py-2 border-b">
                        <h3 className="font-medium">Preview</h3>
                      </div>
                      <div className="p-4 overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              {csvData.headers.map((header, i) => (
                                <th key={i} className="px-4 py-2 text-left font-medium text-gray-700">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {csvData.rows.slice(0, 3).map((row, i) => (
                              <tr key={i} className="border-b last:border-0">
                                {row.map((cell, j) => (
                                  <td key={j} className="px-4 py-2 text-gray-600">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                            {csvData.rows.length > 3 && (
                              <tr>
                                <td colSpan={csvData.headers.length} className="px-4 py-2 text-gray-500 italic">
                                  ...and {csvData.rows.length - 3} more rows
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Download */}
          <Card className={!csvData ? "opacity-60" : ""}>
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 rounded-full bg-brand-blue w-8 h-8 flex items-center justify-center text-white font-medium">
                  3
                </div>
                <div className="ml-4 w-full">
                  <h2 className="text-xl font-semibold mb-4">Download Your CSV</h2>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                    <p className="text-gray-600">
                      Download your converted CSV file to use in Excel, Google Sheets, or your accounting software.
                    </p>
                    
                    <Button
                      onClick={handleDownload}
                      disabled={!csvData}
                      className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download CSV
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConvertPage;
