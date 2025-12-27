import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';
import kidsCollection from '@/assets/kids-collection.jpg';
import youngmenCollection from '@/assets/youngmen-collection.jpg';
import womenCollection from '@/assets/women-collection.jpg';
import { ProductGrid } from '@/components/product/ProductGrid';
import { getFeaturedProducts, getNewArrivals } from '@/lib/products';
import { ArrowRight, Truck, Shield, Leaf } from 'lucide-react';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Essential London - Premium Streetwear" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/10" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="inline-block text-xs tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up text-background bg-foreground/80 px-4 py-2">
            New Season
          </span>
          <h1 className="text-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 opacity-0 animate-fade-up stagger-1 text-background drop-shadow-lg">
            Essential London
          </h1>
          <p className="text-lg md:text-xl text-background/90 mb-10 opacity-0 animate-fade-up stagger-2 drop-shadow-md">
            Premium streetwear essentials for the modern wardrobe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up stagger-3">
            <Link to="/shop" className="btn-luxury bg-background text-foreground hover:bg-background/90">
              Shop Collection
            </Link>
            <Link to="/kids" className="btn-luxury border border-background text-background hover:bg-background hover:text-foreground">
              Kids Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Banner */}
      <section className="bg-primary text-primary-foreground py-4">
        <div className="container-luxury">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4" />
              <span className="text-xs tracking-wider uppercase">Free Shipping Over £100</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="text-xs tracking-wider uppercase">30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              <span className="text-xs tracking-wider uppercase">Sustainable Materials</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="container-luxury py-20 lg:py-28">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Collections</span>
          <h2 className="text-display text-3xl md:text-4xl font-light mt-2">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kids */}
          <Link to="/kids" className="group relative aspect-[3/4] overflow-hidden">
            <img 
              src={kidsCollection} 
              alt="Kids Collection" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-background">
              <h3 className="text-display text-2xl md:text-3xl font-light mb-2">Kids</h3>
              <span className="text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                Shop Now <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {/* Young Men */}
          <Link to="/young-men" className="group relative aspect-[3/4] overflow-hidden">
            <img 
              src={youngmenCollection} 
              alt="Young Men Collection" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-background">
              <h3 className="text-display text-2xl md:text-3xl font-light mb-2">Young Men</h3>
              <span className="text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                Shop Now <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {/* Women */}
          <Link to="/women" className="group relative aspect-[3/4] overflow-hidden">
            <img 
              src={womenCollection} 
              alt="Women Collection" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-background">
              <h3 className="text-display text-2xl md:text-3xl font-light mb-2">Women</h3>
              <span className="text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                Shop Now <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-xs tracking-widest uppercase text-muted-foreground">Curated Selection</span>
              <h2 className="text-display text-3xl md:text-4xl font-light mt-2">Featured Pieces</h2>
            </div>
            <Link to="/shop" className="nav-link link-underline flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} columns={4} />
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container-luxury py-20 lg:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs tracking-widest uppercase text-muted-foreground">Just Dropped</span>
            <h2 className="text-display text-3xl md:text-4xl font-light mt-2">New Arrivals</h2>
          </div>
          <Link to="/shop?filter=new" className="nav-link link-underline flex items-center gap-2">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ProductGrid products={newArrivals.slice(0, 4)} columns={4} />
      </section>

      {/* Values Section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-display text-xl font-medium mb-4">Premium Quality</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Crafted from the finest materials, each piece is designed 
                to stand the test of time.
              </p>
            </div>
            <div>
              <h3 className="text-display text-xl font-medium mb-4">Timeless Design</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Minimalist aesthetics that transcend seasons and trends, 
                creating wardrobes that last.
              </p>
            </div>
            <div>
              <h3 className="text-display text-xl font-medium mb-4">Sustainable Future</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Committed to responsible production and materials 
                that respect our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-luxury py-20 lg:py-28 text-center">
        <h2 className="text-display text-3xl md:text-4xl font-light mb-4">Join the Community</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Be the first to know about new drops, exclusive offers, and Essential London updates.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 border border-border bg-transparent text-sm focus:outline-none focus:border-foreground transition-colors"
          />
          <button type="submit" className="btn-luxury-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Index;
