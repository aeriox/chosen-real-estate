import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop",
    price: "$4,250,000",
    location: "Palm Beach Gardens",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
    price: "$2,850,000",
    location: "Jupiter Island",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
    price: "$5,900,000",
    location: "Singer Island",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop",
    price: "$3,450,000",
    location: "Orlando Windermere",
  },
];

export const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary tracking-[0.3em] text-xs mb-4 block">
            FEATURED COLLECTION
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Curated Properties
          </h2>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={property.image}
                  alt={property.location}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Property Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary font-serif text-2xl mb-1">
                    {property.price}
                  </p>
                  <p className="text-foreground/80 text-sm tracking-wide">
                    {property.location}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-block text-xs tracking-[0.2em] text-foreground border border-foreground/30 px-8 py-3 hover:border-primary hover:text-primary transition-all duration-300"
          >
            VIEW ALL PROPERTIES
          </a>
        </motion.div>
      </div>
    </section>
  );
};
