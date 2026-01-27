import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { 
  Building2, Users, TrendingUp, FileText, Lock, 
  HardHat, MapPin, RefreshCw, ArrowRight, CheckCircle 
} from "lucide-react";
import commercialHero from "@/assets/commercial-hero.jpg";

const services = [
  {
    icon: Users,
    title: "Tenant Representation",
    description: "We advocate for businesses seeking retail, office, or industrial space. From site selection to lease negotiation, we protect your interests.",
  },
  {
    icon: Building2,
    title: "Buyer Representation",
    description: "Acquiring commercial property requires strategy. We guide investors and owner-users through identification, due diligence, and closing.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Access our network for multifamily, retail, and mixed-use investment opportunities. We help structure deals that align with your goals.",
  },
  {
    icon: FileText,
    title: "LOI & MOU Structuring",
    description: "We prepare Letters of Intent and Memoranda of Understanding that protect your position and set deals up for success.",
  },
  {
    icon: Lock,
    title: "Off-Market Sourcing",
    description: "Many of the best deals never hit the market. We actively source opportunities through relationships and direct outreach.",
  },
  {
    icon: HardHat,
    title: "Development Support",
    description: "From site feasibility to entitlement navigation to investor presentations, we support developers at every stage.",
  },
  {
    icon: MapPin,
    title: "Zoning & Land Use",
    description: "Understanding what you can build is half the battle. We help navigate zoning, variances, and land use considerations.",
  },
  {
    icon: RefreshCw,
    title: "1031 Exchange",
    description: "Preserve your capital gains with a properly structured exchange. We coordinate with qualified intermediaries.",
  },
];

const propertyTypes = [
  "Office Space",
  "Retail Properties",
  "Industrial & Warehouse",
  "Multifamily Investment",
  "Mixed-Use Development",
  "Land & Development Sites",
];

const Commercial = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${commercialHero})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 container-custom pt-32 pb-20">
          <div className="max-w-3xl">
            <p className="text-gold font-medium tracking-widest uppercase mb-4 animate-fade-in">
              Commercial Real Estate
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 slide-up">
              Commercial Real Estate Advisory
            </h1>
            <p className="text-xl text-cream/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Tenant representation, buyer advocacy, and investment opportunities—with integrity at the center.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" asChild>
                <Link to="/contact">Request Consultation</Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/off-market-access">
                  <Lock className="w-4 h-4" />
                  Off-Market Access
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
              Purpose-Driven Commercial Expertise
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chosen Real Estate Advisors serves businesses, investors, and developers across Palm Beach 
              and Orlando. Whether you're leasing your next location, acquiring an asset, or structuring 
              a partnership, we bring expertise and purpose to every deal.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              Our Commercial Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card rounded-xl p-6 card-hover border border-border group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium tracking-widest uppercase mb-4">Property Types</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
                Markets We Serve
              </h2>
              <p className="text-cream/80 mb-8 leading-relaxed">
                From boutique retail to institutional-grade investments, we have experience across 
                all major commercial property types in the Palm Beach and Orlando markets.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {propertyTypes.map((type) => (
                  <div key={type} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-cream/90">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl p-8 border border-gold/20">
                <h3 className="font-serif text-2xl font-bold text-cream mb-4">
                  The Chosen Difference
                </h3>
                <p className="text-cream/80 mb-6 leading-relaxed">
                  "Every commercial transaction is covered in prayer. We believe God moves in the 
                  marketplace, and we're honored to partner with you in building legacy."
                </p>
                <Button variant="gold" asChild>
                  <Link to="/faith-community">
                    Learn About Our Culture
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-cream to-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Have a Commercial Requirement?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Whether you're searching for space, acquiring property, or exploring investment 
              opportunities, our team is ready to serve you with excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="navy" size="xl" asChild>
                <Link to="/contact">
                  Request Commercial Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="gold-outline" size="lg" asChild>
                <Link to="/off-market-access">
                  <Lock className="w-4 h-4" />
                  Request Off-Market Access
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Commercial;
