import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, ChevronDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import founderPhoto from "@/assets/founder-photo-new.jpg";
import heroImage from "@/assets/hero-living-room-new.jpg";

const heroImages = {
  residential: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop",
  commercial: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop",
};

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/properties?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xovgnnqo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject: "Newsletter Subscription" }),
      });

      if (response.ok) {
        toast({
          title: "Welcome to Chosen",
          description: "You've joined our exclusive community.",
        });
        setEmail("");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury living room" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy/40 to-navy/15" />

        <div
          className={cn(
            "relative z-10 container-custom pb-20 md:pb-28 pt-40 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-sans font-semibold tracking-ultra uppercase text-gold mb-6">
              Palm Beach & Orlando
            </span>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05] mb-4">
              Chosen for
              <br />
              Excellence.
            </h1>
            <p className="font-serif italic text-3xl md:text-5xl text-gold mb-8">
              Called to Serve.
            </p>

            <p className="text-cream/70 text-lg md:text-xl max-w-lg mb-10">
              Faith-driven integrity. World-class expertise.
            </p>

            {/* Search */}
            <form onSubmit={handleSearch} className="max-w-lg">
              <div className="flex bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-xl overflow-hidden">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by City, Lifestyle, or Zip..."
                  className="flex-1 bg-transparent px-5 py-4 text-cream placeholder:text-cream/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 bg-gold text-accent-foreground hover:bg-gold-dark transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/40 animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <div className="editorial-divider mx-auto mb-10" />
          <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight max-w-4xl mx-auto">
            "Called to Serve.
            <br />
            <span className="text-gold">Curated for Luxury.</span>"
          </blockquote>
          <div className="editorial-divider mx-auto mt-10" />
        </div>
      </section>

      {/* ── Residential / Commercial Split ── */}
      <section className="grid md:grid-cols-2 min-h-[70vh]">
        <Link
          to="/residential-buyers"
          className="relative group overflow-hidden flex items-center justify-center min-h-[40vh]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${heroImages.residential})` }}
          />
          <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/35 transition-colors duration-500" />
          <div className="relative z-10 text-center p-8">
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-3">
              Residential
            </h2>
            <span className="inline-flex items-center gap-2 text-sm font-sans tracking-wide-custom uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Explore <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>

        <Link
          to="/commercial"
          className="relative group overflow-hidden flex items-center justify-center min-h-[40vh]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${heroImages.commercial})` }}
          />
          <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/35 transition-colors duration-500" />
          <div className="relative z-10 text-center p-8">
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-3">
              Commercial
            </h2>
            <span className="inline-flex items-center gap-2 text-sm font-sans tracking-wide-custom uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Explore <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* ── Featured Properties ── */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-xs font-sans font-semibold tracking-ultra uppercase text-gold mb-3 block">
                Featured Collection
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                Curated Properties
              </h2>
            </div>
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-dark transition-colors animated-underline pb-1"
            >
              View All Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2670&auto=format&fit=crop", price: "$4,250,000", address: "Palm Beach Gardens" },
              { image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop", price: "$2,850,000", address: "Jupiter Island" },
              { image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2670&auto=format&fit=crop", price: "$5,900,000", address: "Singer Island" },
              { image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2670&auto=format&fit=crop", price: "$3,450,000", address: "Orlando Windermere" },
            ].map((property, i) => (
              <div key={i} className="group cursor-pointer card-hover rounded-xl overflow-hidden bg-background">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.address}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-serif text-xl text-foreground">{property.price}</p>
                  <p className="text-sm text-muted-foreground mt-1">{property.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy / Faith ── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={founderPhoto}
                alt="Our Philosophy"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="text-xs font-sans font-semibold tracking-ultra uppercase text-gold mb-4 block">
                Our Foundation
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Faith. Excellence.
                <br />
                <span className="italic text-gold">Legacy.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At Chosen Real Estate Advisors, we believe real estate is more than transactions—it's legacy,
                stewardship, and marketplace ministry. Every property search begins with a purpose.
                Every closing represents a new chapter.
              </p>
              <div className="editorial-divider mb-8" />
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-sm font-medium text-gold hover:text-gold-dark transition-colors"
              >
                Our Philosophy
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-sans font-semibold tracking-ultra uppercase text-gold mb-4 block">
              Stay Connected
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Join the Chosen Circle
            </h2>
            <p className="text-muted-foreground mb-10">
              Receive exclusive market insights, off-market opportunities, and prayer call invitations.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-foreground"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-7 py-3.5 rounded-lg bg-gold text-accent-foreground font-medium text-sm tracking-wide hover:bg-gold-dark transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
            Ready to Begin?
          </h2>
          <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto text-lg">
            Whether you're buying a home, investing in commercial property, or acquiring a business,
            we're here to guide you with excellence and integrity.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gold text-accent-foreground font-medium tracking-wide hover:bg-gold-dark transition-all duration-300"
          >
            Request Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
