import heroImage from '@/assets/hero-image.jpg';
import youngmenCollection from '@/assets/youngmen-collection.jpg';
import womenCollection from '@/assets/women-collection.jpg';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Essential London Story" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="inline-block text-xs tracking-[0.3em] uppercase mb-4 text-background/80">
            Est. 2024
          </span>
          <h1 className="text-display text-4xl md:text-6xl font-light text-background">
            Our Story
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="container-luxury py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Our Mission</span>
          <h2 className="text-display text-3xl md:text-4xl font-light mt-4 mb-8">
            Redefining Essential Wardrobe Pieces
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Essential London was born from a simple belief: that everyday clothing should be anything but ordinary. 
            We create premium streetwear essentials that blend timeless design with exceptional quality, 
            crafted for those who appreciate the beauty in simplicity.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-widest uppercase text-muted-foreground">Quality First</span>
              <h3 className="text-display text-2xl md:text-3xl font-light mt-4 mb-6">
                Crafted to Last
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every Essential London piece is crafted from premium materials sourced from the world's finest mills. 
                Our heavyweight cotton, brushed fleece interiors, and reinforced construction ensure that each garment 
                not only looks exceptional but stands the test of time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that true luxury lies in longevity. That's why we obsess over every detail, 
                from the weight of our fabrics to the precision of our stitching.
              </p>
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src={youngmenCollection} 
                alt="Quality craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="container-luxury py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 aspect-square overflow-hidden">
            <img 
              src={womenCollection} 
              alt="Sustainable fashion" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs tracking-widest uppercase text-muted-foreground">Responsibility</span>
            <h3 className="text-display text-2xl md:text-3xl font-light mt-4 mb-6">
              Conscious Creation
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sustainability isn't just a buzzword for us—it's woven into everything we do. 
              From our organic cotton sourcing to our reduced-waste production processes, 
              we're committed to minimizing our environmental footprint.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our packaging is 100% recyclable, and we're continuously working with our partners 
              to improve our practices and reduce our impact on the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-16">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-display text-3xl md:text-4xl font-light mb-2">100%</p>
              <p className="text-sm text-muted-foreground">Premium Materials</p>
            </div>
            <div>
              <p className="text-display text-3xl md:text-4xl font-light mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Countries Shipped</p>
            </div>
            <div>
              <p className="text-display text-3xl md:text-4xl font-light mb-2">30</p>
              <p className="text-sm text-muted-foreground">Day Returns</p>
            </div>
            <div>
              <p className="text-display text-3xl md:text-4xl font-light mb-2">24/7</p>
              <p className="text-sm text-muted-foreground">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* London Heritage */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="container-luxury text-center">
          <span className="text-xs tracking-widest uppercase text-primary-foreground/70">Heritage</span>
          <h3 className="text-display text-2xl md:text-3xl font-light mt-4 mb-6">
            Born in London
          </h3>
          <p className="text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Rooted in London's rich culture of creativity and innovation, Essential London draws inspiration 
            from the city's unique blend of tradition and contemporary edge. Our designs reflect this duality—
            timeless silhouettes with modern sensibilities, created for the global citizen who calls anywhere home.
          </p>
          <Link to="/shop" className="btn-luxury bg-primary-foreground text-primary hover:bg-primary-foreground/90 inline-flex items-center gap-2">
            Explore Collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
