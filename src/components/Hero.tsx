import { motion } from "framer-motion";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-living-room-new.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury modern living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4 pt-32 md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-gold tracking-[0.3em] text-xs md:text-sm mb-6"
        >
          PALM BEACH & ORLANDO
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream mb-4"
        >
          Chosen for Excellence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif italic text-3xl md:text-5xl lg:text-6xl text-gold mb-8"
        >
          Called to Serve.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream/80 text-lg md:text-xl tracking-wide mb-12"
        >
          Faith-driven integrity. World-class expertise.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-xl mx-auto"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search by City, Lifestyle, or Zip..."
              className="w-full bg-cream/10 backdrop-blur-md border border-cream/20 rounded-full py-4 pl-6 pr-14 text-cream placeholder:text-cream/50 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold-dark transition-colors">
              <Search className="w-5 h-5 text-accent-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Service Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-8 mt-12"
        >
          <a
            href="#properties"
            className="text-sm tracking-[0.2em] text-cream border-b border-cream/30 pb-1 hover:text-gold hover:border-gold transition-colors"
          >
            RESIDENTIAL
          </a>
          <a
            href="#properties"
            className="text-sm tracking-[0.2em] text-cream border-b border-cream/30 pb-1 hover:text-gold hover:border-gold transition-colors"
          >
            COMMERCIAL
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-cream/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-gold rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
