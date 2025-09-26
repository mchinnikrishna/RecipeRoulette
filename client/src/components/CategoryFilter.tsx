import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory?: string;
  onCategoryChange: (category: string | undefined) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | undefined>(selectedCategory);

  const handleCategoryClick = (category: string) => {
    const newCategory = activeCategory === category ? undefined : category;
    setActiveCategory(newCategory);
    onCategoryChange(newCategory);
    console.log('Category filter changed to:', newCategory || 'All');
  };

  const handleShowAll = () => {
    setActiveCategory(undefined);
    onCategoryChange(undefined);
    console.log('Showing all categories');
  };

  return (
    <div className="flex flex-wrap gap-2" data-testid="category-filter">
      <Button
        variant={activeCategory ? "outline" : "default"}
        size="sm"
        onClick={handleShowAll}
        data-testid="button-category-all"
      >
        All
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryClick(category)}
          className="relative"
          data-testid={`button-category-${category.toLowerCase().replace(' ', '-')}`}
        >
          {category}
          {activeCategory === category && (
            <Badge 
              variant="secondary" 
              className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
            >
              ✓
            </Badge>
          )}
        </Button>
      ))}
    </div>
  );
}