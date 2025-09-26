import ProductCard from '../ProductCard'
import jacketImage from '@assets/generated_images/Vintage_leather_jacket_product_c29e4583.png';

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