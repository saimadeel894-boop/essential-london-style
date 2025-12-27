import { Link } from 'react-router-dom';
import { Product } from '@/lib/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <Link 
      to={`/product/${product.id}`}
      className={cn("product-card block", className)}
    >
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
        {/* Color swatch as placeholder */}
        <div 
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundColor: product.colors[0]?.hex || '#E8E4DE' }}
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-background text-foreground text-xs tracking-wider uppercase">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs tracking-wider uppercase">
              Bestseller
            </span>
          )}
          {product.originalPrice && (
            <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs tracking-wider uppercase">
              Sale
            </span>
          )}
        </div>

        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
          <span className="px-6 py-2 bg-background text-foreground text-xs tracking-wider uppercase">
            Quick View
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <div className="flex items-center gap-2">
          {product.originalPrice ? (
            <>
              <span className="text-sm font-medium">£{product.price}</span>
              <span className="text-sm text-muted-foreground line-through">£{product.originalPrice}</span>
            </>
          ) : (
            <span className="text-sm font-medium">£{product.price}</span>
          )}
        </div>
        
        {/* Color options */}
        <div className="flex gap-1.5 pt-1">
          {product.colors.map((color) => (
            <span
              key={color.name}
              className="w-4 h-4 rounded-full border border-border"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};
