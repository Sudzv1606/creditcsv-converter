
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DocsApi = () => {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-2">API Documentation</h1>
        <p className="text-gray-600 mb-8">
          Documentation for the statement conversion API endpoints.
        </p>
        
        <Card>
          <CardHeader>
            <CardTitle>API Endpoints</CardTitle>
            <CardDescription>
              Reference documentation for all available API endpoints
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Base URL</h3>
              <pre className="bg-gray-100 p-3 rounded-md">https://api.creditcsv.com/v1</pre>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Authentication</h3>
              <p className="mb-3">
                All API requests require an API key passed in the header:
              </p>
              <pre className="bg-gray-100 p-3 rounded-md">
                {`Authorization: Bearer YOUR_API_KEY`}
              </pre>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold mr-2">POST</span>
              /convert
            </CardTitle>
            <CardDescription>Convert a PDF statement to CSV format</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Request</h3>
              <p className="mb-2">Content-Type: multipart/form-data</p>
              
              <Tabs defaultValue="curl">
                <TabsList className="mb-4">
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                </TabsList>
                
                <TabsContent value="curl">
                  <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm">
{`curl -X POST https://api.creditcsv.com/v1/convert \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@statement.pdf" \\
  -F "options={'detectTables': true, 'outputFormat': 'csv'}"
`}
                  </pre>
                </TabsContent>
                
                <TabsContent value="javascript">
                  <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm">
{`const form = new FormData();
form.append('file', pdfFile);
form.append('options', JSON.stringify({ 
  detectTables: true, 
  outputFormat: 'csv' 
}));

fetch('https://api.creditcsv.com/v1/convert', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: form
})
.then(response => response.json())
.then(data => console.log(data));
`}
                  </pre>
                </TabsContent>
                
                <TabsContent value="python">
                  <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm">
{`import requests
import json

url = "https://api.creditcsv.com/v1/convert"
headers = {"Authorization": "Bearer YOUR_API_KEY"}
files = {"file": open("statement.pdf", "rb")}
data = {"options": json.dumps({
  "detectTables": True,
  "outputFormat": "csv"
})}

response = requests.post(url, headers=headers, files=files, data=data)
print(response.json())
`}
                  </pre>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Response</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm">
{`{
  "success": true,
  "data": {
    "headers": ["Transaction Date", "Posting Date", "Description", "Amount"],
    "rows": [
      ["2023-04-01", "2023-04-03", "GROCERY STORE", "-64.97"],
      ["2023-04-02", "2023-04-04", "RESTAURANT", "-38.75"],
      // ... additional rows
    ],
    "downloadUrl": "https://api.creditcsv.com/v1/download/abc123",
    "statementType": "VISA",
    "processingTimeMs": 1234
  }
}
`}
              </pre>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold mr-2">GET</span>
              /download/{"{id}"}
            </CardTitle>
            <CardDescription>Download a previously converted file</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Request</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm">
{`GET https://api.creditcsv.com/v1/download/abc123
Authorization: Bearer YOUR_API_KEY
Accept: text/csv
`}
              </pre>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Response</h3>
              <p>Returns the CSV file with Content-Type: text/csv</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Error Codes</CardTitle>
            <CardDescription>Common API error responses</CardDescription>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left">Error Code</th>
                  <th className="px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">INVALID_API_KEY</td>
                  <td className="px-4 py-2">The API key provided is invalid or has expired</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">INVALID_PDF</td>
                  <td className="px-4 py-2">The file provided is not a valid PDF</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">PROCESSING_FAILED</td>
                  <td className="px-4 py-2">The system couldn't process the PDF due to format issues</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">FILE_TOO_LARGE</td>
                  <td className="px-4 py-2">The file exceeds the maximum allowed size</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">INTERNAL_ERROR</td>
                  <td className="px-4 py-2">An unexpected error occurred on the server</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocsApi;
