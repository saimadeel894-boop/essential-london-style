import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { products, Product } from '@/lib/products';
import { cn } from '@/lib/utils';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const collections = ['all', 'kids', 'youngmen', 'women'] as const;
const categories = ['all', 'hoodies', 'sweatshirts', 'tracksuits'] as const;

export const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState('');
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const navigate = useNavigate();

  // Reset state when dialog closes
  useEffect(() => {
    if (!open) {
      setQuery('');
      setSelectedCollection('all');
      setSelectedCategory('all');
    }
  }, [open]);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by collection
    if (selectedCollection !== 'all') {
      filtered = filtered.filter(p => p.collection === selectedCollection);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by search query
    if (query.trim()) {
      const searchTerm = query.toLowerCase().trim();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm) ||
        p.colors.some(c => c.name.toLowerCase().includes(searchTerm))
      );
    }

    return filtered.slice(0, 8); // Limit results for performance
  }, [query, selectedCollection, selectedCategory]);

  const handleProductClick = (product: Product) => {
    onOpenChange(false);
    navigate(`/product/${product.id}`);
  };

  const formatCollectionName = (collection: string) => {
    if (collection === 'all') return 'All';
    if (collection === 'youngmen') return 'Young Men';
    return collection.charAt(0).toUpperCase() + collection.slice(1);
  };

  const formatCategoryName = (category: string) => {
    if (category === 'all') return 'All';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center border-b border-border px-4">
          <Search className="h-5 w-5 text-muted-foreground shrink-0" />
          <Input
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 hover:opacity-70 transition-opacity"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 p-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Collection:</span>
            <div className="flex gap-1">
              {collections.map((collection) => (
                <button
                  key={collection}
                  onClick={() => setSelectedCollection(collection)}
                  className={cn(
                    "px-3 py-1 text-xs rounded-full transition-all",
                    selectedCollection === collection
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border hover:border-primary"
                  )}
                >
                  {formatCollectionName(collection)}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Category:</span>
            <div className="flex gap-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-3 py-1 text-xs rounded-full transition-all",
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border hover:border-primary"
                  )}
                >
                  {formatCategoryName(category)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {filteredProducts.length > 0 ? (
            <div className="divide-y divide-border">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className="w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors text-left"
                >
                  <div className="w-16 h-16 bg-muted rounded-md overflow-hidden shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{product.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {formatCollectionName(product.collection)} • {formatCategoryName(product.category)}
                    </p>
                    <p className="text-sm font-medium mt-1">£{product.price.toFixed(2)}</p>
                  </div>
                  <div className="flex gap-1">
                    {product.colors.slice(0, 3).map((color) => (
                      <div
                        key={color.name}
                        className="w-4 h-4 rounded-full border border-border"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Search className="h-12 w-12 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">
                {query ? 'No products found' : 'Start typing to search...'}
              </p>
              {query && (
                <p className="text-xs text-muted-foreground mt-1">
                  Try adjusting your filters or search term
                </p>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {filteredProducts.length > 0 && (
          <div className="p-3 border-t border-border bg-muted/30 flex justify-between items-center">
            <p className="text-xs text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <button
              onClick={() => {
                onOpenChange(false);
                navigate('/shop');
              }}
              className="text-xs text-primary hover:underline"
            >
              View all products →
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
