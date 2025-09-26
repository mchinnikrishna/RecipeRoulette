import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilter from "@/components/CategoryFilter";
import { Product } from "@shared/schema";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  
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
  
  const filteredProducts = allProducts;

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Collection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked vintage pieces that showcase timeless style and authentic character
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Products Grid */}
        <ProductGrid products={filteredProducts} isLoading={isLoading} />
      </section>
    </div>
  );
}