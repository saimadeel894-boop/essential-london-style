import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';
import kidsCollection from '@/assets/kids-collection.jpg';
import { ProductGrid } from '@/components/product/ProductGrid';
import { getFeaturedProducts, getNewArrivals, getProductsByCollection } from '@/lib/products';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const kidsProducts = getProductsByCollection('kids').slice(0, 4);

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
          <p className="text-center text-sm tracking-widest uppercase">
            Free Shipping on Orders Over £100 • Premium Quality • Sustainable Materials
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container-luxury py-20 lg:py-28">
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
      </section>

      {/* Kids Collection Banner */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={kidsCollection} 
            alt="Kids Collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/20" />
        </div>
        
        <div className="relative z-10 container-luxury">
          <div className="max-w-lg">
            <span className="inline-block text-xs tracking-[0.3em] uppercase mb-4 text-background">
              New Collection
            </span>
            <h2 className="text-display text-4xl md:text-5xl font-light text-background mb-6">
              Kids Essentials
            </h2>
            <p className="text-background/80 mb-8">
              Premium streetwear sized for the next generation. 
              Crafted with the same quality and attention to detail.
            </p>
            <Link to="/kids" className="btn-luxury bg-background text-foreground hover:bg-background/90">
              Shop Kids
            </Link>
          </div>
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
        <ProductGrid products={newArrivals} columns={4} />
      </section>

      {/* Values Section */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="opacity-0 animate-fade-up">
              <h3 className="text-display text-xl font-medium mb-4">Premium Quality</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Crafted from the finest materials, each piece is designed 
                to stand the test of time.
              </p>
            </div>
            <div className="opacity-0 animate-fade-up stagger-1">
              <h3 className="text-display text-xl font-medium mb-4">Timeless Design</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Minimalist aesthetics that transcend seasons and trends, 
                creating wardrobes that last.
              </p>
            </div>
            <div className="opacity-0 animate-fade-up stagger-2">
              <h3 className="text-display text-xl font-medium mb-4">Sustainable Future</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
