import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container-luxury text-center">
          <h1 className="text-display text-4xl md:text-5xl font-light">Contact Us</h1>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Have a question or need assistance? We're here to help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container-luxury py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-display text-2xl font-light mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-1 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@essentiallondon.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-1 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">+44 20 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-1 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      123 Fashion Street<br />
                      London, E1 6AN<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-display text-xl font-light mb-4">Customer Service Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
                <p>Saturday: 10:00 AM - 4:00 PM GMT</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h3 className="text-display text-xl font-light mb-4">Response Time</h3>
              <p className="text-muted-foreground">
                We aim to respond to all enquiries within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-display text-2xl font-light mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-4 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-4 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="w-full px-4 py-4 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="order">Order Enquiry</option>
                <option value="returns">Returns & Exchanges</option>
                <option value="sizing">Sizing Help</option>
                <option value="wholesale">Wholesale Enquiry</option>
                <option value="other">Other</option>
              </select>

              <textarea
                placeholder="Your message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-4 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors resize-none"
              />

              <button type="submit" className="btn-luxury-primary w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-secondary py-16">
        <div className="container-luxury text-center">
          <h3 className="text-display text-xl font-light mb-4">Looking for quick answers?</h3>
          <p className="text-muted-foreground mb-6">
            Check our FAQ section for instant answers to common questions.
          </p>
          <button className="btn-luxury-outline">
            View FAQ
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
