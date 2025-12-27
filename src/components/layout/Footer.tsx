import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-luxury py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-display text-2xl font-medium mb-4">ESSENTIAL LONDON</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Premium streetwear essentials crafted for the modern lifestyle. 
              Quality, comfort, and timeless design.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link to="/shop" className="hover:text-primary-foreground transition-colors">All Products</Link></li>
              <li><Link to="/kids" className="hover:text-primary-foreground transition-colors">Kids Collection</Link></li>
              <li><Link to="/shop?filter=new" className="hover:text-primary-foreground transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop?filter=bestseller" className="hover:text-primary-foreground transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-primary-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/sizing" className="hover:text-primary-foreground transition-colors">Size Guide</Link></li>
              <li><Link to="/faq" className="hover:text-primary-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/sustainability" className="hover:text-primary-foreground transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="hover:text-primary-foreground transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Essential London. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
