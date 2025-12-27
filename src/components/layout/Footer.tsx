import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-luxury py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-display text-2xl font-medium mb-4">ESSENTIAL LONDON</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Premium streetwear essentials crafted for the modern lifestyle. 
              Quality, comfort, and timeless design.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link to="/shop" className="hover:text-primary-foreground transition-colors">All Products</Link></li>
              <li><Link to="/kids" className="hover:text-primary-foreground transition-colors">Kids</Link></li>
              <li><Link to="/young-men" className="hover:text-primary-foreground transition-colors">Young Men</Link></li>
              <li><Link to="/women" className="hover:text-primary-foreground transition-colors">Women</Link></li>
              <li><Link to="/shop?filter=new" className="hover:text-primary-foreground transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6">Customer Service</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Size Guide</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">Sustainability</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-primary-foreground/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Essential London. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <span className="font-medium">We Accept:</span>
              <div className="flex gap-3">
                <span className="px-2 py-1 border border-primary-foreground/30 text-xs">VISA</span>
                <span className="px-2 py-1 border border-primary-foreground/30 text-xs">MC</span>
                <span className="px-2 py-1 border border-primary-foreground/30 text-xs">AMEX</span>
                <span className="px-2 py-1 border border-primary-foreground/30 text-xs">PAYPAL</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-primary-foreground/50">
            <Link to="/about" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            <Link to="/about" className="hover:text-primary-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
