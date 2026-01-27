import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-chosen.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Residential", href: "/residential-buyers" },
  { name: "Commercial", href: "/commercial" },
  { name: "Acquisitions", href: "/business-acquisitions" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Private Office", href: "/off-market-access" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === "/";
  
  // Transparent on hero, solid after scroll
  const headerBg = scrolled 
    ? "bg-primary/95 backdrop-blur-md" 
    : isHomePage 
      ? "bg-gradient-to-b from-primary/60 to-transparent" 
      : "bg-primary";

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        headerBg
      )}>
        {/* Main navigation */}
        <nav className="container-custom flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="Chosen Real Estate Advisors" 
              className="h-12 md:h-16 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-xs font-sans font-medium tracking-ultra uppercase text-primary-foreground/80 hover:text-champagne transition-colors duration-300 animated-underline py-1",
                  location.pathname === item.href && "text-champagne"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button - Text based */}
          <button
            className="lg:hidden text-xs font-sans font-medium tracking-ultra uppercase text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      {/* Full screen menu overlay */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-primary transition-all duration-500",
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        {/* Close button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-8 right-8 text-primary-foreground hover:text-champagne transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Menu content */}
        <div className="h-full flex flex-col justify-center items-center">
          <nav className="space-y-8 text-center">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-serif text-4xl md:text-6xl text-primary-foreground hover:text-champagne transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/properties"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-serif text-4xl md:text-6xl text-primary-foreground hover:text-champagne transition-colors duration-300"
            >
              Properties
            </Link>
            <Link
              to="/off-market-access"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-serif text-4xl md:text-6xl text-primary-foreground hover:text-champagne transition-colors duration-300"
            >
              Private Office
            </Link>
          </nav>

          {/* Contact info at bottom */}
          <div className="absolute bottom-12 left-0 right-0 flex flex-col md:flex-row justify-center items-center gap-6 text-primary-foreground/60 text-sm">
            <a href="tel:+15612472797" className="flex items-center gap-2 hover:text-champagne transition-colors">
              <Phone className="w-4 h-4" />
              (561) 247-2797
            </a>
            <a href="mailto:realestate@chosenre.com" className="flex items-center gap-2 hover:text-champagne transition-colors">
              <Mail className="w-4 h-4" />
              realestate@chosenre.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}