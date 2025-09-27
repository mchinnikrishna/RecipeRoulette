import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Truck, Clock, MapPin, Package } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function ShippingInfo() {
  const { toast } = useToast();
  const [addressData, setAddressData] = useState({
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setAddressData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Address Saved",
        description: "Your shipping address has been saved successfully.",
      });
      setIsSubmitting(false);
      // Reset form
      setAddressData({
        fullName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States'
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-shipping-title">
            Shipping Information
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fast, secure shipping for your vintage treasures. We take extra care to ensure your items arrive safely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" />
                Shipping Options
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Standard Shipping</h3>
                <p className="text-muted-foreground mb-2">5-7 business days</p>
                <p className="text-primary font-medium">Free on orders over $100</p>
                <p className="text-sm text-muted-foreground">$8.99 for orders under $100</p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Express Shipping</h3>
                <p className="text-muted-foreground mb-2">2-3 business days</p>
                <p className="text-primary font-medium">$19.99</p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Overnight Express</h3>
                <p className="text-muted-foreground mb-2">1 business day</p>
                <p className="text-primary font-medium">$39.99</p>
                <p className="text-sm text-muted-foreground">Order by 2 PM EST</p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">International Shipping</h3>
                <p className="text-muted-foreground mb-2">7-14 business days</p>
                <p className="text-primary font-medium">Starting at $29.99</p>
                <p className="text-sm text-muted-foreground">Duties and taxes may apply</p>
              </div>
            </CardContent>
          </Card>

          {/* Processing & Delivery */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Processing & Delivery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Order Processing</h3>
                <p className="text-muted-foreground">
                  Orders are processed within 1-2 business days. You'll receive a confirmation email with tracking information once your order ships.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Delivery Times</h3>
                <p className="text-muted-foreground mb-2">
                  Delivery times are estimates and may vary during peak seasons or weather delays.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Business days exclude weekends and holidays</li>
                  <li>• Tracking updates within 24 hours of shipment</li>
                  <li>• Signature required for orders over $300</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Order Cutoff Times</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Standard & Express: 5 PM EST</li>
                  <li>• Overnight: 2 PM EST</li>
                  <li>• Weekend orders process Monday</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Shipping Areas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Shipping Areas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Domestic Shipping</h3>
                <p className="text-muted-foreground">
                  We ship to all 50 states, including Alaska and Hawaii. APO/FPO addresses welcome.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">International Shipping</h3>
                <p className="text-muted-foreground mb-2">We ship worldwide to:</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Canada</li>
                  <li>• United Kingdom</li>
                  <li>• European Union</li>
                  <li>• Australia & New Zealand</li>
                  <li>• Japan</li>
                  <li>• And 50+ other countries</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Special Care */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Special Care Packaging
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Vintage Item Protection</h3>
                <p className="text-muted-foreground">
                  Each vintage piece is carefully wrapped in acid-free tissue paper and placed in protective boxes to ensure safe delivery.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Eco-Friendly Materials</h3>
                <p className="text-muted-foreground">
                  We use recycled and biodegradable packaging materials whenever possible, keeping with our sustainable vintage mission.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Insurance & Tracking</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Full insurance coverage included</li>
                  <li>• Real-time tracking updates</li>
                  <li>• Photo documentation of packaging</li>
                  <li>• Adult signature for high-value items</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Address Entry Form */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Enter Your Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={addressData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                      data-testid="input-full-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      value={addressData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      data-testid="input-country"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address1">Address Line 1 *</Label>
                  <Input
                    id="address1"
                    value={addressData.address1}
                    onChange={(e) => handleInputChange('address1', e.target.value)}
                    placeholder="Street address, P.O. box, company name"
                    required
                    data-testid="input-address1"
                  />
                </div>

                <div>
                  <Label htmlFor="address2">Address Line 2</Label>
                  <Input
                    id="address2"
                    value={addressData.address2}
                    onChange={(e) => handleInputChange('address2', e.target.value)}
                    placeholder="Apartment, suite, unit, building, floor, etc."
                    data-testid="input-address2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={addressData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      required
                      data-testid="input-city"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={addressData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      required
                      data-testid="input-state"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={addressData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      required
                      data-testid="input-zip"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                  data-testid="button-submit-address"
                >
                  {isSubmitting ? 'Saving...' : 'Save Shipping Address'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}