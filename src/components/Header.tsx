import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "#" },
  { name: "RESIDENTIAL", href: "#properties" },
  { name: "COMMERCIAL", href: "#properties" },
  { name: "ACQUISITIONS", href: "#philosophy" },
  { name: "ABOUT", href: "#philosophy" },
  { name: "CONTACT", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-background/90 backdrop-blur-sm border-b border-border/50 py-2 hidden md:block">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="tel:+15612472797" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>(561) 247-2797</span>
            </a>
            <a href="mailto:realestate@chosenre.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>realestate@chosenre.com</span>
            </a>
          </div>
          <span className="text-muted-foreground tracking-widest text-xs">PALM BEACH & ORLANDO</span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background/80 backdrop-blur-md border-b border-border/30">
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary flex items-center justify-center">
              <span className="font-serif text-primary text-lg md:text-xl">C</span>
            </div>
            <span className="font-serif text-lg md:text-xl tracking-wider text-foreground">CHOSEN</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs tracking-[0.2em] text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Private Office CTA */}
          <a
            href="#contact"
            className="hidden lg:block text-xs tracking-[0.2em] text-primary border border-primary/50 px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            PRIVATE OFFICE
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <ul className="container py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm tracking-[0.15em] text-foreground/80 hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block text-xs tracking-[0.2em] text-primary border border-primary/50 px-5 py-2.5"
                >
                  PRIVATE OFFICE
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
