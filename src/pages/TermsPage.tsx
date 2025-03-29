
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            
            <div className="prose prose-blue max-w-none">
              <p className="lead text-lg text-gray-600 mb-6">
                Last updated: June 15, 2023
              </p>
              
              <h2>Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement between you and CreditCSV regarding your use of our website and credit card statement conversion service. By accessing or using our service, you agree to be bound by these Terms.
              </p>
              
              <h2>Description of Service</h2>
              <p>
                CreditCSV provides a web-based service that allows users to convert credit card PDF statements to CSV format. The processing happens locally in your browser, ensuring that your financial data never leaves your device.
              </p>
              
              <h2>User Accounts</h2>
              <p>
                Some features of our service may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
              <p>
                When creating an account, you agree to provide accurate and complete information. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure.
              </p>
              
              <h2>Free and Paid Services</h2>
              <p>
                CreditCSV offers both free and paid subscription plans. By subscribing to a paid plan, you agree to pay the fees indicated for that subscription. Payments are non-refundable except as expressly provided in these Terms or as required by law.
              </p>
              <p>
                We reserve the right to change our prices at any time. If we do change prices, we will provide notice of the change on the Site or by email, at our option, at least 14 days before the change is to take effect.
              </p>
              
              <h2>User Responsibilities</h2>
              <p>
                By using our service, you agree not to:
              </p>
              <ul>
                <li>Use the service for any illegal purpose or in violation of any local, state, national, or international law</li>
                <li>Violate or infringe other people's intellectual property, privacy, publicity, or other legal rights</li>
                <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
                <li>Interfere with or disrupt the operation of the service or the servers or networks used to make the service available</li>
                <li>Attempt to gain unauthorized access to any portion of the service or any other accounts, computer systems, or networks connected to the service</li>
              </ul>
              
              <h2>Intellectual Property</h2>
              <p>
                The service and its original content, features, and functionality are owned by CreditCSV and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable license to use the service for your personal, non-commercial use. You may not copy, modify, distribute, sell, or lease any part of our service or included software, nor may you reverse engineer or attempt to extract the source code of that software.
              </p>
              
              <h2>Privacy</h2>
              <p>
                Your use of our service is also governed by our Privacy Policy, which is incorporated herein by reference. Please review our Privacy Policy to understand our practices.
              </p>
              
              <h2>Disclaimers</h2>
              <p>
                <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong> We do not guarantee that the service will always be available, uninterrupted, secure, or error-free.
              </p>
              <p>
                While we strive for accuracy in the conversion process, we do not guarantee that all data from your statements will be extracted correctly. You are responsible for verifying the accuracy of the converted data.
              </p>
              
              <h2>Limitation of Liability</h2>
              <p>
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL CREDITCSV BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES.</strong> This includes but is not limited to, loss of profits, data, use, goodwill, or other intangible losses resulting from your access to or use of or inability to access or use the service.
              </p>
              
              <h2>Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless CreditCSV and its licensors, service providers, employees, agents, officers, and directors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the service.
              </p>
              
              <h2>Termination</h2>
              <p>
                We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason, including if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service or contact us to delete your account.
              </p>
              
              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: legal@creditcsv.com<br />
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

export default TermsPage;
