import ProductCard from '../ProductCard'
import jacketImage from '@assets/stock_images/vintage_leather_jack_f971f6d2.jpg';

export default function ProductCardExample() {
  const mockProduct = { //todo: remove mock functionality
    id: '1',
    name: 'Vintage Leather Bomber Jacket',
    description: 'Classic brown leather jacket with authentic vintage wear and premium craftsmanship.',
    price: '249.99',
    category: 'Jackets',
    imageUrl: jacketImage,
    stock: 3,
  };

  return <ProductCard product={mockProduct} />
}