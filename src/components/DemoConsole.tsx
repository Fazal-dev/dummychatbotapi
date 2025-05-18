"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot } from "lucide-react";

const DemoConsole = () => {
  const [loading, setLoading] = useState(false);
  const [responseType, setResponseType] = useState("general");
  const [errorRate, setErrorRate] = useState("0");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<{
    message?: string;
    error?: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    // Simulate API response delay
    setTimeout(() => {
      const errorChance = parseInt(errorRate);
      const randomValue = Math.random() * 100;

      if (randomValue < errorChance) {
        // Return simulated error
        setResult({
          error: "Error 429: Rate limit exceeded. Please try again later.",
        });
      } else {
        // Return simulated response based on responseType
        let response = "";

        if (message.trim() === "") {
          response = "Please provide a message to get a response.";
        } else {
          switch (responseType) {
            case "general":
              response = `I understand you're asking about "${message}". This is a simulated general response from the dummy AI API that would provide helpful information on this topic.`;
              break;
            case "technical":
              response = `Regarding "${message}", from a technical perspective, I would implement a solution using modern frameworks and efficient algorithms. This is just a demonstration of a technical-style response from the API.`;
              break;
            case "humor":
              response = `You asked about "${message}"? Well, I could tell you, but then I'd have to... just kidding! Here's a lighthearted take on your question instead of a real answer because this is a dummy API.`;
              break;
            default:
              response = `Here's a response about "${message}" from the dummy API.`;
          }
        }

        setResult({ message: response });
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Try It Yourself</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Test the API directly from your browser with our interactive
            console.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Input Panel */}
          <Card>
            <CardHeader>
              <CardTitle>Request</CardTitle>
              <CardDescription>
                Configure your API request parameters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Enter your message here..."
                    className="min-h-[100px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Response Type</label>
                    <Select
                      value={responseType}
                      onValueChange={setResponseType}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="technical">Technical</SelectItem>
                        <SelectItem value="humor">Humor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Error Rate (%)
                    </label>
                    <Select value={errorRate} onValueChange={setErrorRate}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select %" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0% (No Errors)</SelectItem>
                        <SelectItem value="25">25% Chance</SelectItem>
                        <SelectItem value="50">50% Chance</SelectItem>
                        <SelectItem value="75">75% Chance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full"
              >
                {loading ? "Sending..." : "Send Request"}
              </Button>
            </CardFooter>
          </Card>

          {/* Output Panel */}
          <Card>
            <CardHeader>
              <CardTitle>Response</CardTitle>
              <CardDescription>API response will appear here</CardDescription>
            </CardHeader>
            <CardContent className="min-h-[220px]">
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-pulse flex flex-col items-center">
                    <Bot className="h-10 w-10 mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Generating response...
                    </p>
                  </div>
                </div>
              ) : result ? (
                <div className="bg-secondary p-4 rounded-md">
                  {result.error ? (
                    <div className="text-destructive">
                      <pre className="whitespace-pre-wrap">{result.error}</pre>
                    </div>
                  ) : (
                    <pre className="whitespace-pre-wrap">{result.message}</pre>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <p>Send a request to see the response</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
              Response time:{" "}
              {loading ? "Calculating..." : result ? "956ms" : "N/A"}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoConsole;
