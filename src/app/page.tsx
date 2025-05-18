import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen px-5 pt-3 flex flex-col">
      <Navbar />
      <main className="flex-grow ">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
