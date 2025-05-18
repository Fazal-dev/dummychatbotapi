import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-bold text-xl">
              DummyAI<span className="text-primary">Chat</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a
              href="#features"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <Link
              href="/docs"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Documentation
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/docs">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
