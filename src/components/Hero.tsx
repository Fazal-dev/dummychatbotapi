import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-background">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center min-h-[80vh] space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            Dummy Chat<span className="text-primary">Bot API</span>
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground mx-auto">
            Fast, reliable mock AI responses with zero auth. Perfect for
            prototypes and testing.
          </p>
        </div>

        <div className="w-full max-w-md mx-auto p-4 bg-secondary rounded-xl">
          <code className="text-xs sm:text-sm overflow-x-auto block text-left">
            <pre className="overflow-x-auto">
              <span className="text-muted-foreground"># Quick Start</span>
              {"\n"}fetch('https://api.dummyai.chat/v1/chat')
              {"\n"} .then(res ={">"} res.json())
              {"\n"} .then(data ={">"} console.log(data))
            </pre>
          </code>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="font-medium">
            <Link href="/">Read Documentation</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-medium">
            <a href="#features">Explore Features</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
