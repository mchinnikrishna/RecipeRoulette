import { db } from "./db";
import { products } from "@shared/schema";

const seedProducts = [
  {
    name: 'Vintage Leather Bomber Jacket',
    description: 'Classic brown leather jacket with authentic vintage wear and premium craftsmanship.',
    price: '249.99',
    category: 'Jackets',
    imageUrl: '/assets/stock_images/vintage_leather_jack_f971f6d2.jpg',
    stock: 3,
  },
  {
    name: 'Retro Band Graphic Tee',
    description: 'Authentic vintage concert t-shirt with faded graphics and soft cotton blend.',
    price: '79.99',
    category: 'T-Shirts',
    imageUrl: '/assets/stock_images/vintage_band_t-shirt_613545d0.jpg',
    stock: 7,
  },
  {
    name: 'Classic High-Top Sneakers',
    description: 'Vintage canvas sneakers with retro styling and comfortable fit.',
    price: '129.99',
    category: 'Shoes',
    imageUrl: '/assets/stock_images/vintage_canvas_sneak_be3371b0.jpg',
    stock: 2,
  },
  {
    name: 'Vintage Denim Jacket',
    description: 'Perfectly worn denim jacket with authentic vintage patina.',
    price: '189.99',
    category: 'Jackets',
    imageUrl: '/assets/stock_images/vintage_denim_jacket_53b25334.jpg',
    stock: 5,
  },
  {
    name: 'Distressed Band Tee',
    description: 'Rare vintage band shirt with natural distressing and soft fade.',
    price: '89.99',
    category: 'T-Shirts',
    imageUrl: '/assets/stock_images/distressed_vintage_t_dcf2eb85.jpg',
    stock: 4,
  },
  {
    name: 'Vintage Leather Boots',
    description: 'Authentic leather boots with character and premium construction.',
    price: '199.99',
    category: 'Shoes',
    imageUrl: '/assets/stock_images/vintage_leather_boot_c6ea018f.jpg',
    stock: 6,
  },
  {
    name: 'Vintage Wool Sweater',
    description: 'Cozy vintage wool sweater with classic pattern and timeless style.',
    price: '159.99',
    category: 'Sweaters',
    imageUrl: '/assets/stock_images/vintage_wool_sweater_e2913b5a.jpg',
    stock: 4,
  },
  {
    name: 'Classic Flannel Shirt',
    description: 'Soft vintage flannel shirt perfect for layering or casual wear.',
    price: '79.99',
    category: 'Shirts',
    imageUrl: '/assets/stock_images/vintage_flannel_shir_c992cafd.jpg',
    stock: 8,
  },
  {
    name: 'Vintage Varsity Jacket',
    description: 'Authentic varsity jacket with embroidered details and vintage charm.',
    price: '299.99',
    category: 'Jackets',
    imageUrl: '/assets/stock_images/vintage_varsity_jack_7c919ac4.jpg',
    stock: 2,
  },
  {
    name: 'Vintage Corduroy Pants',
    description: 'Classic corduroy pants with perfect vintage fit and rich texture.',
    price: '119.99',
    category: 'Pants',
    imageUrl: '/assets/stock_images/vintage_corduroy_pan_07855a04.jpg',
    stock: 5,
  },
];

export async function seedDatabase() {
  try {
    console.log('Seeding database with products...');
    
    // Check if products already exist
    const existingProducts = await db.select().from(products);
    if (existingProducts.length > 0) {
      console.log('Products already exist, skipping seed');
      return;
    }
    
    await db.insert(products).values(seedProducts);
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

// Run seed if this file is executed directly
seedDatabase();