import { useState, useMemo } from 'react';
import { ProductGrid } from '@/components/product/ProductGrid';
import { getProductsByCategory } from '@/lib/products';
import { cn } from '@/lib/utils';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import tshirtsCollection from '@/assets/tshirts-collection.jpg';

const collections = ['All', 'Kids', 'Young Men', 'Women'];
const sizes = ['All Sizes', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '4Y', '6Y', '8Y', '10Y', '12Y', '14Y'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under £50', min: 0, max: 50 },
  { label: '£50 - £75', min: 50, max: 75 },
  { label: 'Over £75', min: 75, max: Infinity },
];

const TShirts = () => {
  const allTShirts = getProductsByCategory('t-shirt');
  const [selectedCollection, setSelectedCollection] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All Sizes');
  const [selectedPrice, setSelectedPrice] = useState('All Prices');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...allTShirts];
    
    // Filter by collection
    if (selectedCollection !== 'All') {
      const collectionMap: Record<string, string> = {
        'Kids': 'kids',
        'Young Men': 'youngmen',
        'Women': 'women',
      };
      filtered = filtered.filter(p => p.collection === collectionMap[selectedCollection]);
    }
    
    // Filter by size
    if (selectedSize !== 'All Sizes') {
      filtered = filtered.filter(p => p.sizes.includes(selectedSize));
    }
    
    // Filter by price
    const priceRange = priceRanges.find(r => r.label === selectedPrice);
    if (priceRange && selectedPrice !== 'All Prices') {
      filtered = filtered.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
    }
    
    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }
    
    return filtered;
  }, [allTShirts, selectedCollection, selectedSize, selectedPrice, sortBy]);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <img 
          src={tshirtsCollection}
          alt="T-Shirts Collection"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <h1 className="text-display text-4xl lg:text-6xl font-semibold text-foreground mb-4">
            T-Shirts
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-4">
            Premium essential t-shirts. Elevated basics for everyday luxury.
          </p>
        </div>
      </div>

      <div className="container-luxury py-12">
        {/* Collection Pills */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {collections.map((collection) => (
            <button
              key={collection}
              onClick={() => setSelectedCollection(collection)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                selectedCollection === collection
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {collection}
            </button>
          ))}
        </div>

        {/* Filters Bar */}
        <div className="sticky top-16 lg:top-20 z-40 bg-background/95 backdrop-blur-sm py-4 border-b border-border mb-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
            
            {/* Mobile Filter Toggle */}
            <button 
              className="lg:hidden flex items-center gap-2 text-sm"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="relative">
                <select 
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="appearance-none bg-transparent pr-8 text-sm cursor-pointer focus:outline-none"
                >
                  {sizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
              </div>

              <div className="relative">
                <select 
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="appearance-none bg-transparent pr-8 text-sm cursor-pointer focus:outline-none"
                >
                  {priceRanges.map(range => (
                    <option key={range.label} value={range.label}>{range.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
              </div>

              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 text-sm cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Mobile Filters Panel */}
          <div className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            showFilters ? "max-h-48 mt-4" : "max-h-0"
          )}>
            <div className="flex flex-wrap gap-4">
              <select 
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="flex-1 min-w-[120px] bg-secondary px-4 py-2 rounded-lg text-sm"
              >
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>

              <select 
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="flex-1 min-w-[120px] bg-secondary px-4 py-2 rounded-lg text-sm"
              >
                {priceRanges.map(range => (
                  <option key={range.label} value={range.label}>{range.label}</option>
                ))}
              </select>

              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 min-w-[120px] bg-secondary px-4 py-2 rounded-lg text-sm"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} columns={4} />
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
            <button 
              onClick={() => {
                setSelectedCollection('All');
                setSelectedSize('All Sizes');
                setSelectedPrice('All Prices');
              }}
              className="mt-4 text-sm underline hover:no-underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TShirts;
