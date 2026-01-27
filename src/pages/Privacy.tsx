import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Privacy Policy
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
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Chosen Real Estate Advisors ("we," "our," or "us") respects your privacy and is committed 
                  to protecting your personal information. This Privacy Policy explains how we collect, use, 
                  and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Property preferences and search criteria</li>
                  <li>Information submitted through contact forms</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide real estate services and respond to inquiries</li>
                  <li>Send property listings and market updates</li>
                  <li>Communicate about our services and events</li>
                  <li>Improve our website and services</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information with trusted partners who assist us in operating our business, such as 
                  title companies, lenders, and other real estate professionals, only as necessary to 
                  complete transactions you have requested.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information. However, 
                  no method of transmission over the Internet is 100% secure, and we cannot guarantee 
                  absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, correct, or delete your personal information. You may also 
                  opt out of receiving marketing communications from us at any time.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
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

export default Privacy;
