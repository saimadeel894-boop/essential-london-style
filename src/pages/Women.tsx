import { useState, useMemo } from 'react';
import { getProductsByCollection } from '@/lib/products';
import { ProductGrid } from '@/components/product/ProductGrid';
import womenCollection from '@/assets/women-collection.jpg';
import { ChevronDown } from 'lucide-react';

const categories = [
  { value: 'all', label: 'All Women' },
  { value: 'hoodie', label: 'Hoodies' },
  { value: 'sweatshirt', label: 'Sweatshirts' },
  { value: 'tracksuit', label: 'Tracksuits' },
  { value: 't-shirt', label: 'T-Shirts' },
];

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-100', label: 'Under £100' },
  { value: '100-150', label: '£100 - £150' },
  { value: '150+', label: 'Over £150' },
];

const Women = () => {
  const allProducts = getProductsByCollection('women');
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedSize !== 'all') {
      filtered = filtered.filter(p => p.sizes.includes(selectedSize));
    }

    if (selectedPrice !== 'all') {
      if (selectedPrice === '0-100') {
        filtered = filtered.filter(p => p.price < 100);
      } else if (selectedPrice === '100-150') {
        filtered = filtered.filter(p => p.price >= 100 && p.price <= 150);
      } else if (selectedPrice === '150+') {
        filtered = filtered.filter(p => p.price > 150);
      }
    }

    switch (sortBy) {
      case 'newest':
        filtered = filtered.filter(p => p.isNew).concat(filtered.filter(p => !p.isNew));
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        filtered = filtered.filter(p => p.isBestseller).concat(filtered.filter(p => !p.isBestseller));
    }

    return filtered;
  }, [allProducts, selectedCategory, selectedSize, selectedPrice, sortBy]);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={womenCollection} 
            alt="Women Collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="inline-block text-xs tracking-[0.3em] uppercase mb-4 text-background">
            Collection
          </span>
          <h1 className="text-display text-4xl md:text-6xl font-light text-background">
            Women
          </h1>
          <p className="text-background/80 mt-4 max-w-md mx-auto">
            Clean, modern silhouettes with neutral tones and feminine details
          </p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="border-b border-border">
        <div className="container-luxury py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-2 text-sm tracking-wide transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="sticky top-16 lg:top-20 z-40 bg-background border-b border-border">
        <div className="container-luxury py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{filteredProducts.length} products</span>
            </div>

            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden nav-link flex items-center gap-2"
            >
              Filters <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            <div className="hidden lg:flex items-center gap-6">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="bg-transparent text-sm focus:outline-none cursor-pointer"
              >
                <option value="all">All Sizes</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>

              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="bg-transparent text-sm focus:outline-none cursor-pointer"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Mobile filters dropdown */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${showFilters ? 'max-h-60 pt-4' : 'max-h-0'}`}>
            <div className="flex flex-col gap-4">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="bg-transparent text-sm focus:outline-none border border-border p-2"
              >
                <option value="all">All Sizes</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>

              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="bg-transparent text-sm focus:outline-none border border-border p-2"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm focus:outline-none border border-border p-2"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-luxury py-12 lg:py-20">
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} columns={4} />
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Women;
