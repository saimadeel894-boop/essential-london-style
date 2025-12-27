import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/lib/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="533" viewBox="0 0 400 533"%3E%3Crect fill="%23E8E4DE" width="400" height="533"/%3E%3Ctext fill="%23999" font-family="Arial" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage%3C/text%3E%3C/svg%3E';

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const mainImage = product.colors[0]?.image || product.images[0];
  const hoverImage = product.colors[1]?.image || product.images[1] || mainImage;
  const currentImage = isHovered && hoverImage ? hoverImage : mainImage;

  return (
    <Link 
      to={`/product/${product.id}`}
      className={cn("product-card block group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
        {/* Product Image */}
        <img
          src={imageError ? FALLBACK_IMAGE : currentImage}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={() => setImageError(true)}
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
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
