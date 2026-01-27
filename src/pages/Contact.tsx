import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Phone, Mail, MapPin, Clock, 
  Send, Heart, Facebook
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(561) 247-2797", href: "tel:+15612472797" },
  { icon: Mail, label: "Email", value: "realestate@chosenre.com", href: "mailto:realestate@chosenre.com" },
  { icon: MapPin, label: "Office", value: "860 Jupiter Park Dr, Suite 1A, Jupiter, FL 33458", href: "https://maps.google.com/?q=860+Jupiter+Park+Dr+Suite+1A+Jupiter+FL+33458" },
  { icon: Clock, label: "Hours", value: "Mon - Fri, 9 AM - 6 PM EST", href: null },
];

const subjects = [
  "Residential Inquiry",
  "Commercial Inquiry",
  "Business Acquisition",
  "Careers",
  "Prayer Request",
  "Partnership Opportunity",
  "Other",
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/chosenre", label: "Facebook" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const FORMSPREE_ID = "xovgnnqo";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll be in touch within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">Get In Touch</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Contact Chosen
            </h1>
            <p className="text-xl text-cream/80">
              Let's start a conversation about your real estate goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button type="submit" variant="navy" size="xl" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-navy font-medium hover:text-gold transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-navy font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="font-semibold text-navy mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center hover:bg-navy hover:text-cream transition-all"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Prayer Request Card */}
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl p-6 border border-gold/20">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-lg font-bold text-navy">Need Prayer?</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  We'd be honored to pray with you. Whether it's for a property, a deal, 
                  or something personal—we're here.
                </p>
                <Button variant="gold-outline" size="sm" asChild>
                  <a href="/faith-community">Submit Prayer Request</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-secondary">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.8384397770387!2d-80.11457492391453!3d26.93069487664686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ded7e6b41f4a67%3A0x8a38a3d8a9f0e8f5!2s860%20Jupiter%20Park%20Dr%20%231a%2C%20Jupiter%2C%20FL%2033458!5e0!3m2!1sen!2sus!4v1702150000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Chosen Real Estate Advisors Office Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </section>
    </Layout>
  );
};

export default Contact;
