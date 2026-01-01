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
import youngmenHoodieSage from '@/assets/products/youngmen-hoodie-sage.jpg';
import youngmenSweatshirtNavy from '@/assets/products/youngmen-sweatshirt-navy.jpg';
import youngmenTracksuitCharcoal from '@/assets/products/youngmen-tracksuit-charcoal.jpg';
import womensHoodieBlush from '@/assets/products/womens-hoodie-blush.jpg';
import womensSweatshirtTaupe from '@/assets/products/womens-sweatshirt-taupe.jpg';
import womensTracksuitCream from '@/assets/products/womens-tracksuit-cream.jpg';
// T-Shirt images
import tshirtBlack from '@/assets/products/tshirt-black.jpg';
import tshirtCream from '@/assets/products/tshirt-cream.jpg';
import tshirtSage from '@/assets/products/tshirt-sage.jpg';
import tshirtNavy from '@/assets/products/tshirt-navy.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'hoodie' | 'sweatshirt' | 'tracksuit' | 't-shirt' | 'pants';
  collection: 'kids' | 'youngmen' | 'women';
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

  // Young Men Collection - Hoodies
  {
    id: 'youngmen-essential-hoodie',
    name: 'Essential Hoodie',
    price: 125,
    category: 'hoodie',
    collection: 'youngmen',
    colors: [
      { name: 'Black', hex: '#1A1A1A', image: mensHoodieBlack },
      { name: 'Cream', hex: '#F5F0E8', image: kidsHoodieCream },
      { name: 'Sage', hex: '#9CAF88', image: youngmenHoodieSage },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [mensHoodieBlack, kidsHoodieCream, youngmenHoodieSage],
    description: 'Signature Essential London hoodie with premium heavyweight cotton. Oversized streetwear fit.',
    isBestseller: true,
  },
  {
    id: 'youngmen-oversized-hoodie',
    name: 'Oversized Street Hoodie',
    price: 135,
    category: 'hoodie',
    collection: 'youngmen',
    colors: [
      { name: 'Sage', hex: '#9CAF88', image: youngmenHoodieSage },
      { name: 'Black', hex: '#1A1A1A', image: mensHoodieBlack },
      { name: 'Charcoal', hex: '#3A3A3A', image: mensHoodieBlack },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [youngmenHoodieSage, mensHoodieBlack],
    description: 'Oversized silhouette with dropped shoulders. Premium heavyweight French terry.',
    isNew: true,
  },
  {
    id: 'youngmen-zip-hoodie',
    name: 'Full Zip Street Hoodie',
    price: 145,
    category: 'hoodie',
    collection: 'youngmen',
    colors: [
      { name: 'Charcoal', hex: '#3A3A3A', image: youngmenTracksuitCharcoal },
      { name: 'Cream', hex: '#F5F0E8', image: kidsHoodieCream },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [youngmenTracksuitCharcoal, kidsHoodieCream],
    description: 'Full zip hoodie with premium metal hardware. Contemporary streetwear design.',
  },
  // Young Men Collection - Sweatshirts
  {
    id: 'youngmen-crewneck',
    name: 'Essential Crewneck',
    price: 95,
    category: 'sweatshirt',
    collection: 'youngmen',
    colors: [
      { name: 'Navy', hex: '#1E2A3A', image: youngmenSweatshirtNavy },
      { name: 'Cream', hex: '#F5F0E8', image: kidsSweatshirtCream },
      { name: 'Black', hex: '#1A1A1A', image: kidsSweatshirtBlack },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [youngmenSweatshirtNavy, kidsSweatshirtCream, kidsSweatshirtBlack],
    description: 'Minimalist crewneck sweatshirt with subtle chest logo. Relaxed streetwear fit.',
    isNew: true,
  },
  {
    id: 'youngmen-relaxed-sweat',
    name: 'Relaxed Fit Sweatshirt',
    price: 105,
    category: 'sweatshirt',
    collection: 'youngmen',
    colors: [
      { name: 'Navy', hex: '#1E2A3A', image: youngmenSweatshirtNavy },
      { name: 'Sage', hex: '#9CAF88', image: youngmenHoodieSage },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [youngmenSweatshirtNavy, youngmenHoodieSage],
    description: 'Soft brushed fleece interior with relaxed contemporary fit.',
  },
  // Young Men Collection - Tracksuits
  {
    id: 'youngmen-tracksuit',
    name: 'Essential Tracksuit',
    price: 195,
    category: 'tracksuit',
    collection: 'youngmen',
    colors: [
      { name: 'Charcoal', hex: '#3A3A3A', image: youngmenTracksuitCharcoal },
      { name: 'Grey', hex: '#6B6B6B', image: mensTracksuitGrey },
      { name: 'Black', hex: '#1A1A1A', image: kidsTracksuitBlack },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [youngmenTracksuitCharcoal, mensTracksuitGrey, kidsTracksuitBlack],
    description: 'Complete tracksuit set with matching hoodie and joggers. Streetwear essential.',
    isBestseller: true,
  },
  {
    id: 'youngmen-premium-tracksuit',
    name: 'Premium Track Set',
    price: 225,
    category: 'tracksuit',
    collection: 'youngmen',
    colors: [
      { name: 'Grey', hex: '#6B6B6B', image: mensTracksuitGrey },
      { name: 'Charcoal', hex: '#3A3A3A', image: youngmenTracksuitCharcoal },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [mensTracksuitGrey, youngmenTracksuitCharcoal],
    description: 'Elevated tracksuit with premium fabric and refined details. Contemporary silhouette.',
    isNew: true,
  },

  // Women Collection - Hoodies
  {
    id: 'women-essential-hoodie',
    name: 'Essential Hoodie',
    price: 120,
    category: 'hoodie',
    collection: 'women',
    colors: [
      { name: 'Blush', hex: '#E8D5D5', image: womensHoodieBlush },
      { name: 'Cream', hex: '#F5F0E8', image: womensHoodieCream },
      { name: 'Black', hex: '#1A1A1A', image: kidsHoodieBlack },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [womensHoodieBlush, womensHoodieCream, kidsHoodieBlack],
    description: 'Feminine fit Essential hoodie with soft brushed interior. Modern relaxed silhouette.',
    isNew: true,
  },
  {
    id: 'women-cropped-hoodie',
    name: 'Cropped Essential Hoodie',
    price: 115,
    category: 'hoodie',
    collection: 'women',
    colors: [
      { name: 'Cream', hex: '#F5F0E8', image: womensHoodieCream },
      { name: 'Blush', hex: '#E8D5D5', image: womensHoodieBlush },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [womensHoodieCream, womensHoodieBlush],
    description: 'Cropped silhouette with relaxed fit and dropped shoulders.',
    isBestseller: true,
  },
  {
    id: 'women-oversized-hoodie',
    name: 'Oversized Logo Hoodie',
    price: 130,
    category: 'hoodie',
    collection: 'women',
    colors: [
      { name: 'Cream', hex: '#F5F0E8', image: womensHoodieCream },
      { name: 'Blush', hex: '#E8D5D5', image: womensHoodieBlush },
      { name: 'Black', hex: '#1A1A1A', image: kidsHoodieBlack },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [womensHoodieCream, womensHoodieBlush],
    description: 'Oversized silhouette with signature Essential London branding.',
  },
  // Women Collection - Sweatshirts
  {
    id: 'women-crewneck',
    name: 'Essential Crewneck',
    price: 95,
    category: 'sweatshirt',
    collection: 'women',
    colors: [
      { name: 'Taupe', hex: '#B8A898', image: womensSweatshirtTaupe },
      { name: 'Cream', hex: '#F5F0E8', image: kidsSweatshirtCream },
      { name: 'Blush', hex: '#E8D5D5', image: womensHoodieBlush },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [womensSweatshirtTaupe, kidsSweatshirtCream],
    description: 'Minimalist crewneck sweatshirt with subtle chest logo. Soft brushed interior.',
    isNew: true,
  },
  {
    id: 'women-relaxed-sweat',
    name: 'Relaxed Fit Sweatshirt',
    price: 100,
    category: 'sweatshirt',
    collection: 'women',
    colors: [
      { name: 'Taupe', hex: '#B8A898', image: womensSweatshirtTaupe },
      { name: 'Cream', hex: '#F5F0E8', image: kidsSweatshirtCream },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [womensSweatshirtTaupe, kidsSweatshirtCream],
    description: 'Soft brushed fleece interior with relaxed contemporary fit.',
  },
  // Women Collection - Tracksuits
  {
    id: 'women-tracksuit',
    name: 'Essential Tracksuit Set',
    price: 185,
    originalPrice: 220,
    category: 'tracksuit',
    collection: 'women',
    colors: [
      { name: 'Cream', hex: '#F5F0E8', image: womensTracksuitCream },
      { name: 'Blush', hex: '#E8D5D5', image: womensHoodieBlush },
      { name: 'Black', hex: '#1A1A1A', image: kidsTracksuitBlack },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [womensTracksuitCream, kidsTracksuitBlack],
    description: 'Complete tracksuit set including cropped hoodie and matching joggers.',
    isBestseller: true,
  },
  {
    id: 'women-premium-tracksuit',
    name: 'Premium Track Set',
    price: 210,
    category: 'tracksuit',
    collection: 'women',
    colors: [
      { name: 'Cream', hex: '#F5F0E8', image: womensTracksuitCream },
      { name: 'Taupe', hex: '#B8A898', image: womensSweatshirtTaupe },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [womensTracksuitCream],
    description: 'Elevated tracksuit with premium fabric and refined details. Modern feminine fit.',
    isNew: true,
  },

  // T-Shirts - Kids Collection
  {
    id: 'kids-essential-tee',
    name: 'Essential Kids T-Shirt',
    price: 45,
    category: 't-shirt',
    collection: 'kids',
    colors: [
      { name: 'Black', hex: '#1A1A1A', image: tshirtBlack },
      { name: 'Cream', hex: '#F5F0E8', image: tshirtCream },
      { name: 'Sage', hex: '#9CAF88', image: tshirtSage },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: [tshirtBlack, tshirtCream, tshirtSage],
    description: 'Premium cotton essential t-shirt with relaxed fit. Soft and comfortable for everyday wear.',
    isNew: true,
  },
  {
    id: 'kids-oversized-tee',
    name: 'Oversized Logo Tee',
    price: 55,
    category: 't-shirt',
    collection: 'kids',
    colors: [
      { name: 'Cream', hex: '#F5F0E8', image: tshirtCream },
      { name: 'Black', hex: '#1A1A1A', image: tshirtBlack },
    ],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y', '14Y'],
    images: [tshirtCream, tshirtBlack],
    description: 'Oversized silhouette with signature Essential London branding on chest.',
    isBestseller: true,
  },

  // T-Shirts - Young Men Collection
  {
    id: 'youngmen-essential-tee',
    name: 'Essential T-Shirt',
    price: 65,
    category: 't-shirt',
    collection: 'youngmen',
    colors: [
      { name: 'Black', hex: '#1A1A1A', image: tshirtBlack },
      { name: 'Cream', hex: '#F5F0E8', image: tshirtCream },
      { name: 'Navy', hex: '#1E2A3A', image: tshirtNavy },
      { name: 'Sage', hex: '#9CAF88', image: tshirtSage },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [tshirtBlack, tshirtCream, tshirtNavy, tshirtSage],
    description: 'Signature Essential London t-shirt with heavyweight premium cotton. Streetwear essential.',
    isBestseller: true,
  },
  {
    id: 'youngmen-oversized-tee',
    name: 'Oversized Street Tee',
    price: 75,
    category: 't-shirt',
    collection: 'youngmen',
    colors: [
      { name: 'Navy', hex: '#1E2A3A', image: tshirtNavy },
      { name: 'Black', hex: '#1A1A1A', image: tshirtBlack },
      { name: 'Sage', hex: '#9CAF88', image: tshirtSage },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [tshirtNavy, tshirtBlack, tshirtSage],
    description: 'Oversized fit with dropped shoulders. Premium cotton blend with subtle branding.',
    isNew: true,
  },
  {
    id: 'youngmen-boxy-tee',
    name: 'Boxy Fit Tee',
    price: 70,
    category: 't-shirt',
    collection: 'youngmen',
    colors: [
      { name: 'Cream', hex: '#F5F0E8', image: tshirtCream },
      { name: 'Sage', hex: '#9CAF88', image: tshirtSage },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [tshirtCream, tshirtSage],
    description: 'Contemporary boxy silhouette with minimal branding. Elevated everyday essential.',
  },

  // T-Shirts - Women Collection
  {
    id: 'women-essential-tee',
    name: 'Essential T-Shirt',
    price: 60,
    category: 't-shirt',
    collection: 'women',
    colors: [
      { name: 'Cream', hex: '#F5F0E8', image: tshirtCream },
      { name: 'Black', hex: '#1A1A1A', image: tshirtBlack },
      { name: 'Sage', hex: '#9CAF88', image: tshirtSage },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [tshirtCream, tshirtBlack, tshirtSage],
    description: 'Feminine fit Essential t-shirt with soft premium cotton. Modern relaxed silhouette.',
    isNew: true,
  },
  {
    id: 'women-cropped-tee',
    name: 'Cropped Essential Tee',
    price: 55,
    category: 't-shirt',
    collection: 'women',
    colors: [
      { name: 'Cream', hex: '#F5F0E8', image: tshirtCream },
      { name: 'Black', hex: '#1A1A1A', image: tshirtBlack },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [tshirtCream, tshirtBlack],
    description: 'Cropped silhouette with relaxed fit. Perfect for high-waisted styling.',
    isBestseller: true,
  },
  {
    id: 'women-oversized-tee',
    name: 'Oversized Logo Tee',
    price: 65,
    category: 't-shirt',
    collection: 'women',
    colors: [
      { name: 'Black', hex: '#1A1A1A', image: tshirtBlack },
      { name: 'Cream', hex: '#F5F0E8', image: tshirtCream },
      { name: 'Sage', hex: '#9CAF88', image: tshirtSage },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [tshirtBlack, tshirtCream, tshirtSage],
    description: 'Oversized silhouette with signature Essential London branding.',
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
