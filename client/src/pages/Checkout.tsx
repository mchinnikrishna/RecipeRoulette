import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { ArrowLeft, CreditCard } from "lucide-react";

interface CartItem {
  id: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    price: string;
  };
}

const CheckoutForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: "Thank you for your purchase! Your order has been confirmed.",
      });
      setIsLoading(false);
      // Redirect to success page or clear cart
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="cardholderName" className="block text-sm font-medium text-foreground mb-2">
          Cardholder Name
        </label>
        <Input
          id="cardholderName"
          name="cardholderName"
          type="text"
          required
          value={paymentData.cardholderName}
          onChange={handleInputChange}
          placeholder="John Doe"
          data-testid="input-cardholder-name"
        />
      </div>

      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium text-foreground mb-2">
          Card Number
        </label>
        <Input
          id="cardNumber"
          name="cardNumber"
          type="text"
          required
          value={paymentData.cardNumber}
          onChange={handleInputChange}
          placeholder="1234 5678 9012 3456"
          maxLength={19}
          data-testid="input-card-number"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="expiryDate" className="block text-sm font-medium text-foreground mb-2">
            Expiry Date
          </label>
          <Input
            id="expiryDate"
            name="expiryDate"
            type="text"
            required
            value={paymentData.expiryDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            maxLength={5}
            data-testid="input-expiry-date"
          />
        </div>
        <div>
          <label htmlFor="cvv" className="block text-sm font-medium text-foreground mb-2">
            CVV
          </label>
          <Input
            id="cvv"
            name="cvv"
            type="text"
            required
            value={paymentData.cvv}
            onChange={handleInputChange}
            placeholder="123"
            maxLength={4}
            data-testid="input-cvv"
          />
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={isLoading} 
        className="w-full"
        data-testid="button-complete-payment"
      >
        <CreditCard className="w-4 h-4 mr-2" />
        {isLoading ? "Processing..." : "Complete Purchase"}
      </Button>
    </form>
  );
};

export default function Checkout() {
  const { data: cartItems = [] } = useQuery<CartItem[]>({
    queryKey: ["/api/cart"],
  });

  const total = cartItems.reduce((sum: number, item: CartItem) => 
    sum + (parseFloat(item.product?.price || '0') * item.quantity), 0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Your cart is empty</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Add some vintage pieces to your cart before checking out.
            </p>
            <Link href="/">
              <Button>
                Continue Shopping
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link href="/cart">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Button>
          </Link>
        </div>

        <div className="grid gap-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map((item: CartItem) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.product?.name}</p>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">
                    ${(parseFloat(item.product?.price || '0') * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <CheckoutForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}