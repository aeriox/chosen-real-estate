import { motion } from "framer-motion";
import { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-primary tracking-[0.3em] text-xs mb-4 block">
            STAY CONNECTED
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Join the Chosen Circle
          </h2>

          <p className="text-foreground/70 mb-10">
            Receive exclusive market insights, off-market opportunities, and 
            prayer call invitations.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-secondary/50 border border-border px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-4 text-xs tracking-[0.2em] hover:bg-primary/90 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
