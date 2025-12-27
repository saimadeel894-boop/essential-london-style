import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Error 404</span>
        <h1 className="text-display text-5xl md:text-7xl font-light mt-4 mb-6">Page Not Found</h1>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-luxury-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
