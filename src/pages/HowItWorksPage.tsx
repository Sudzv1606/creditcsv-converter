
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheck, FileSpreadsheet, ArrowRight, FolderOpen, FileUp } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-brand-lightBlue/30 to-white py-16">
          <div className="container text-center">
            <h1 className="text-4xl font-bold mb-4">How CreditCSV Works</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Converting your credit card statements to CSV format is simple, secure, and takes just a few seconds.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 mb-20">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-brand-lightBlue flex items-center justify-center">
                    <FileUp className="w-10 h-10 text-brand-blue" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mr-3">
                      1
                    </div>
                    <h2 className="text-2xl font-bold">Upload Your Statement</h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Start by uploading your credit card statement PDF. You can drag and drop the file into our converter or browse to select it from your device.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <ShieldCheck className="w-5 h-5 text-green-600 mr-2" />
                      Privacy & Security
                    </h3>
                    <p className="text-sm text-gray-600">
                      Your financial data never leaves your device. All processing happens locally in your browser, ensuring complete privacy and security. We don't store or transmit your statement data.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-8 mb-20">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-brand-lightBlue flex items-center justify-center">
                    <FolderOpen className="w-10 h-10 text-brand-blue" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mr-3">
                      2
                    </div>
                    <h2 className="text-2xl font-bold">Statement Analysis</h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Once you click "Convert," our intelligent algorithm analyzes your PDF to identify the credit card provider format. We automatically detect and extract transaction data including dates, descriptions, and amounts.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold mb-2">Supported Credit Card Formats</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-blue mr-2"></div>
                        <span className="text-sm text-gray-600">Visa</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-blue mr-2"></div>
                        <span className="text-sm text-gray-600">Mastercard</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-blue mr-2"></div>
                        <span className="text-sm text-gray-600">American Express</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-brand-blue mr-2"></div>
                        <span className="text-sm text-gray-600">Discover</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-brand-lightBlue flex items-center justify-center">
                    <FileSpreadsheet className="w-10 h-10 text-brand-blue" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mr-3">
                      3
                    </div>
                    <h2 className="text-2xl font-bold">Download Your CSV</h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    After conversion, you'll see a preview of your extracted data. Check that everything looks right, then download your CSV file with a single click. The file is ready for import into Excel, Google Sheets, QuickBooks, or any other accounting software.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold mb-2">CSV Format Details</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Your CSV includes all transaction details with standardized formatting:
                    </p>
                    <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                      <li>Transaction dates</li>
                      <li>Posting dates (where available)</li>
                      <li>Transaction descriptions</li>
                      <li>Transaction amounts</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-6">Ready to Convert Your Statement?</h2>
                <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-darkBlue">
                  <Link to="/convert">
                    Start Converting Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
