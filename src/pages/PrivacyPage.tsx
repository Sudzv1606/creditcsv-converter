
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            
            <div className="prose prose-blue max-w-none">
              <p className="lead text-lg text-gray-600 mb-6">
                Last updated: June 15, 2023
              </p>
              
              <h2>Introduction</h2>
              <p>
                At CreditCSV, we take your privacy very seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our credit card statement conversion service.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
              
              <h2>Collection of Your Information</h2>
              <p>
                We collect information about you in various ways when you use our service:
              </p>
              <h3>Information You Provide Directly:</h3>
              <ul>
                <li>Account information (name, email address) if you create an account</li>
                <li>Payment information if you subscribe to a paid plan</li>
                <li>Communications with our customer service team</li>
              </ul>
              
              <h3>Automatic Data Collection:</h3>
              <ul>
                <li>Usage data such as pages visited and time spent on our site</li>
                <li>Device information including browser type, IP address, and operating system</li>
                <li>Cookies and similar tracking technologies to enhance your experience</li>
              </ul>
              
              <h2>Your Credit Card Statement Data</h2>
              <p>
                <strong>Important:</strong> We designed CreditCSV with your privacy as a top priority. All processing of your credit card statements happens locally in your browser. Your PDF files and the data extracted from them are not uploaded to our servers.
              </p>
              <p>
                This client-side processing ensures that your sensitive financial information never leaves your device. We do not have access to, store, or process the contents of your credit card statements.
              </p>
              
              <h2>Use of Your Information</h2>
              <p>We may use information that we collect about you to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process payments and prevent fraud</li>
                <li>Send administrative information, such as updates or changes to our policies</li>
                <li>Respond to your comments or questions</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Monitor and analyze usage patterns and trends</li>
              </ul>
              
              <h2>Disclosure of Your Information</h2>
              <p>We may share information we have collected about you in certain situations:</p>
              <h3>Business Transfers:</h3>
              <p>
                If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
              </p>
              
              <h3>Compliance with Laws:</h3>
              <p>
                We may disclose your information where required to do so by law or subpoena.
              </p>
              
              <h3>Third-Party Service Providers:</h3>
              <p>
                We may share your information with third-party vendors who provide services on our behalf, such as payment processing and email delivery. These vendors are bound by confidentiality agreements and are prohibited from using your information for any other purpose.
              </p>
              
              <h2>Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee the security of your information.
              </p>
              
              <h2>Your Choices About Your Information</h2>
              <h3>Account Information:</h3>
              <p>
                You can update your account information or delete your account by contacting us or through your account settings.
              </p>
              
              <h3>Marketing Communications:</h3>
              <p>
                You can opt out of receiving marketing emails from us by following the unsubscribe instructions in those emails.
              </p>
              
              <h3>Cookies:</h3>
              <p>
                Most web browsers are set to accept cookies by default. You can usually change your browser settings to remove or reject cookies.
              </p>
              
              <h2>Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13, and we do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will delete this information.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated policy on this page with a revised "last updated" date.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have questions or concerns about this privacy policy, please contact us at:
              </p>
              <p>
                Email: privacy@creditcsv.com<br />
                Address: 123 Privacy Lane, Suite 456, San Francisco, CA 94107
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
