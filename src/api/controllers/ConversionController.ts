
import { CreditCardStatementProcessor, CsvData } from "@/utils/pdfProcessing";

// Response types for the API
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  errorCode?: string;
}

export interface ConversionResult {
  headers: string[];
  rows: string[][];
  downloadUrl?: string;
  statementType?: string;
  processingTimeMs?: number;
}

// The main controller for PDF conversion
export class ConversionController {
  // Create a singleton instance
  private static instance: ConversionController;
  private processor: CreditCardStatementProcessor;
  
  private constructor() {
    this.processor = new CreditCardStatementProcessor();
  }
  
  public static getInstance(): ConversionController {
    if (!ConversionController.instance) {
      ConversionController.instance = new ConversionController();
    }
    return ConversionController.instance;
  }
  
  // Convert PDF file to CSV data
  public async convertPdf(file: File): Promise<ApiResponse<ConversionResult>> {
    const startTime = Date.now();
    
    try {
      // Process the file
      const result = await this.processor.processPdf(file);
      
      if (!result) {
        return {
          success: false,
          error: "Failed to process PDF. Unsupported format or corrupted file.",
          errorCode: "PROCESSING_FAILED"
        };
      }
      
      // Generate a unique ID for this conversion
      const conversionId = this.generateConversionId();
      
      // In a real API, we would store this data temporarily and make it available
      // for download via the downloadUrl. For now, we'll just return the data.
      return {
        success: true,
        data: {
          headers: result.headers,
          rows: result.rows,
          downloadUrl: `/api/download/${conversionId}`,
          statementType: this.detectStatementType(file.name),
          processingTimeMs: Date.now() - startTime
        }
      };
    } catch (error) {
      console.error("Error processing PDF:", error);
      
      return {
        success: false,
        error: "An unexpected error occurred while processing the file.",
        errorCode: "INTERNAL_ERROR"
      };
    }
  }
  
  // Generate a unique ID for tracking conversions
  // In a real implementation, this would likely use a UUID library
  private generateConversionId(): string {
    return `conv_${Math.random().toString(36).substring(2, 15)}_${Date.now()}`;
  }
  
  // Detect statement type from filename (simplified version)
  private detectStatementType(filename: string): string {
    const lowerName = filename.toLowerCase();
    
    if (lowerName.includes('visa')) {
      return 'VISA';
    } else if (lowerName.includes('master') || lowerName.includes('mc')) {
      return 'MASTERCARD';
    } else if (lowerName.includes('amex') || lowerName.includes('american express')) {
      return 'AMERICAN EXPRESS';
    } else if (lowerName.includes('discover')) {
      return 'DISCOVER';
    }
    
    return 'UNKNOWN';
  }
}

// Export a convenient function to get the controller instance
export const getConversionController = () => ConversionController.getInstance();
