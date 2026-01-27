import { motion } from "framer-motion";

export const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
          alt="Luxury property exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Ready to Begin?
          </h2>

          <p className="text-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you're buying a home, investing in commercial property, or 
            acquiring a business, we're here to guide you with excellence and integrity.
          </p>

          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 text-xs tracking-[0.2em] hover:bg-primary/90 transition-colors"
          >
            REQUEST CONSULTATION
          </a>
        </motion.div>
      </div>
    </section>
  );
};
