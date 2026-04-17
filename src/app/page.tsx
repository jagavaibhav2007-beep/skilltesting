import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero, ServiceStack, Skills, CTA } from "@features/portfolio";

export default function Home() {
  return (
    <main className="bg-obsidian min-h-screen">
      <Navbar />
      <Hero />
      <ServiceStack />
      <Skills />
      <CTA />
      <Footer />
    </main>
  );
}
