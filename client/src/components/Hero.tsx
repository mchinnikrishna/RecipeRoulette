import { Button } from "@/components/ui/button";
import heroImage from '@assets/stock_images/dark_atmospheric_clo_c8de57c9.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
          Authentic <span className="text-primary">Vintage</span> Style
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Discover curated vintage clothing pieces that tell a story. From classic leather jackets to rare band tees, find your unique style with our premium collection.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary/90 backdrop-blur-sm border border-primary-border"
            data-testid="button-shop-now"
            onClick={() => {
              const productsSection = document.querySelector('[data-section="products"]');
              productsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Shop Now
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 bg-background/20 backdrop-blur-sm border border-border"
            data-testid="button-explore-collection"
          >
            Explore Collection
          </Button>
        </div>
      </div>
    </section>
  );
}