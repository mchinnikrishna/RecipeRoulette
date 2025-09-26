import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAddToCart = () => {
    setIsLoading(true);
    console.log('Add to cart triggered for product:', product.name);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Product added to cart successfully');
    }, 1000);
  };

  return (
    <Card className="group hover-elevate transition-all duration-200 overflow-hidden" data-testid={`card-product-${product.id}`}>
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="aspect-[4/5] overflow-hidden bg-card">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            data-testid={`img-product-${product.id}`}
          />
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
            <span className="text-sm text-muted-foreground" data-testid={`text-stock-${product.id}`}>
              {product.stock} left
            </span>
          </div>
          
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2" data-testid={`text-name-${product.id}`}>
            {product.name}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2" data-testid={`text-description-${product.id}`}>
            {product.description}
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <span className="text-lg font-bold text-foreground" data-testid={`text-price-${product.id}`}>
          ${parseFloat(product.price).toFixed(2)}
        </span>
        
        <Button 
          size="sm"
          onClick={handleAddToCart}
          disabled={isLoading || product.stock === 0}
          data-testid={`button-add-to-cart-${product.id}`}
        >
          {isLoading ? 'Adding...' : product.stock === 0 ? 'Sold Out' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
}