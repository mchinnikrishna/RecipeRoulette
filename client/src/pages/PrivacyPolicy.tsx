import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-privacy-title">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: September 27, 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Personal Information</h3>
                <p className="text-muted-foreground mb-2">
                  When you create an account or make a purchase, we collect:
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm ml-4">
                  <li>• Name and contact information (email, phone, address)</li>
                  <li>• Payment information (processed securely through our payment partners)</li>
                  <li>• Order history and preferences</li>
                  <li>• Account credentials and security information</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-2">
                  When you visit our website, we automatically collect:
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm ml-4">
                  <li>• Device and browser information</li>
                  <li>• IP address and location data</li>
                  <li>• Website usage patterns and analytics</li>
                  <li>• Cookie and tracking technology data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-primary" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Essential Services</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Processing and fulfilling your orders</li>
                  <li>• Providing customer service and support</li>
                  <li>• Sending order confirmations and shipping updates</li>
                  <li>• Managing your account and preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Improvements & Marketing</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Personalizing your shopping experience</li>
                  <li>• Sending promotional emails (with your consent)</li>
                  <li>• Analyzing website performance and user behavior</li>
                  <li>• Improving our products and services</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Legal & Security</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Preventing fraud and ensuring security</li>
                  <li>• Complying with legal requirements</li>
                  <li>• Protecting our rights and property</li>
                  <li>• Enforcing our terms of service</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Information Sharing & Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">We Do NOT Sell Your Data</h3>
                <p className="text-muted-foreground">
                  VintageThreads does not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Limited Sharing</h3>
                <p className="text-muted-foreground mb-2">
                  We only share your information in these specific circumstances:
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• <strong>Service Providers:</strong> Payment processors, shipping companies, and email services</li>
                  <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li>• <strong>Business Transfers:</strong> In the event of a merger or acquisition</li>
                  <li>• <strong>With Your Consent:</strong> When you explicitly agree to sharing</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Data Security & Retention
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Security Measures</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• SSL encryption for all data transmission</li>
                  <li>• Secure, PCI-compliant payment processing</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Access controls and employee training</li>
                  <li>• Encrypted data storage and backup systems</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Data Retention</h3>
                <p className="text-muted-foreground">
                  We retain your personal information for as long as necessary to provide our services, 
                  comply with legal obligations, and resolve disputes. You can request deletion of your 
                  account and associated data at any time.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle>Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">You Have the Right To:</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• <strong>Access:</strong> Request a copy of your personal data</li>
                  <li>• <strong>Correct:</strong> Update or correct inaccurate information</li>
                  <li>• <strong>Delete:</strong> Request deletion of your personal data</li>
                  <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li>• <strong>Portability:</strong> Request your data in a portable format</li>
                  <li>• <strong>Restrict:</strong> Limit how we process your information</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Exercising Your Rights</h3>
                <p className="text-muted-foreground">
                  To exercise any of these rights, contact us at privacy@vintagethreads.com or 
                  use the contact information provided below. We'll respond within 30 days.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies & Tracking */}
          <Card>
            <CardHeader>
              <CardTitle>Cookies & Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">How We Use Cookies</h3>
                <p className="text-muted-foreground mb-2">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• <strong>Essential:</strong> Required for website functionality</li>
                  <li>• <strong>Analytics:</strong> Help us understand how you use our site</li>
                  <li>• <strong>Preference:</strong> Remember your settings and choices</li>
                  <li>• <strong>Marketing:</strong> Deliver relevant advertisements</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Managing Cookies</h3>
                <p className="text-muted-foreground">
                  You can control cookies through your browser settings. Note that disabling 
                  certain cookies may limit website functionality.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Us About Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> privacy@vintagethreads.com</p>
                <p><strong>Phone:</strong> (555) 123-8468</p>
                <p><strong>Mail:</strong> VintageThreads Privacy Team<br />
                   123 Vintage Lane<br />
                   New York, NY 10012</p>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card>
            <CardHeader>
              <CardTitle>Policy Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We'll notify you of any 
                material changes by email or by posting a notice on our website. Your continued 
                use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}