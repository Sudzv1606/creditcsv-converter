
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, FileText, Server, ShieldCheck, AlertTriangle } from "lucide-react";

const SecurityPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Security at CreditCSV</h1>
            <p className="text-lg text-gray-600 mb-8">
              We've designed our service with security and privacy as our top priorities
            </p>
            
            <div className="bg-brand-lightBlue/20 border border-brand-blue/30 rounded-lg p-6 mb-10">
              <div className="flex items-start">
                <ShieldCheck className="w-10 h-10 text-brand-blue mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Client-Side Processing</h2>
                  <p className="text-gray-600">
                    The most important thing to know about CreditCSV's security model is that <strong>your PDF statements are never uploaded to our servers</strong>. All processing happens locally in your browser, so your sensitive financial data never leaves your device.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-brand-blue" />
                  Our Security Approach
                </h2>
                <p className="text-gray-600 mb-4">
                  We've built CreditCSV with a "security-first" mindset, implementing industry best practices to keep your information safe and private.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="border rounded-lg p-5">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Lock className="w-5 h-5 mr-2 text-brand-blue" />
                      Local Processing
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Your PDF statements are processed entirely in your browser using JavaScript. The data never reaches our servers, providing maximum privacy and security.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-brand-blue" />
                      Data Encryption
                    </h3>
                    <p className="text-gray-600 text-sm">
                      For premium users who opt to save their data, we use AES-256 encryption, the same standard used by financial institutions worldwide.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Server className="w-5 h-5 mr-2 text-brand-blue" />
                      Secure Infrastructure
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Our website and infrastructure are protected by HTTPS, firewalls, intrusion detection systems, and regular security audits.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-brand-blue" />
                      Regular Testing
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We conduct regular penetration testing and vulnerability assessments to identify and address potential security issues before they can be exploited.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
                <p className="text-gray-600 mb-6">
                  For those interested in the technical implementation of our security measures:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-brand-blue mt-2 mr-3"></span>
                      <div>
                        <h3 className="font-medium">Transport Layer Security</h3>
                        <p className="text-sm text-gray-600">
                          All communication with our servers is encrypted using TLS 1.3, with HSTS enabled to prevent downgrade attacks.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-brand-blue mt-2 mr-3"></span>
                      <div>
                        <h3 className="font-medium">Content Security Policy</h3>
                        <p className="text-sm text-gray-600">
                          We implement strict Content Security Policies to prevent XSS attacks and other code injection attempts.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-brand-blue mt-2 mr-3"></span>
                      <div>
                        <h3 className="font-medium">Authentication</h3>
                        <p className="text-sm text-gray-600">
                          For registered users, we use secure, salted password hashing with bcrypt and enforce strong password policies. Two-factor authentication is available for all accounts.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-brand-blue mt-2 mr-3"></span>
                      <div>
                        <h3 className="font-medium">Data Storage (Premium Features)</h3>
                        <p className="text-sm text-gray-600">
                          For premium users who opt to save conversion history, all stored data is encrypted at rest using AES-256. Users can delete their data at any time.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Security Best Practices for Users</h2>
                <p className="text-gray-600 mb-6">
                  While we take extensive measures to protect your data, we recommend the following security practices:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-gray-600">Keep your browser updated to ensure you have the latest security patches.</p>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-gray-600">Use a secure, password-protected network when accessing financial information.</p>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-gray-600">Clear your browser cache after using CreditCSV, especially on shared or public computers.</p>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-gray-600">Use a unique, strong password for your CreditCSV account (if you create one).</p>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-gray-600">Enable two-factor authentication for additional account security (premium feature).</p>
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Security Questions or Concerns?</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about our security practices or want to report a security vulnerability, please contact our security team at <a href="mailto:security@creditcsv.com" className="text-brand-blue hover:underline">security@creditcsv.com</a>.
                </p>
                <p className="text-gray-600">
                  We take all security reports seriously and will respond promptly to investigate any potential issues.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityPage;
