import { Link } from "react-router-dom";
import { Facebook, Heart, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  properties: [
    { name: "Search Properties", href: "/properties" },
    { name: "Residential", href: "/residential-buyers" },
    { name: "Commercial", href: "/commercial" },
  ],
  services: [
    { name: "Business Acquisitions", href: "/business-acquisitions" },
    { name: "Private Office", href: "/off-market-access" },
    { name: "All Services", href: "/services" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Faith & Community", href: "/faith-community" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-wide-custom uppercase">
                Chosen Real Estate Advisors
              </span>
            </Link>
            <p className="mt-4 text-sm italic text-champagne">
              "Faith. Excellence. Legacy."
            </p>
            <p className="mt-6 text-primary-foreground/60 text-sm leading-relaxed max-w-sm">
              A faith-driven real estate brokerage serving Palm Beach & Orlando with integrity, 
              expertise, and purpose.
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <a href="tel:+15612472797" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-champagne transition-colors">
                <Phone className="w-4 h-4" />
                (561) 247-2797
              </a>
              <a href="mailto:realestate@chosenre.com" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-champagne transition-colors">
                <Mail className="w-4 h-4" />
                realestate@chosenre.com
              </a>
              <p className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4" />
                Palm Beach & Orlando, FL
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.facebook.com/chosenre"
                className="p-3 border border-primary-foreground/20 hover:border-champagne hover:text-champagne transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Properties Links */}
          <div>
            <h4 className="text-xs tracking-ultra uppercase text-champagne mb-6">Properties</h4>
            <ul className="space-y-4">
              {footerLinks.properties.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-champagne transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs tracking-ultra uppercase text-champagne mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-champagne transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs tracking-ultra uppercase text-champagne mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-champagne transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/faith-community"
                  className="inline-flex items-center gap-2 text-sm text-champagne hover:text-champagne-light transition-colors"
                >
                  <Heart className="w-4 h-4" />
                  Request Prayer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-8 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/40 tracking-wide">
              © {new Date().getFullYear()} Chosen Real Estate Advisors. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link to="/privacy" className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors tracking-wide">
                Privacy
              </Link>
              <Link to="/terms" className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors tracking-wide">
                Terms
              </Link>
            </div>
          </div>
          {/* Stellar MLS Disclosure */}
          <p className="text-[10px] text-primary-foreground/30 text-center leading-relaxed max-w-4xl mx-auto">
            Based on information from the Stellar Multiple Listing Service. This information may or may not include all listed expired, withdrawn, pending, or sold properties of one or more members of the Stellar Multiple Listing Service.
          </p>
        </div>
      </div>
    </footer>
  );
}