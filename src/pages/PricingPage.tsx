
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  
  const plans = [
    {
      name: "Free",
      description: "Basic PDF to CSV conversion for occasional use.",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "5 PDF conversions per month",
        "Standard CSV output",
        "Basic support",
        "Major credit card support",
        "24-hour data retention"
      ],
      limitations: [
        "No batch processing",
        "No advanced filters",
        "No API access"
      ],
      buttonText: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      description: "Enhanced conversion capabilities for regular users.",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        "Unlimited PDF conversions",
        "Advanced CSV customization",
        "Priority email support",
        "All credit card formats",
        "30-day data retention",
        "Batch processing up to 10 files",
        "Export to multiple formats (XLSX, OFX)",
      ],
      limitations: [
        "No API access",
      ],
      buttonText: "Upgrade to Pro",
      highlighted: true
    },
    {
      name: "Business",
      description: "Complete solution for small businesses and accountants.",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        "Everything in Pro",
        "Unlimited batch processing",
        "API access for integrations",
        "Custom field mapping",
        "90-day data retention",
        "Priority phone support",
        "Custom CSV templates",
        "Direct import to accounting software"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600">
              Choose the plan that best fits your needs. All plans include secure, browser-based conversion.
            </p>
            
            <div className="flex justify-center mt-8">
              <div className="bg-gray-100 p-1 rounded-full inline-flex items-center">
                <button
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    billingCycle === "monthly"
                      ? "bg-white shadow text-brand-darkBlue"
                      : "text-gray-500 hover:text-gray-700"
                  )}
                  onClick={() => setBillingCycle("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    billingCycle === "yearly"
                      ? "bg-white shadow text-brand-darkBlue"
                      : "text-gray-500 hover:text-gray-700"
                  )}
                  onClick={() => setBillingCycle("yearly")}
                >
                  Yearly <span className="text-green-600 font-semibold">(Save 15%)</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={cn(
                  "border rounded-lg overflow-hidden",
                  plan.highlighted 
                    ? "border-brand-blue shadow-lg relative" 
                    : "border-gray-200"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-brand-blue text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-end">
                      <span className="text-3xl font-bold">
                        ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-500 ml-1">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    {plan.monthlyPrice > 0 && (
                      <p className="text-sm text-gray-500 mt-1">
                        Billed {billingCycle === "monthly" ? "monthly" : "annually"}
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    className={cn(
                      "w-full mb-6",
                      plan.highlighted
                        ? "bg-brand-blue hover:bg-brand-darkBlue"
                        : ""
                    )}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                  
                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-start text-gray-400">
                        <span className="h-5 w-5 mr-2 flex-shrink-0 relative">
                          <span className="absolute inset-0 flex items-center justify-center">
                            —
                          </span>
                        </span>
                        <span>{limitation}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Can I switch plans later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be prorated for the remainder of your billing cycle. If you downgrade, the new plan will take effect at the start of your next billing cycle.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support PayPal for payment.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Is there a refund policy?</h3>
                <p className="text-gray-600">
                  We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied with our service, contact our support team within 14 days of your purchase for a full refund.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Do you offer discounts for non-profits or educational institutions?</h3>
                <p className="text-gray-600">
                  Yes, we offer special pricing for non-profit organizations, educational institutions, and students. Please contact our sales team for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
