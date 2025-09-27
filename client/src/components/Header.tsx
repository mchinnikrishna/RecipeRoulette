import { ShoppingCart, User, Search, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Link } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { apiRequest } from "@/lib/queryClient";
import LoginModal from "./LoginModal";
import type { User as UserType } from "@shared/schema";

interface CartItem {
  id: string;
  quantity: number;
}

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth() as { user: UserType | undefined, isAuthenticated: boolean, isLoading: boolean };
  const queryClient = useQueryClient();
  
  const { data: cartItems = [] } = useQuery<CartItem[]>({
    queryKey: ["/api/cart"],
  });
  
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const logoutMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/auth/logout"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/auth/user"] });
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
    },
  });

  const handleLogin = () => {
    setLoginModalOpen(true);
  };

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover-elevate rounded-md px-3 py-2" data-testid="link-home">
            <div className="text-2xl font-bold text-primary">VintageThreads</div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search vintage pieces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-card-border"
                data-testid="input-search"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-2">
            {!isLoading && (
              <>
                {!isAuthenticated ? (
                  <Button variant="ghost" size="sm" onClick={handleLogin} data-testid="button-login">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="flex items-center space-x-2" data-testid="button-user-menu">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={user?.profileImageUrl || undefined} />
                          <AvatarFallback className="text-xs">
                            {user?.firstName?.[0] || user?.email?.[0] || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <span className="hidden sm:block">
                          {user?.firstName || user?.email?.split('@')[0] || 'User'}
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={handleLogout} data-testid="button-logout">
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </>
            )}
            
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative" data-testid="button-cart">
                <ShoppingCart className="h-4 w-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </nav>
        </div>
      </div>
      
      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
    </header>
  );
}