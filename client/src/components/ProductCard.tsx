import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Product } from "@shared/schema";
import { Link } from "wouter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const addToCartMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest("POST", "/api/cart", { productId: product.id, quantity: 1 });
    },
    onSuccess: () => {
      toast({
        title: "Added to cart",
        description: `${product.name} added to your cart`,
      });
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to add item to cart",
        variant: "destructive",
      });
    },
  });

  return (
    <Card className="group hover-elevate transition-all duration-200 overflow-hidden" data-testid={`card-product-${product.id}`}>
      <CardContent className="p-0">
        {/* Product Image */}
        <Link href={`/product/${product.id}`}>
          <div className="aspect-[4/5] overflow-hidden bg-card cursor-pointer">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              data-testid={`img-product-${product.id}`}
            />
          </div>
        </Link>
        
        {/* Product Info */}
        <Link href={`/product/${product.id}`}>
          <div className="p-4 cursor-pointer">
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
        </Link>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <span className="text-lg font-bold text-foreground" data-testid={`text-price-${product.id}`}>
          ${parseFloat(product.price).toFixed(2)}
        </span>
        
        <Button 
          size="sm"
          onClick={() => addToCartMutation.mutate()}
          disabled={addToCartMutation.isPending || product.stock === 0}
          data-testid={`button-add-to-cart-${product.id}`}
        >
          {addToCartMutation.isPending ? 'Adding...' : product.stock === 0 ? 'Sold Out' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
}