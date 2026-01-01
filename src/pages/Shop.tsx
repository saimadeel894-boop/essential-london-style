import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/lib/products';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ChevronDown } from 'lucide-react';

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'hoodie', label: 'Hoodies' },
  { value: 'sweatshirt', label: 'Sweatshirts' },
  { value: 'tracksuit', label: 'Tracksuits' },
  { value: 't-shirt', label: 'T-Shirts' },
];

const collections = [
  { value: 'all', label: 'All Collections' },
  { value: 'kids', label: 'Kids' },
  { value: 'youngmen', label: 'Young Men' },
  { value: 'women', label: 'Women' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
];

const Shop = () => {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Apply filter param
    if (filterParam === 'new') {
      filtered = filtered.filter(p => p.isNew);
    } else if (filterParam === 'bestseller') {
      filtered = filtered.filter(p => p.isBestseller);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Apply collection filter
    if (selectedCollection !== 'all') {
      filtered = filtered.filter(p => p.collection === selectedCollection);
    }

    // Apply sorting
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
        // Featured - bestsellers first
        filtered = filtered.filter(p => p.isBestseller).concat(filtered.filter(p => !p.isBestseller));
    }

    return filtered;
  }, [selectedCategory, selectedCollection, sortBy, filterParam]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-secondary py-16 lg:py-24">
        <div className="container-luxury text-center">
          <h1 className="text-display text-4xl md:text-5xl font-light">Shop All</h1>
          <p className="text-muted-foreground mt-4">
            {filteredProducts.length} products
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
            {/* Mobile filter toggle */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden nav-link flex items-center gap-2"
            >
              Filters <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Desktop filters */}
            <div className="hidden lg:flex items-center gap-6">
              <select
                value={selectedCollection}
                onChange={(e) => setSelectedCollection(e.target.value)}
                className="bg-transparent text-sm focus:outline-none cursor-pointer"
              >
                {collections.map(col => (
                  <option key={col.value} value={col.value}>{col.label}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-sm focus:outline-none cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Mobile filters dropdown */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${showFilters ? 'max-h-40 pt-4' : 'max-h-0'}`}>
            <div className="flex flex-col gap-4">
              <select
                value={selectedCollection}
                onChange={(e) => setSelectedCollection(e.target.value)}
                className="bg-transparent text-sm focus:outline-none border border-border p-2"
              >
                {collections.map(col => (
                  <option key={col.value} value={col.value}>{col.label}</option>
                ))}
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

export default Shop;
