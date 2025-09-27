import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

export default function Returns() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-returns-title">
            Returns & Exchanges
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We want you to love your vintage finds. If something isn't quite right, we're here to help with easy returns and exchanges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Return Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-primary" />
                Return Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">30-Day Return Window</h3>
                  <p className="text-muted-foreground">
                    You have 30 days from the delivery date to return any item for a full refund or exchange.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Item Condition</h3>
                  <p className="text-muted-foreground mb-2">Items must be returned in original condition:</p>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Unworn with original tags attached</li>
                    <li>• No alterations or damage</li>
                    <li>• Original packaging when possible</li>
                    <li>• Free from odors (perfume, smoke, etc.)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Non-Returnable Items</h3>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Final sale items (marked as such)</li>
                    <li>• Intimates and undergarments</li>
                    <li>• Personalized or altered items</li>
                    <li>• Items damaged by customer</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Return Process */}
          <Card>
            <CardHeader>
              <CardTitle>How to Return</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Start Your Return</h3>
                    <p className="text-muted-foreground text-sm">
                      Contact us at returns@vintagethreads.com or call (555) 123-8468 with your order number.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Get Return Label</h3>
                    <p className="text-muted-foreground text-sm">
                      We'll email you a prepaid return shipping label within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Pack & Ship</h3>
                    <p className="text-muted-foreground text-sm">
                      Package your item securely and attach the return label. Drop off at any authorized location.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Get Your Refund</h3>
                    <p className="text-muted-foreground text-sm">
                      Once we receive and inspect your return, we'll process your refund within 3-5 business days.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Exchanges */}
          <Card>
            <CardHeader>
              <CardTitle>Exchanges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Size Exchanges</h3>
                <p className="text-muted-foreground">
                  Need a different size? We offer free size exchanges within 30 days. Just follow the same return process and let us know your preferred size.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Item Exchanges</h3>
                <p className="text-muted-foreground">
                  Want to exchange for a different item? Return your original purchase and place a new order. We'll refund the difference if applicable.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Damaged Items</h3>
                <p className="text-muted-foreground">
                  Received a damaged item? Contact us immediately with photos. We'll arrange a replacement or full refund at no cost to you.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Refund Information */}
          <Card>
            <CardHeader>
              <CardTitle>Refund Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Processing Time</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Credit cards: 3-5 business days</li>
                  <li>• PayPal: 1-2 business days</li>
                  <li>• Bank transfers: 5-7 business days</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Shipping Costs</h3>
                <p className="text-muted-foreground">
                  We provide free return shipping labels for defective items or our errors. Customer preference returns use prepaid labels with a $8.99 deduction from refund.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Store Credit Option</h3>
                <p className="text-muted-foreground">
                  Choose store credit instead of a refund and get an extra 10% bonus credit to use on future purchases!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}