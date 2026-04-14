import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero, ServiceStack, Capabilities, CTA } from "@features/portfolio";

export default function Home() {
  return (
    <main className="bg-background-monolith min-h-screen">
      <Navbar />
      <Hero />
      <ServiceStack />
      <Capabilities />
      <CTA />
      <Footer />
    </main>
  );
}
