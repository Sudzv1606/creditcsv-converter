
import { Link } from "react-router-dom";
import { FileSpreadsheet, Github, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gray-50 py-8 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <FileSpreadsheet className="h-5 w-5 text-brand-blue" />
              <span className="font-bold text-lg text-brand-darkBlue">CreditCSV</span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Convert credit card PDF statements to CSV format securely in your browser.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-600 hover:text-brand-blue transition-colors" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-gray-600 hover:text-brand-blue transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-brand-darkGray">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/convert" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">PDF Converter</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">How It Works</Link></li>
              <li><Link to="/supported-banks" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">Supported Credit Cards</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-brand-darkGray">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-brand-darkGray">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">Terms of Service</Link></li>
              <li><Link to="/security" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="text-center text-sm text-gray-600">
          <p>&copy; {currentYear} CreditCSV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
