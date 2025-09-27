import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilter from "@/components/CategoryFilter";
import { Product } from "@shared/schema";

export default function Category() {
  const { category } = useParams<{ category: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  // Convert URL category back to proper category name
  useEffect(() => {
    if (category && category !== 'shop-all') {
      // Convert URL category to proper category name
      const categoryMap: { [key: string]: string | undefined } = {
        'shop-all': undefined,
        'jackets': 'Jackets',
        't-shirts': 'T-Shirts', 
        'shoes': 'Shoes',
        'accessories': 'Accessories',
        'dresses': 'Dresses',
        'skirts': 'Skirts',
        'blouses': 'Blouses',
        'sweaters': 'Sweaters',
        'shirts': 'Shirts',
        'pants': 'Pants'
      };
      
      setSelectedCategory(categoryMap[category] || undefined);
    } else {
      setSelectedCategory(undefined);
    }
  }, [category]);
  
  // Fetch products from API
  const { data: allProducts = [], isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products', selectedCategory],
    queryFn: async () => {
      const url = selectedCategory 
        ? `/api/products?category=${encodeURIComponent(selectedCategory)}`
        : '/api/products';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    },
  });

  const categories = Array.from(new Set(allProducts.map(p => p.category)));
  
  const displayCategory = selectedCategory || 'All Products';
  const productCount = allProducts.length;

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-card border-b border-border py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {displayCategory}
          </h1>
          <p className="text-muted-foreground text-lg">
            {productCount} {productCount === 1 ? 'item' : 'items'} available
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Products Grid */}
        <ProductGrid products={allProducts} isLoading={isLoading} />
        
        {/* No products message */}
        {!isLoading && allProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              No products found
            </h3>
            <p className="text-muted-foreground">
              {selectedCategory 
                ? `No ${selectedCategory.toLowerCase()} items are currently available.`
                : 'No products are currently available.'
              }
            </p>
          </div>
        )}
      </section>
    </div>
  );
}