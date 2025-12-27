import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, ProductColor, getFeaturedProducts } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ChevronLeft, Minus, Plus, Check, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="533" viewBox="0 0 400 533"%3E%3Crect fill="%23E8E4DE" width="400" height="533"/%3E%3Ctext fill="%23999" font-family="Arial" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage%3C/text%3E%3C/svg%3E';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addItem } = useCart();
  const { isInWishlist, toggleItem } = useWishlist();
  const { toast } = useToast();
  
  const inWishlist = product ? isInWishlist(product.id) : false;
  
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(
    product?.colors[0] || null
  );
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const relatedProducts = getFeaturedProducts().filter(p => p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-display text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="nav-link link-underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedColor) {
      toast({
        title: "Please select a color",
        variant: "destructive",
      });
      return;
    }
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }

    addItem(product, selectedColor, selectedSize, quantity);
    toast({
      title: "Added to bag",
      description: `${product.name} - ${selectedColor.name}, ${selectedSize}`,
    });
  };

  // Get current main image based on selected color
  const currentMainImage = selectedColor?.image || product.images[activeImageIndex] || product.images[0];

  // Get all available images for gallery thumbnails
  const galleryImages = product.colors
    .filter(color => color.image)
    .map(color => ({ image: color.image!, colorName: color.name, hex: color.hex }));

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="container-luxury py-4 border-b border-border">
        <Link to="/shop" className="nav-link flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Details */}
      <div className="container-luxury py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-secondary overflow-hidden">
              <img
                src={imageError[activeImageIndex] ? FALLBACK_IMAGE : currentMainImage}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={() => setImageError(prev => ({ ...prev, [activeImageIndex]: true }))}
              />
            </div>
            
            {/* Thumbnail gallery */}
            {galleryImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {galleryImages.map((item, index) => (
                  <button
                    key={item.colorName}
                    onClick={() => {
                      const color = product.colors.find(c => c.name === item.colorName);
                      if (color) {
                        setSelectedColor(color);
                        setActiveImageIndex(index);
                      }
                    }}
                    className={cn(
                      "relative w-20 h-24 flex-shrink-0 border-2 transition-colors overflow-hidden",
                      selectedColor?.name === item.colorName ? "border-foreground" : "border-transparent"
                    )}
                  >
                    <img
                      src={item.image}
                      alt={item.colorName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-32 lg:self-start space-y-8">
            {/* Title & Price */}
            <div>
              {product.isNew && (
                <span className="inline-block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  New Arrival
                </span>
              )}
              <h1 className="text-display text-3xl md:text-4xl font-light">{product.name}</h1>
              <div className="flex items-center gap-3 mt-4">
                <span className="text-xl font-medium">£{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    £{product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Color</span>
                <span className="text-sm text-muted-foreground">{selectedColor?.name}</span>
              </div>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => {
                      setSelectedColor(color);
                      const colorIndex = galleryImages.findIndex(g => g.colorName === color.name);
                      if (colorIndex >= 0) setActiveImageIndex(colorIndex);
                    }}
                    className={cn(
                      "w-10 h-10 rounded-full border-2 relative transition-all",
                      selectedColor?.name === color.name 
                        ? "border-foreground scale-110" 
                        : "border-border hover:border-muted-foreground"
                    )}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor?.name === color.name && (
                      <Check className={cn(
                        "absolute inset-0 m-auto h-4 w-4",
                        color.hex === '#1A1A1A' || color.hex === '#3A3A3A' || color.hex === '#1E2A3A' 
                          ? "text-background" 
                          : "text-foreground"
                      )} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Size</span>
                <button className="text-sm text-muted-foreground hover:text-foreground underline">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "py-3 text-sm border transition-colors",
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="text-sm font-medium block mb-4">Quantity</span>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-secondary transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-6 text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-secondary transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart & Wishlist */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="btn-luxury-primary flex-1"
              >
                Add to Bag - £{(product.price * quantity).toFixed(2)}
              </button>
              <button
                onClick={() => {
                  toggleItem(product.id);
                  toast({
                    title: inWishlist ? "Removed from wishlist" : "Added to wishlist",
                    description: product.name,
                  });
                }}
                className={cn(
                  "p-4 border transition-all",
                  inWishlist 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "border-border hover:border-foreground"
                )}
                aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart className={cn("h-5 w-5", inWishlist && "fill-current")} />
              </button>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Free shipping</span>
                <span>Orders over £100</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Returns</span>
                <span>30-day returns policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="bg-secondary py-20">
        <div className="container-luxury">
          <h2 className="text-display text-2xl md:text-3xl font-light mb-12 text-center">
            You May Also Like
          </h2>
          <ProductGrid products={relatedProducts} columns={4} />
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
