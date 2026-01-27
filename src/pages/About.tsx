import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Star, MapPin, Users, Heart, 
  ArrowRight, CheckCircle, Building2, Briefcase
} from "lucide-react";

const values = [
  { icon: Heart, title: "Faith", description: "God is the foundation of everything we do. We begin with prayer and end with gratitude." },
  { icon: Star, title: "Excellence", description: "We bring our best to every transaction. Good enough isn't good enough." },
  { icon: CheckCircle, title: "Integrity", description: "Our word is our bond. We do what we say and say what we mean." },
  { icon: Users, title: "Service", description: "Clients come first. Always. We exist to serve, not to be served." },
  { icon: Building2, title: "Legacy", description: "We're building something that lasts—for our clients and our community." },
];

const markets = [
  {
    region: "Palm Beach County",
    areas: ["Palm Beach", "West Palm Beach", "Jupiter", "Boca Raton", "Delray Beach", "Wellington"],
  },
  {
    region: "Orlando Metro",
    areas: ["Orlando", "Winter Park", "Lake Nona", "Dr. Phillips", "Windermere", "Kissimmee"],
  },
];

const partners = [
  "Real Estate Attorneys",
  "Mortgage Lenders & Private Capital",
  "SBA Lenders",
  "Title Companies",
  "1031 Exchange Facilitators",
  "CPAs & Tax Advisors",
  "Property Inspectors",
  "Contractors & Developers",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">About Us</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              About Chosen Real Estate Advisors
            </h1>
            <p className="text-xl text-cream/80 italic">
              "Real estate with purpose. Business with integrity. Legacy with faith."
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium tracking-widest uppercase mb-4">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                Founded on Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Chosen Real Estate Advisors was founded on a simple belief: real estate is about 
                  more than transactions. It's about legacy, stewardship, and serving people with excellence.
                </p>
                <p>
                  We bring faith into the marketplace—not as a marketing angle, but as the foundation 
                  of how we operate. Every property search begins with a purpose. Every closing represents 
                  a new chapter. We're honored to guide you through both.
                </p>
                <p>
                  Whether you're buying your first home, investing in commercial property, or acquiring 
                  a business, we believe God has called us to serve you with integrity, expertise, and prayer.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-10 text-center">
                <p className="text-gold font-medium tracking-widest uppercase mb-4">Our Mission</p>
                <p className="font-serif text-2xl text-cream leading-relaxed">
                  "To serve clients with excellence, integrity, and purpose—bringing faith into the 
                  marketplace and building legacy through real estate."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">Our Foundation</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-8 card-hover border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">Where We Serve</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream">
              Our Markets
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {markets.map((market) => (
              <div
                key={market.region}
                className="bg-cream/5 rounded-xl p-8 border border-cream/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-gold" />
                  <h3 className="font-serif text-2xl font-bold text-cream">{market.region}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {market.areas.map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold/70" />
                      <span className="text-cream/80">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-cream/60 mt-8">
            + Statewide Florida coverage for commercial and business acquisitions
          </p>
        </div>
      </section>

      {/* Network Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium tracking-widest uppercase mb-4">Our Network</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                Partners & Resources
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We've built relationships with trusted professionals to serve our clients better. 
                When you work with Chosen, you gain access to our entire network.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="flex items-center gap-3 p-4 rounded-lg bg-secondary border border-border"
                >
                  <Briefcase className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm text-foreground">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-secondary to-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Ready to Partner with Chosen?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Whether you're buying, selling, investing, or acquiring—we're here to serve you 
              with excellence and integrity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="navy" size="xl" asChild>
                <Link to="/contact">
                  Request a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="gold-outline" size="lg" asChild>
                <Link to="/faith-community">
                  Join Our Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
