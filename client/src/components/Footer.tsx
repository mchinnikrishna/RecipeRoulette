import { Link } from "wouter";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block" data-testid="link-footer-home">
              VintageThreads
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Curating authentic vintage clothing pieces that tell stories and define unique personal style. 
              Each piece is hand-selected for quality and character.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" data-testid="button-social-instagram">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-social-twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-social-facebook">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Shop All', 'Jackets', 'T-Shirts', 'Shoes', 'Accessories', 'Dresses', 'Skirts'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/category/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-category-${item.toLowerCase().replace(' ', '-')}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {[
                { name: 'Contact Us', href: '/contact' },
                { name: 'Shipping Info', href: '/shipping' },
                { name: 'Returns', href: '/returns' },
                { name: 'Size Guide', href: '/size-guide' },
                { name: 'FAQ', href: '/faq' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-service-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-card-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 VintageThreads. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm" data-testid="link-privacy">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm" data-testid="link-terms">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}