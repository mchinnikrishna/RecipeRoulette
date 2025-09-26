import CategoryFilter from '../CategoryFilter'
import { useState } from 'react';

export default function CategoryFilterExample() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  
  const mockCategories = ['Jackets', 'T-Shirts', 'Shoes', 'Accessories']; //todo: remove mock functionality

  return (
    <div className="p-4">
      <CategoryFilter 
        categories={mockCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      {selectedCategory && (
        <p className="mt-4 text-muted-foreground">
          Selected: {selectedCategory}
        </p>
      )}
    </div>
  );
}