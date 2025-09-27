import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our vintage collection? We'd love to hear from you. 
            Get in touch with our team of vintage clothing experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Visit Our Store</h3>
                    <p className="text-muted-foreground" data-testid="text-address">
                      123 Vintage Lane<br />
                      Heritage District<br />
                      New York, NY 10012
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground" data-testid="text-phone">
                      (555) 123-VINTAGE<br />
                      (555) 123-8468
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground" data-testid="text-email">
                      hello@vintagethreads.com<br />
                      support@vintagethreads.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Store Hours</h3>
                    <div className="text-muted-foreground space-y-1" data-testid="text-hours">
                      <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: 12:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Customer Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our vintage specialists are here to help you find the perfect piece or answer any questions about our collection.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Free styling consultations</li>
                  <li>• Authenticity verification</li>
                  <li>• Care and maintenance tips</li>
                  <li>• Custom tailoring recommendations</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      data-testid="input-contact-email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What can we help you with?"
                    data-testid="input-contact-subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your question or how we can help..."
                    rows={6}
                    data-testid="textarea-contact-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full"
                  data-testid="button-contact-submit"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}