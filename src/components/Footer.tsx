import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center">
                <span className="font-serif text-primary text-lg">C</span>
              </div>
              <span className="font-serif text-xl tracking-wider text-foreground">CHOSEN</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Faith-driven real estate advisors serving Palm Beach & Orlando with 
              excellence and integrity.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-foreground mb-6">CONTACT</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+15612472797"
                  className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>(561) 247-2797</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:realestate@chosenre.com"
                  className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>realestate@chosenre.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-foreground/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Palm Beach & Orlando, FL</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-foreground mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {["Residential", "Commercial", "Acquisitions", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-xs">
            © {new Date().getFullYear()} Chosen Real Estate Advisors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors text-xs">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
