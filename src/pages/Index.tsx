import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import founderPhoto from "@/assets/founder-photo.jpg";

// High-quality hero images
const heroImages = {
  residential: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop",
  commercial: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
  hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
};

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredSplit, setHoveredSplit] = useState<"residential" | "commercial" | null>(null);
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
      {/* Hero Section - Full Screen Cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with subtle movement */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[20s]"
          style={{ 
            backgroundImage: `url(${heroImages.hero})`,
          }}
        />
        
        {/* Subtle dark overlay - not heavy */}
        <div className="absolute inset-0 bg-primary/40" />
        
        {/* Content */}
        <div className={cn(
          "relative z-10 container-custom text-center text-primary-foreground pt-20 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="max-w-4xl mx-auto">
            {/* Sub-headline */}
            <span 
              className="inline-block text-xs md:text-sm tracking-ultra uppercase text-champagne-light mb-8"
              style={{ animationDelay: "0.2s" }}
            >
              Palm Beach & Orlando
            </span>
            
            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-[1.1]">
              Chosen for Excellence.
              <br />
              <span className="italic text-champagne">Called to Serve.</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-lg md:text-xl font-light text-primary-foreground/80 mb-12 tracking-wide">
              Faith-driven integrity. World-class expertise.
            </p>
            
            {/* Glassmorphism Search Bar */}
            <form onSubmit={handleSearch} className="max-w-xl mx-auto">
              <div className="flex items-center glass rounded-full px-6 py-3 shadow-glass hover:bg-primary-foreground/10 transition-all duration-300">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by City, Lifestyle, or Zip..."
                  className="flex-1 bg-transparent border-none text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none font-light text-base"
                />
                <button
                  type="submit"
                  className="w-12 h-12 rounded-full bg-champagne flex items-center justify-center hover:bg-champagne-light transition-colors duration-300"
                >
                  <Search className="w-5 h-5 text-primary" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* The Intro Quote Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
              "Called to Serve.
              <br />
              <span className="text-champagne">Curated for Luxury.</span>"
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Split Section - Residential vs Commercial */}
      <section className="flex flex-col md:flex-row h-[80vh] overflow-hidden">
        {/* Residential */}
        <Link
          to="/residential-buyers"
          className={cn(
            "relative flex-1 flex items-center justify-center overflow-hidden cursor-pointer split-expand",
            hoveredSplit === "residential" && "md:flex-[2.5]",
            hoveredSplit === "commercial" && "md:flex-[0.5]"
          )}
          onMouseEnter={() => setHoveredSplit("residential")}
          onMouseLeave={() => setHoveredSplit(null)}
        >
          {/* Background Image */}
          <div 
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-transform duration-700",
              hoveredSplit === "residential" && "scale-110"
            )}
            style={{ backgroundImage: `url(${heroImages.residential})` }}
          />
          
          {/* Overlay */}
          <div className={cn(
            "absolute inset-0 bg-primary/40 transition-all duration-500",
            hoveredSplit === "residential" && "bg-primary/20"
          )} />
          
          {/* Title */}
          <div className="relative z-10 text-center">
            <h2 className={cn(
              "font-serif text-3xl md:text-5xl text-primary-foreground uppercase tracking-wide-custom px-8 py-4 border border-primary-foreground/30 bg-primary/20 backdrop-blur-sm transition-all duration-500",
              hoveredSplit === "residential" && "border-champagne text-champagne"
            )}>
              Residential
            </h2>
          </div>
        </Link>

        {/* Commercial */}
        <Link
          to="/commercial"
          className={cn(
            "relative flex-1 flex items-center justify-center overflow-hidden cursor-pointer split-expand",
            hoveredSplit === "commercial" && "md:flex-[2.5]",
            hoveredSplit === "residential" && "md:flex-[0.5]"
          )}
          onMouseEnter={() => setHoveredSplit("commercial")}
          onMouseLeave={() => setHoveredSplit(null)}
        >
          {/* Background Image */}
          <div 
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-transform duration-700",
              hoveredSplit === "commercial" && "scale-110"
            )}
            style={{ backgroundImage: `url(${heroImages.commercial})` }}
          />
          
          {/* Overlay */}
          <div className={cn(
            "absolute inset-0 bg-primary/40 transition-all duration-500",
            hoveredSplit === "commercial" && "bg-primary/20"
          )} />
          
          {/* Title */}
          <div className="relative z-10 text-center">
            <h2 className={cn(
              "font-serif text-3xl md:text-5xl text-primary-foreground uppercase tracking-wide-custom px-8 py-4 border border-primary-foreground/30 bg-primary/20 backdrop-blur-sm transition-all duration-500",
              hoveredSplit === "commercial" && "border-champagne text-champagne"
            )}>
              Commercial
            </h2>
          </div>
        </Link>
      </section>

      {/* Featured Collection - Gallery Style */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs tracking-ultra uppercase text-champagne mb-4 block">
              Featured Collection
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Curated Properties
            </h2>
          </div>

          {/* Horizontal scroll gallery */}
          <div className="flex gap-8 overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {[
              { 
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop",
                price: "$4,250,000",
                address: "Palm Beach Gardens"
              },
              { 
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
                price: "$2,850,000",
                address: "Jupiter Island"
              },
              { 
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
                price: "$5,900,000",
                address: "Singer Island"
              },
              { 
                image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop",
                price: "$3,450,000",
                address: "Orlando Windermere"
              },
            ].map((property, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[30vw] snap-start group"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img 
                    src={property.image} 
                    alt={property.address}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-muted-foreground tracking-wide">{property.price}</p>
                <p className="font-serif text-xl text-foreground">{property.address}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/properties"
              className="inline-flex items-center gap-3 text-sm tracking-ultra uppercase text-foreground hover:text-champagne transition-colors animated-underline pb-1"
            >
              View All Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Team / Faith Element */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={founderPhoto}
                alt="Our Philosophy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Content */}
            <div className="text-primary-foreground">
              <span className="text-xs tracking-ultra uppercase text-champagne mb-6 block">
                Our Foundation
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
                Faith. Excellence.
                <br />
                <span className="italic">Legacy.</span>
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10">
                At Chosen Real Estate Advisors, we believe real estate is more than transactions—it's legacy, 
                stewardship, and marketplace ministry. Every property search begins with a purpose. 
                Every closing represents a new chapter.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center gap-3 text-xs tracking-ultra uppercase text-champagne hover:text-champagne-light transition-colors animated-underline pb-1"
              >
                Our Philosophy
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs tracking-ultra uppercase text-champagne mb-6 block">
              Stay Connected
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Join the Chosen Circle
            </h2>
            <p className="text-muted-foreground mb-10">
              Receive exclusive market insights, off-market opportunities, and prayer call invitations.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 border border-border bg-transparent focus:outline-none focus:border-champagne transition-colors text-foreground"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="px-8 py-4 bg-primary text-primary-foreground text-xs tracking-ultra uppercase hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground mb-8">
              Ready to Begin?
            </h2>
            <p className="text-primary-foreground/70 mb-12 max-w-xl mx-auto text-lg">
              Whether you're buying a home, investing in commercial property, or acquiring a business, 
              we're here to guide you with excellence and integrity.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-champagne text-primary text-xs tracking-ultra uppercase hover:bg-champagne-light transition-all duration-300"
            >
              Request Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;