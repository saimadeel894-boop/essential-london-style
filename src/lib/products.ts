export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'hoodie' | 'sweatshirt' | 'tracksuit' | 't-shirt' | 'pants';
  collection: 'kids' | 'mens' | 'womens';
  colors: ProductColor[];
  sizes: string[];
  images: string[];
  description: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface ProductColor {
  name: string;
  hex: string;
}

export const products: Product[] = [
  // Kids Collection - Hoodies
  {
    id: 'kids-essential-hoodie-1',
    name: 'Essential Kids Hoodie',
    price: 85,
    category: 'hoodie',
    collection: 'kids',
    colors: [
      { name: 'Cream', hex: '#F5F0E8' },
      { name: 'Charcoal', hex: '#3A3A3A' },
      { name: 'Sage', hex: '#9CAF88' },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: ['/placeholder.svg'],
    description: 'Premium cotton blend hoodie with signature Essential London branding. Relaxed fit for ultimate comfort.',
    isNew: true,
  },
  {
    id: 'kids-oversized-hoodie-2',
    name: 'Oversized Logo Hoodie',
    price: 95,
    category: 'hoodie',
    collection: 'kids',
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Oatmeal', hex: '#E8DFD0' },
      { name: 'Mocha', hex: '#8B7355' },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: ['/placeholder.svg'],
    description: 'Oversized silhouette with dropped shoulders and premium heavyweight cotton.',
    isBestseller: true,
  },
  {
    id: 'kids-zip-hoodie-3',
    name: 'Full Zip Essential Hoodie',
    price: 105,
    category: 'hoodie',
    collection: 'kids',
    colors: [
      { name: 'Grey Heather', hex: '#A8A8A8' },
      { name: 'Navy', hex: '#1E2A3A' },
      { name: 'Cream', hex: '#F5F0E8' },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: ['/placeholder.svg'],
    description: 'Classic full-zip hoodie with metal hardware and ribbed cuffs.',
  },
  // Kids Collection - Sweatshirts
  {
    id: 'kids-crewneck-1',
    name: 'Essential Crewneck',
    price: 75,
    category: 'sweatshirt',
    collection: 'kids',
    colors: [
      { name: 'Cream', hex: '#F5F0E8' },
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Taupe', hex: '#B8A898' },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: ['/placeholder.svg'],
    description: 'Minimalist crewneck sweatshirt with subtle chest logo.',
    isNew: true,
  },
  {
    id: 'kids-relaxed-sweat-2',
    name: 'Relaxed Fit Sweatshirt',
    price: 80,
    category: 'sweatshirt',
    collection: 'kids',
    colors: [
      { name: 'Dusty Rose', hex: '#D4A5A5' },
      { name: 'Sage', hex: '#9CAF88' },
      { name: 'Cream', hex: '#F5F0E8' },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: ['/placeholder.svg'],
    description: 'Soft brushed fleece interior with relaxed contemporary fit.',
  },
  // Kids Collection - Tracksuits
  {
    id: 'kids-tracksuit-1',
    name: 'Essential Tracksuit Set',
    price: 145,
    originalPrice: 175,
    category: 'tracksuit',
    collection: 'kids',
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Grey', hex: '#6B6B6B' },
      { name: 'Cream', hex: '#F5F0E8' },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: ['/placeholder.svg'],
    description: 'Complete tracksuit set including hoodie and matching joggers.',
    isBestseller: true,
  },
  {
    id: 'kids-tracksuit-2',
    name: 'Premium Track Set',
    price: 165,
    category: 'tracksuit',
    collection: 'kids',
    colors: [
      { name: 'Navy', hex: '#1E2A3A' },
      { name: 'Olive', hex: '#5C5C3D' },
      { name: 'Charcoal', hex: '#3A3A3A' },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: ['/placeholder.svg'],
    description: 'Elevated tracksuit with premium fabric and refined details.',
    isNew: true,
  },
  {
    id: 'kids-jogger-tracksuit',
    name: 'Jogger Tracksuit',
    price: 135,
    category: 'tracksuit',
    collection: 'kids',
    colors: [
      { name: 'Oatmeal', hex: '#E8DFD0' },
      { name: 'Black', hex: '#1A1A1A' },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: ['/placeholder.svg'],
    description: 'Comfortable jogger-style tracksuit perfect for everyday wear.',
  },
  // Mens Collection
  {
    id: 'mens-essential-hoodie',
    name: 'Essential Hoodie',
    price: 125,
    category: 'hoodie',
    collection: 'mens',
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Cream', hex: '#F5F0E8' },
      { name: 'Charcoal', hex: '#3A3A3A' },
      { name: 'Sage', hex: '#9CAF88' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: ['/placeholder.svg'],
    description: 'Signature Essential London hoodie with premium heavyweight cotton.',
    isBestseller: true,
  },
  {
    id: 'mens-tracksuit',
    name: 'Essential Tracksuit',
    price: 195,
    category: 'tracksuit',
    collection: 'mens',
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Grey', hex: '#6B6B6B' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: ['/placeholder.svg'],
    description: 'Complete tracksuit set with matching hoodie and joggers.',
  },
  // Womens Collection
  {
    id: 'womens-essential-hoodie',
    name: 'Essential Hoodie',
    price: 120,
    category: 'hoodie',
    collection: 'womens',
    colors: [
      { name: 'Blush', hex: '#E8D5D5' },
      { name: 'Cream', hex: '#F5F0E8' },
      { name: 'Black', hex: '#1A1A1A' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: ['/placeholder.svg'],
    description: 'Feminine fit Essential hoodie with soft brushed interior.',
    isNew: true,
  },
  {
    id: 'womens-cropped-hoodie',
    name: 'Cropped Essential Hoodie',
    price: 115,
    category: 'hoodie',
    collection: 'womens',
    colors: [
      { name: 'Cream', hex: '#F5F0E8' },
      { name: 'Sage', hex: '#9CAF88' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: ['/placeholder.svg'],
    description: 'Cropped silhouette with relaxed fit and dropped shoulders.',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCollection = (collection: Product['collection']): Product[] => {
  return products.filter(p => p.collection === collection);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.isBestseller || p.isNew).slice(0, 4);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(p => p.isNew);
};
