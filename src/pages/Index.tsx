
import { ArrowRight, ShieldCheck, FileCheck, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-lightBlue/30 to-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-darkBlue mb-6">
                Convert Credit Card PDF Statements to CSV in Seconds
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Quickly transform your credit card statements into manageable spreadsheets. 
                100% secure, private, and processed locally in your browser.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-darkBlue">
                  <Link to="/convert" className="text-base">
                    Start Converting Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/how-it-works" className="text-base">
                    Learn How It Works
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mt-10">
                <div className="flex items-center text-sm text-brand-darkGray bg-white px-3 py-1.5 rounded-full shadow-sm">
                  <CreditCard className="h-4 w-4 text-brand-blue mr-1.5" />
                  <span>Visa</span>
                </div>
                <div className="flex items-center text-sm text-brand-darkGray bg-white px-3 py-1.5 rounded-full shadow-sm">
                  <CreditCard className="h-4 w-4 text-brand-blue mr-1.5" />
                  <span>Mastercard</span>
                </div>
                <div className="flex items-center text-sm text-brand-darkGray bg-white px-3 py-1.5 rounded-full shadow-sm">
                  <CreditCard className="h-4 w-4 text-brand-blue mr-1.5" />
                  <span>American Express</span>
                </div>
                <div className="flex items-center text-sm text-brand-darkGray bg-white px-3 py-1.5 rounded-full shadow-sm">
                  <CreditCard className="h-4 w-4 text-brand-blue mr-1.5" />
                  <span>Discover</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose CreditCSV?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="mx-auto w-12 h-12 bg-brand-lightBlue rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">100% Secure & Private</h3>
                <p className="text-gray-600">
                  Your data never leaves your device. All processing happens locally in your browser, ensuring maximum privacy and security.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="mx-auto w-12 h-12 bg-brand-lightBlue rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast & Efficient</h3>
                <p className="text-gray-600">
                  Convert your statements in seconds. No waiting for uploads or downloads from external servers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="mx-auto w-12 h-12 bg-brand-lightBlue rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Major Banks Supported</h3>
                <p className="text-gray-600">
                  We support statements from major credit card providers including Visa, Mastercard, American Express, and Discover.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Upload Your PDF Statement</h3>
                    <p className="text-gray-600">
                      Simply drag and drop your credit card statement PDF or browse to select it. Your file stays in your browser and is never uploaded to any server.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Convert Your Statement</h3>
                    <p className="text-gray-600">
                      Click the Convert button and our algorithm will analyze your statement, identify the format, and extract all transaction data.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Download Your CSV</h3>
                    <p className="text-gray-600">
                      Preview your converted data and download the CSV file for use in Excel, Google Sheets, or your accounting software.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-darkBlue">
                  <Link to="/convert">
                    Try It Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials or FAQ Preview can be added here */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
