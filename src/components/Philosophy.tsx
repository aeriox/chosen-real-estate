import { motion } from "framer-motion";

export const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2669&auto=format&fit=crop"
                alt="Modern office space"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold tracking-[0.3em] text-xs mb-4 block">
              OUR FOUNDATION
            </span>
            
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              Faith. Excellence.
              <br />
              <span className="italic text-gold">Legacy.</span>
            </h2>

            <p className="text-foreground/70 leading-relaxed mb-8">
              At Chosen Real Estate Advisors, we believe real estate is more than 
              transactions—it's legacy, stewardship, and marketplace ministry. Every 
              property search begins with a purpose. Every closing represents a new chapter.
            </p>

            <blockquote className="border-l-2 border-gold pl-6 mb-8">
              <p className="font-serif italic text-xl text-foreground/80">
                "Called to Serve. Curated for Luxury."
              </p>
            </blockquote>

            <a
              href="#"
              className="inline-block text-xs tracking-[0.2em] text-gold border border-gold/50 px-8 py-3 hover:bg-gold hover:text-accent-foreground transition-all duration-300"
            >
              OUR PHILOSOPHY
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
