"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
import { useState } from "react";

const CodeExamples = () => {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (code: string, label: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(label);
      //   toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(""), 2000);
    });
  };

  const examples = {
    javascript: `// Basic fetch request
fetch('https://api.dummyai.chat/v1/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: "What's the weather like today?",
    settings: {
      responseTime: "fast", // fast, medium, slow
      errorRate: 0, // 0-100 (percentage chance of error)
    }
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`,
    nodejs: `// Node.js example
const axios = require('axios');

async function chatWithDummyAI() {
  try {
    const response = await axios.post('https://api.dummyai.chat/v1/chat', {
      message: "Tell me a joke about programming",
      settings: {
        responseType: "humor", // general, technical, humor
        responseLength: "medium" // short, medium, long
      }
    });
    
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

chatWithDummyAI();`,
    python: `# Python example
import requests

response = requests.post(
    'https://api.dummyai.chat/v1/chat',
    json={
        'message': 'How do I implement a binary search?',
        'settings': {
            'responseType': 'technical',
            'errorRate': 10,  # 10% chance of error
            'includeDelay': True  # Simulate thinking time
        }
    }
)

if response.status_code == 200:
    print(response.json())
else:
    print(f"Error: {response.status_code}", response.text)`,
  };

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Integration Examples</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Copy and paste these examples to get started with the DummyAI Chat
            API.
          </p>
        </div>

        <Tabs defaultValue="javascript" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="nodejs">Node.js</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
          </TabsList>

          {Object.entries(examples).map(([key, code]) => (
            <TabsContent key={key} value={key} className="relative">
              <div className="code-block relative">
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(code, key)}
                >
                  {copied === key ? "Copied!" : "Copy"}
                </Button>
                <pre>{code}</pre>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CodeExamples;
