
import React, { useCallback, useState } from "react";
import { FileUp, Check, AlertCircle, File } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface FileDropzoneProps {
  onFileAccepted: (file: File) => void;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({ onFileAccepted }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [fileAccepted, setFileAccepted] = useState(false);
  const [fileName, setFileName] = useState("");
  
  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  }, []);
  
  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  }, []);
  
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  
  const processFile = useCallback((file: File) => {
    if (file.type !== 'application/pdf') {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please upload a PDF file."
      });
      return;
    }
    
    // File size check (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        variant: "destructive",
        title: "File too large",
        description: "Maximum file size is 10MB."
      });
      return;
    }
    
    setFileAccepted(true);
    setFileName(file.name);
    onFileAccepted(file);
    
    toast({
      title: "File uploaded successfully",
      description: `${file.name} is ready for conversion.`,
      className: "bg-green-50 border-green-200",
    });
  }, [onFileAccepted]);
  
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  }, [processFile]);
  
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  }, [processFile]);
  
  const handleButtonClick = useCallback(() => {
    // Create a hidden file input and trigger it
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf';
    fileInput.style.display = 'none';
    fileInput.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        processFile(target.files[0]);
      }
    };
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
  }, [processFile]);
  
  const handleReset = useCallback(() => {
    setFileAccepted(false);
    setFileName("");
  }, []);
  
  return (
    <div className="w-full">
      {!fileAccepted ? (
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-12 text-center",
            isDragActive ? "border-brand-blue bg-brand-lightBlue/20" : "border-gray-300 bg-gray-50",
            "transition-colors duration-200"
          )}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="rounded-full bg-brand-lightBlue p-3">
              <FileUp className="h-6 w-6 text-brand-blue" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Drag & drop your PDF file here</h3>
              <p className="text-sm text-gray-500">or click to browse files</p>
            </div>
            
            <Button 
              type="button" 
              variant="outline" 
              className="relative z-10"
              onClick={handleButtonClick}
            >
              Browse Files
            </Button>
            
            <p className="text-xs text-gray-500 mt-2">
              Supported format: PDF (Max size: 10MB)
            </p>
          </div>
        </div>
      ) : (
        <div className="border rounded-lg p-6 bg-gray-50">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-2 mr-4">
              <Check className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">File ready for conversion</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <File className="h-4 w-4 mr-1" />
                {fileName}
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={handleReset}>
              Change
            </Button>
          </div>
        </div>
      )}
      
      <div className="mt-4 text-xs text-gray-500 flex items-center">
        <AlertCircle className="h-3 w-3 mr-1" />
        <span>All files are processed locally in your browser for maximum security.</span>
      </div>
    </div>
  );
};

export default FileDropzone;
