
import { Button } from "@/components/ui/button";
import { FileSpreadsheet, CreditCard, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <FileSpreadsheet className="h-6 w-6 text-brand-blue" />
          <span className="font-bold text-xl text-brand-darkBlue">CreditCSV</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/how-it-works" className="text-brand-darkGray hover:text-brand-darkBlue transition-colors">
            How It Works
          </Link>
          <Link to="/faq" className="text-brand-darkGray hover:text-brand-darkBlue transition-colors">
            FAQ
          </Link>
          <Link to="/pricing" className="text-brand-darkGray hover:text-brand-darkBlue transition-colors">
            Pricing
          </Link>
          <Link to="/api/docs" className="text-brand-darkGray hover:text-brand-darkBlue transition-colors">
            API
          </Link>
        </div>
        
        <Button asChild className="bg-brand-blue hover:bg-brand-darkBlue">
          <Link to="/convert" className="flex items-center gap-1">
            <CreditCard className="h-4 w-4" />
            <span>Convert Now</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
