import React from "react";
import {
  Bot,
  Zap,
  FileText,
  Search,
  Bot as BotIcon,
  MessageCircle,
  ArrowRight,
  Link,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Features = () => {
  const features = [
    {
      title: "Zero Authentication",
      description: "No API keys, no signup. Just fetch and use instantly.",
      icon: <Link className="h-5 w-5" />,
    },
    {
      title: "Mock Errors & Timeouts",
      description:
        "Simulate real-world API behavior with configurable errors and delays.",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "JSON Responses",
      description: "Clean, consistent response formats for easy integration.",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Smart Mocked Responses",
      description: "Responses that mimic real AI conversation patterns.",
      icon: <Bot className="h-5 w-5" />,
    },
    {
      title: "RESTful Endpoints",
      description: "Simple, intuitive API design following REST principles.",
      icon: <ArrowRight className="h-5 w-5" />,
    },
    {
      title: "Custom Response Types",
      description: "Control the type of responses you receive via parameters.",
      icon: <MessageCircle className="h-5 w-5" />,
    },
  ];

  return (
    <section id="features" className="py-16 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">API Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to prototype, test, and build your AI
            applications quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background border-border">
              <CardHeader>
                <div className="mb-2 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
