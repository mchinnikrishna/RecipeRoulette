import ProductGrid from '../ProductGrid'
import jacketImage from '@assets/stock_images/vintage_leather_jack_f971f6d2.jpg';
import teeImage from '@assets/stock_images/vintage_band_t-shirt_613545d0.jpg';
import sneakersImage from '@assets/stock_images/vintage_canvas_sneak_be3371b0.jpg';
import denimImage from '@assets/stock_images/vintage_denim_jacket_53b25334.jpg';

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
      imageUrl: denimImage,
      stock: 5,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductGrid products={mockProducts} />
    </div>
  );
}