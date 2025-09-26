import ProductGrid from '../ProductGrid'
import jacketImage from '@assets/generated_images/Vintage_leather_jacket_product_c29e4583.png';
import teeImage from '@assets/generated_images/Vintage_graphic_tee_product_b3aafa6d.png';
import sneakersImage from '@assets/generated_images/Vintage_sneakers_product_image_8216a1de.png';

export default function ProductGridExample() {
  const mockProducts = [ //todo: remove mock functionality
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
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductGrid products={mockProducts} />
    </div>
  );
}