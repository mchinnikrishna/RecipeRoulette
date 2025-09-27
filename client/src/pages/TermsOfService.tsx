import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, CreditCard, ShieldCheck } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-terms-title">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These terms govern your use of VintageThreads. By using our website or services, you agree to these terms.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: September 27, 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                By accessing or using VintageThreads' website, mobile app, or services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>
              <p className="text-muted-foreground">
                These terms apply to all users, including browsers, customers, merchants, and contributors of content.
              </p>
            </CardContent>
          </Card>

          {/* Use of Services */}
          <Card>
            <CardHeader>
              <CardTitle>Use of Our Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Permitted Use</h3>
                <p className="text-muted-foreground mb-2">You may use our services to:</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Browse and purchase vintage clothing items</li>
                  <li>• Create and manage your user account</li>
                  <li>• Communicate with customer service</li>
                  <li>• Leave reviews and feedback</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Prohibited Use</h3>
                <p className="text-muted-foreground mb-2">You may NOT use our services to:</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Violate any laws or regulations</li>
                  <li>• Infringe on intellectual property rights</li>
                  <li>• Transmit harmful or malicious content</li>
                  <li>• Attempt to gain unauthorized access to our systems</li>
                  <li>• Use automated systems to scrape or harvest data</li>
                  <li>• Impersonate others or provide false information</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Account Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Account Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Account Creation</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• You must be 18 years or older to create an account</li>
                  <li>• You must provide accurate and complete information</li>
                  <li>• You are responsible for maintaining account security</li>
                  <li>• You must notify us immediately of any unauthorized use</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Account Termination</h3>
                <p className="text-muted-foreground">
                  We reserve the right to suspend or terminate accounts that violate these terms. 
                  You may also delete your account at any time by contacting customer service.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Products & Orders */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                Products & Orders
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Product Information</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• All products are authentic vintage items</li>
                  <li>• Product descriptions and photos are as accurate as possible</li>
                  <li>• Vintage items may show signs of wear consistent with their age</li>
                  <li>• Colors may vary slightly due to lighting and screen settings</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Pricing & Payment</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• All prices are in USD and subject to change</li>
                  <li>• Payment is required at time of order</li>
                  <li>• Additional fees (shipping, taxes) are clearly displayed</li>
                  <li>• We reserve the right to correct pricing errors</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Order Fulfillment</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Orders are processed within 1-2 business days</li>
                  <li>• We reserve the right to limit quantities</li>
                  <li>• Items are subject to availability</li>
                  <li>• We may cancel orders due to pricing errors or unavailability</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Our Content</h3>
                <p className="text-muted-foreground">
                  All content on our website, including text, graphics, logos, images, and software, 
                  is the property of VintageThreads and is protected by copyright and other intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">User Content</h3>
                <p className="text-muted-foreground">
                  By submitting content (reviews, photos, etc.), you grant us a non-exclusive, 
                  royalty-free license to use, modify, and display such content in connection with our services.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Returns & Refunds */}
          <Card>
            <CardHeader>
              <CardTitle>Returns & Refunds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our return and refund policy is detailed on our Returns page. In summary:
              </p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• 30-day return window for most items</li>
                <li>• Items must be in original condition</li>
                <li>• Refunds processed within 3-5 business days</li>
                <li>• Customer responsible for return shipping (except defective items)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-primary" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Service "As Is"</h3>
                <p className="text-muted-foreground">
                  Our services are provided "as is" without warranties of any kind. We do not guarantee 
                  that our services will be uninterrupted, error-free, or meet your specific requirements.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Damages Limitation</h3>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, VintageThreads shall not be liable for any 
                  indirect, incidental, special, or consequential damages arising from your use of our services.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Indemnification */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                Indemnification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You agree to indemnify and hold VintageThreads harmless from any claims, damages, 
                losses, or expenses arising from your use of our services, violation of these terms, 
                or infringement of any rights of another party.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle>Governing Law & Disputes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Governing Law</h3>
                <p className="text-muted-foreground">
                  These terms are governed by the laws of the State of New York, without regard 
                  to conflict of law principles.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Dispute Resolution</h3>
                <p className="text-muted-foreground">
                  Any disputes arising from these terms or your use of our services will be resolved 
                  through binding arbitration in New York, NY, except for claims that may be brought 
                  in small claims court.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify users of 
                material changes by email or by posting a notice on our website. Your continued 
                use of our services after any changes constitutes acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> legal@vintagethreads.com</p>
                <p><strong>Phone:</strong> (555) 123-8468</p>
                <p><strong>Mail:</strong> VintageThreads Legal Department<br />
                   123 Vintage Lane<br />
                   New York, NY 10012</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}