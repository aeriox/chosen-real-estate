import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Phone, Mail, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-chosen.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Residential", href: "/residential-buyers" },
  { name: "Commercial", href: "/commercial" },
  { name: "Acquisitions", href: "/business-acquisitions" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        )}
      >
        {/* Top utility bar */}
        <div className={cn(
          "border-b border-border/50 transition-all duration-300 hidden md:block",
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        )}>
          <div className="container-custom flex justify-between items-center py-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-6">
              <a href="tel:+15612472797" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Phone className="w-3 h-3" />
                (561) 247-2797
              </a>
              <a href="mailto:realestate@chosenre.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Mail className="w-3 h-3" />
                realestate@chosenre.com
              </a>
            </div>
            <span className="tracking-wide-custom uppercase text-[10px]">Palm Beach & Orlando</span>
          </div>
        </div>

        {/* Main nav */}
        <nav className="container-custom flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Chosen Real Estate Advisors"
              className={cn(
                "h-10 md:h-14 w-auto transition-all duration-300",
                scrolled ? "brightness-100" : "brightness-0 invert"
              )}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 animated-underline pb-0.5",
                  scrolled ? "text-foreground hover:text-accent" : "text-primary-foreground/90 hover:text-primary-foreground",
                  location.pathname === item.href && (scrolled ? "text-accent" : "text-primary-foreground")
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/off-market-access"
              className={cn(
                "text-[13px] font-semibold tracking-wide uppercase px-5 py-2.5 rounded-lg transition-all duration-200",
                scrolled
                  ? "bg-accent text-accent-foreground hover:bg-terra-dark"
                  : "bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/25"
              )}
            >
              Private Office
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-foreground" : "text-primary-foreground"
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-background transition-all duration-400",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="container-custom flex justify-between items-center py-4">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src={logoImage} alt="Chosen" className="h-10 w-auto" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-foreground hover:text-accent transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="container-custom mt-12 space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-serif text-3xl text-foreground hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/off-market-access"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-serif text-3xl text-accent"
          >
            Private Office
          </Link>
          <Link
            to="/properties"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-serif text-3xl text-foreground hover:text-accent transition-colors"
          >
            Properties
          </Link>

          <div className="pt-8 border-t border-border space-y-3 text-sm text-muted-foreground">
            <a href="tel:+15612472797" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              (561) 247-2797
            </a>
            <a href="mailto:realestate@chosenre.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              realestate@chosenre.com
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}