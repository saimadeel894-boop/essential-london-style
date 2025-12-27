// Product images imports
import kidsHoodieCream from '@/assets/products/kids-hoodie-cream.jpg';
import kidsHoodieBlack from '@/assets/products/kids-hoodie-black.jpg';
import kidsSweatshirtCream from '@/assets/products/kids-sweatshirt-cream.jpg';
import kidsSweatshirtBlack from '@/assets/products/kids-sweatshirt-black.jpg';
import kidsTracksuitBlack from '@/assets/products/kids-tracksuit-black.jpg';
import kidsTracksuitCream from '@/assets/products/kids-tracksuit-cream.jpg';
import kidsZipHoodieGrey from '@/assets/products/kids-zip-hoodie-grey.jpg';
import mensHoodieBlack from '@/assets/products/mens-hoodie-black.jpg';
import mensTracksuitGrey from '@/assets/products/mens-tracksuit-grey.jpg';
import womensHoodieCream from '@/assets/products/womens-hoodie-cream.jpg';

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
  image?: string;
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
      { name: 'Cream', hex: '#F5F0E8', image: kidsHoodieCream },
      { name: 'Charcoal', hex: '#3A3A3A', image: kidsHoodieBlack },
      { name: 'Sage', hex: '#9CAF88', image: kidsHoodieCream },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: [kidsHoodieCream, kidsHoodieBlack],
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
      { name: 'Black', hex: '#1A1A1A', image: kidsHoodieBlack },
      { name: 'Oatmeal', hex: '#E8DFD0', image: kidsHoodieCream },
      { name: 'Mocha', hex: '#8B7355', image: kidsHoodieCream },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: [kidsHoodieBlack, kidsHoodieCream],
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
      { name: 'Grey Heather', hex: '#A8A8A8', image: kidsZipHoodieGrey },
      { name: 'Navy', hex: '#1E2A3A', image: kidsHoodieBlack },
      { name: 'Cream', hex: '#F5F0E8', image: kidsHoodieCream },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: [kidsZipHoodieGrey, kidsHoodieBlack, kidsHoodieCream],
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
      { name: 'Cream', hex: '#F5F0E8', image: kidsSweatshirtCream },
      { name: 'Black', hex: '#1A1A1A', image: kidsSweatshirtBlack },
      { name: 'Taupe', hex: '#B8A898', image: kidsSweatshirtCream },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: [kidsSweatshirtCream, kidsSweatshirtBlack],
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
      { name: 'Dusty Rose', hex: '#D4A5A5', image: kidsSweatshirtCream },
      { name: 'Sage', hex: '#9CAF88', image: kidsSweatshirtCream },
      { name: 'Cream', hex: '#F5F0E8', image: kidsSweatshirtCream },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: [kidsSweatshirtCream],
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
      { name: 'Black', hex: '#1A1A1A', image: kidsTracksuitBlack },
      { name: 'Grey', hex: '#6B6B6B', image: kidsTracksuitBlack },
      { name: 'Cream', hex: '#F5F0E8', image: kidsTracksuitCream },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: [kidsTracksuitBlack, kidsTracksuitCream],
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
      { name: 'Navy', hex: '#1E2A3A', image: kidsTracksuitBlack },
      { name: 'Olive', hex: '#5C5C3D', image: kidsTracksuitBlack },
      { name: 'Charcoal', hex: '#3A3A3A', image: kidsTracksuitBlack },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: [kidsTracksuitBlack],
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
      { name: 'Oatmeal', hex: '#E8DFD0', image: kidsTracksuitCream },
      { name: 'Black', hex: '#1A1A1A', image: kidsTracksuitBlack },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: [kidsTracksuitCream, kidsTracksuitBlack],
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
      { name: 'Black', hex: '#1A1A1A', image: mensHoodieBlack },
      { name: 'Cream', hex: '#F5F0E8', image: kidsHoodieCream },
      { name: 'Charcoal', hex: '#3A3A3A', image: mensHoodieBlack },
      { name: 'Sage', hex: '#9CAF88', image: kidsHoodieCream },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [mensHoodieBlack, kidsHoodieCream],
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
      { name: 'Black', hex: '#1A1A1A', image: kidsTracksuitBlack },
      { name: 'Grey', hex: '#6B6B6B', image: mensTracksuitGrey },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [mensTracksuitGrey, kidsTracksuitBlack],
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
      { name: 'Blush', hex: '#E8D5D5', image: womensHoodieCream },
      { name: 'Cream', hex: '#F5F0E8', image: womensHoodieCream },
      { name: 'Black', hex: '#1A1A1A', image: kidsHoodieBlack },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [womensHoodieCream, kidsHoodieBlack],
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
      { name: 'Cream', hex: '#F5F0E8', image: womensHoodieCream },
      { name: 'Sage', hex: '#9CAF88', image: womensHoodieCream },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [womensHoodieCream],
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
