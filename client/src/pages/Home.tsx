import { useState } from "react";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilter from "@/components/CategoryFilter";
import { Product } from "@shared/schema";
import jacketImage from '@assets/generated_images/Vintage_leather_jacket_product_c29e4583.png';
import teeImage from '@assets/generated_images/Vintage_graphic_tee_product_b3aafa6d.png';
import sneakersImage from '@assets/generated_images/Vintage_sneakers_product_image_8216a1de.png';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  
  // Mock data - todo: remove mock functionality
  const allProducts: Product[] = [
    {
      id: '1',
      name: 'Vintage Leather Bomber Jacket',
      description: 'Classic brown leather jacket with authentic vintage wear and premium craftsmanship.',
      price: '249.99',
      category: 'Jackets',
      imageUrl: jacketImage,
      stock: 3,
    },
    {
      id: '2',
      name: 'Retro Band Graphic Tee',
      description: 'Authentic vintage concert t-shirt with faded graphics and soft cotton blend.',
      price: '79.99',
      category: 'T-Shirts',
      imageUrl: teeImage,
      stock: 7,
    },
    {
      id: '3',
      name: 'Classic High-Top Sneakers',
      description: 'Vintage canvas sneakers with retro styling and comfortable fit.',
      price: '129.99',
      category: 'Shoes',
      imageUrl: sneakersImage,
      stock: 2,
    },
    {
      id: '4',
      name: 'Vintage Denim Jacket',
      description: 'Perfectly worn denim jacket with authentic vintage patina.',
      price: '189.99',
      category: 'Jackets',
      imageUrl: jacketImage,
      stock: 5,
    },
    {
      id: '5',
      name: 'Distressed Band Tee',
      description: 'Rare vintage band shirt with natural distressing and soft fade.',
      price: '89.99',
      category: 'T-Shirts',
      imageUrl: teeImage,
      stock: 4,
    },
    {
      id: '6',
      name: 'Vintage Leather Boots',
      description: 'Authentic leather boots with character and premium construction.',
      price: '199.99',
      category: 'Shoes',
      imageUrl: sneakersImage,
      stock: 6,
    },
  ];

  const categories = Array.from(new Set(allProducts.map(p => p.category)));
  
  const filteredProducts = selectedCategory 
    ? allProducts.filter(p => p.category === selectedCategory)
    : allProducts;

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
        <ProductGrid products={filteredProducts} />
      </section>
    </div>
  );
}