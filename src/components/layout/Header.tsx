import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';
import { SearchDialog } from '@/components/search/SearchDialog';

const navigation = [
  { name: 'Shop All', href: '/shop' },
  { name: 'Kids', href: '/kids' },
  { name: 'Young Men', href: '/young-men' },
  { name: 'Women', href: '/women' },
  { name: 'New Arrivals', href: '/shop?filter=new' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-luxury">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "nav-link link-underline py-2 text-sm",
                  location.pathname === item.href && "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link 
            to="/" 
            className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none"
          >
            <h1 className="text-display text-xl lg:text-2xl font-semibold tracking-wider">
              ESSENTIAL LONDON
            </h1>
          </Link>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <button 
              className="p-2 hover:opacity-70 transition-opacity"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              className="p-2 relative hover:opacity-70 transition-opacity"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Search Dialog */}
          <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
        </div>

        {/* Mobile menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          mobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
        )}>
          <div className="flex flex-col gap-4 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "nav-link py-2",
                  location.pathname === item.href && "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
