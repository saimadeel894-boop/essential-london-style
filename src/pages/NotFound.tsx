import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="text-center px-4 max-w-md">
        <span className="text-display text-8xl md:text-9xl font-light text-primary/20">404</span>
        <h1 className="text-display text-2xl md:text-3xl font-light mt-4 mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for. 
          It might have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="btn-luxury-primary inline-flex items-center justify-center gap-2"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link 
            to="/shop" 
            className="btn-luxury-outline inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
