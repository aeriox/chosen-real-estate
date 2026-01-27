import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { Philosophy } from "@/components/Philosophy";
import { Newsletter } from "@/components/Newsletter";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
        <Philosophy />
        <Newsletter />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
