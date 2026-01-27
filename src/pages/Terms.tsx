import { Layout } from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-cream/80">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the Chosen Real Estate Advisors website, you agree to be bound 
                  by these Terms of Service and all applicable laws and regulations. If you do not agree 
                  with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Use of Website</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website is provided for informational purposes about our real estate services. 
                  You may use this site for lawful purposes only. You agree not to use the site in any 
                  way that could damage, disable, or impair the site or interfere with any other party's 
                  use of the site.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Property Listings</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Property listings and information are provided for general informational purposes only. 
                  While we strive to keep information accurate and up-to-date, we make no representations 
                  or warranties about the accuracy, completeness, or availability of any listing information.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The content on this website, including text, graphics, logos, and images, is the property 
                  of Chosen Real Estate Advisors and is protected by copyright and other intellectual 
                  property laws. You may not reproduce, distribute, or create derivative works without 
                  our express written permission.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Chosen Real Estate Advisors shall not be liable for any direct, indirect, incidental, 
                  consequential, or punitive damages arising out of your use of, or inability to use, 
                  this website or our services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Real Estate Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nothing on this website constitutes professional real estate advice for your specific 
                  situation. Always consult with qualified professionals before making real estate 
                  decisions. Chosen Real Estate Advisors is a licensed real estate brokerage in the 
                  State of Florida.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service are governed by the laws of the State of Florida, without 
                  regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Your continued use of the 
                  website following any changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:realestate@chosenre.com" className="text-gold hover:underline">
                    realestate@chosenre.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
