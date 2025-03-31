
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ApiDocsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-brand-lightBlue/30 to-white py-16">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Integrate our credit card statement conversion capabilities into your own applications.
            </p>
          </div>
        </section>
        
        <section className="py-12 container">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>
                  How to begin using the CreditCSV API
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Our API allows you to convert credit card statements from PDF to CSV format programmatically. To get started:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Sign up for an API key</li>
                  <li>Include your API key in the request header</li>
                  <li>Make requests to our endpoints</li>
                </ol>
                <Button asChild className="mt-4">
                  <Link to="/pricing">Get an API Key</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Tabs defaultValue="curl" className="w-full">
              <CardHeader>
                <CardTitle>API Endpoints</CardTitle>
                <CardDescription>
                  Reference documentation for all available API endpoints
                </CardDescription>
                <TabsList className="mt-4">
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                </TabsList>
              </CardHeader>
              
              <div className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold mr-2">POST</span>
                      /api/convert
                    </CardTitle>
                    <CardDescription>Convert a PDF statement to CSV format</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Request</h4>
                      <TabsContent value="curl" className="mt-0">
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                          {`curl -X POST https://api.creditcsv.com/convert \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@statement.pdf"`}
                        </pre>
                      </TabsContent>
                      <TabsContent value="javascript" className="mt-0">
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                          {`const form = new FormData();
form.append('file', pdfFile);

fetch('https://api.creditcsv.com/convert', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: form
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));`}
                        </pre>
                      </TabsContent>
                      <TabsContent value="python" className="mt-0">
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                          {`import requests

url = "https://api.creditcsv.com/convert"
headers = {"Authorization": "Bearer YOUR_API_KEY"}
files = {"file": open("statement.pdf", "rb")}

response = requests.post(url, headers=headers, files=files)
print(response.json())`}
                        </pre>
                      </TabsContent>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Response</h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        {`{
  "success": true,
  "data": {
    "headers": ["Transaction Date", "Posting Date", "Description", "Amount"],
    "rows": [
      ["2023-04-01", "2023-04-03", "GROCERY STORE", "-64.97"],
      ["2023-04-02", "2023-04-04", "RESTAURANT", "-38.75"],
      // ... additional rows
    ],
    "downloadUrl": "https://api.creditcsv.com/download/abc123"
  }
}`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold mr-2">GET</span>
                      /api/download/{"{id}"}
                    </CardTitle>
                    <CardDescription>Download a previously converted CSV file</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Request</h4>
                      <TabsContent value="curl" className="mt-0">
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                          {`curl -X GET https://api.creditcsv.com/download/abc123 \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Accept: text/csv" \\
  --output statement.csv`}
                        </pre>
                      </TabsContent>
                      <TabsContent value="javascript" className="mt-0">
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                          {`fetch('https://api.creditcsv.com/download/abc123', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Accept': 'text/csv'
  }
})
.then(response => response.blob())
.then(blob => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'statement.csv';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
})
.catch(error => console.error(error));`}
                        </pre>
                      </TabsContent>
                      <TabsContent value="python" className="mt-0">
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                          {`import requests

url = "https://api.creditcsv.com/download/abc123"
headers = {
  "Authorization": "Bearer YOUR_API_KEY",
  "Accept": "text/csv"
}

response = requests.get(url, headers=headers)
with open("statement.csv", "wb") as f:
    f.write(response.content)`}
                        </pre>
                      </TabsContent>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Response</h4>
                      <p className="text-sm text-gray-600">
                        Returns the CSV file as a download with Content-Type: text/csv
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Tabs>
            
            <Card>
              <CardHeader>
                <CardTitle>Rate Limits</CardTitle>
                <CardDescription>
                  Information about API usage limits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-2 text-left">Plan</th>
                        <th className="px-4 py-2 text-left">Rate Limit</th>
                        <th className="px-4 py-2 text-left">Daily Limit</th>
                        <th className="px-4 py-2 text-left">File Size Limit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2">Free</td>
                        <td className="px-4 py-2">10 requests / minute</td>
                        <td className="px-4 py-2">50 conversions</td>
                        <td className="px-4 py-2">10 MB</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2">Basic</td>
                        <td className="px-4 py-2">30 requests / minute</td>
                        <td className="px-4 py-2">500 conversions</td>
                        <td className="px-4 py-2">20 MB</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Premium</td>
                        <td className="px-4 py-2">100 requests / minute</td>
                        <td className="px-4 py-2">Unlimited conversions</td>
                        <td className="px-4 py-2">50 MB</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Error Codes</CardTitle>
                <CardDescription>
                  Common API error responses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-2 text-left">Status Code</th>
                        <th className="px-4 py-2 text-left">Error Type</th>
                        <th className="px-4 py-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2">400</td>
                        <td className="px-4 py-2">Bad Request</td>
                        <td className="px-4 py-2">The request was malformed or missing required parameters</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2">401</td>
                        <td className="px-4 py-2">Unauthorized</td>
                        <td className="px-4 py-2">Invalid or missing API key</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2">403</td>
                        <td className="px-4 py-2">Forbidden</td>
                        <td className="px-4 py-2">You don't have permission to access this resource</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2">415</td>
                        <td className="px-4 py-2">Unsupported Media Type</td>
                        <td className="px-4 py-2">The uploaded file format is not supported</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2">429</td>
                        <td className="px-4 py-2">Too Many Requests</td>
                        <td className="px-4 py-2">Rate limit exceeded</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">500</td>
                        <td className="px-4 py-2">Server Error</td>
                        <td className="px-4 py-2">An unexpected error occurred on our servers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sample Code</CardTitle>
                <CardDescription>
                  Complete examples to help you get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="js-example">
                  <TabsList className="mb-4">
                    <TabsTrigger value="js-example">JavaScript</TabsTrigger>
                    <TabsTrigger value="python-example">Python</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="js-example">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                      {`// Example JavaScript implementation
const convertStatement = async (apiKey, pdfFile) => {
  try {
    // 1. Upload and convert the PDF
    const form = new FormData();
    form.append('file', pdfFile);
    
    const convertResponse = await fetch('https://api.creditcsv.com/convert', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${apiKey}\`
      },
      body: form
    });
    
    if (!convertResponse.ok) {
      throw new Error(\`API error: \${convertResponse.status}\`);
    }
    
    const result = await convertResponse.json();
    
    // 2. Download the CSV file
    const downloadResponse = await fetch(result.data.downloadUrl, {
      method: 'GET',
      headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Accept': 'text/csv'
      }
    });
    
    if (!downloadResponse.ok) {
      throw new Error(\`Download error: \${downloadResponse.status}\`);
    }
    
    // 3. Process or save the CSV
    const csvBlob = await downloadResponse.blob();
    return {
      success: true,
      data: result.data,
      csvBlob
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};`}
                    </pre>
                  </TabsContent>
                  
                  <TabsContent value="python-example">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                      {`# Example Python implementation
import requests

def convert_statement(api_key, pdf_path):
    try:
        # 1. Upload and convert the PDF
        convert_url = "https://api.creditcsv.com/convert"
        headers = {"Authorization": f"Bearer {api_key}"}
        files = {"file": open(pdf_path, "rb")}
        
        convert_response = requests.post(convert_url, headers=headers, files=files)
        convert_response.raise_for_status()
        result = convert_response.json()
        
        # 2. Download the CSV file
        download_url = result["data"]["downloadUrl"]
        download_headers = {
            "Authorization": f"Bearer {api_key}",
            "Accept": "text/csv"
        }
        
        download_response = requests.get(download_url, headers=download_headers)
        download_response.raise_for_status()
        
        # 3. Process or save the CSV
        csv_content = download_response.content
        csv_filename = pdf_path.replace(".pdf", ".csv")
        
        with open(csv_filename, "wb") as f:
            f.write(csv_content)
        
        return {
            "success": True, 
            "data": result["data"], 
            "csv_path": csv_filename
        }
    except requests.exceptions.RequestException as e:
        return {
            "success": False,
            "error": str(e)
        }
        
# Usage example
if __name__ == "__main__":
    result = convert_statement("YOUR_API_KEY", "statement.pdf")
    print(result)`}
                    </pre>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocsPage;
