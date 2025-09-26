import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Landing() {
  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <img 
          src="/attached_assets/generated_images/Vintage_clothing_hero_background_6a1f68a5.png" 
          alt="Vintage clothing collection" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            VintageThreads
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover unique vintage clothing pieces that tell a story. From classic denim to rare band tees, find your perfect vintage style.
          </p>
          <div className="space-y-4">
            <Button 
              size="lg"
              onClick={handleLogin}
              data-testid="button-login"
              className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-6 text-lg"
            >
              Sign In to Shop
            </Button>
            <p className="text-white/70 text-sm">
              Sign in with Google, GitHub, X, Apple, or email
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose VintageThreads?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">Authentic Vintage</CardTitle>
                <CardDescription>
                  Hand-picked vintage pieces with verified authenticity and quality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every item is carefully curated and inspected to ensure you get genuine vintage pieces with character and history.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">Unique Selection</CardTitle>
                <CardDescription>
                  One-of-a-kind pieces you won't find anywhere else
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From rare band merchandise to classic designer pieces, discover clothing that reflects your individual style.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">Sustainable Fashion</CardTitle>
                <CardDescription>
                  Eco-friendly shopping that reduces fashion waste
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Give vintage clothing a new life while reducing environmental impact through sustainable fashion choices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-card/50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of vintage fashion enthusiasts and discover your next favorite piece
          </p>
          <Button 
            size="lg"
            onClick={handleLogin}
            data-testid="button-login-cta"
            className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-6 text-lg"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </div>
  );
}