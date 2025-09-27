import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProductSchema, insertCartItemSchema } from "@shared/schema";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { registerUser, loginUser, requireAuth, getAuthenticatedUser, type LocalAuthRequest } from "./localAuth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Local Auth routes
  app.post('/api/auth/register', async (req: any, res) => {
    try {
      const { email, password, firstName, lastName } = req.body;
      
      if (!email || !password || !firstName) {
        return res.status(400).json({ message: "Email, password, and first name are required" });
      }

      const user = await registerUser(email, password, firstName, lastName);
      
      // Set session
      (req.session as any).userId = user.id;
      
      res.status(201).json({ 
        message: "User registered successfully",
        user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName }
      });
    } catch (error: any) {
      console.error("Registration error:", error);
      res.status(400).json({ message: error.message || "Registration failed" });
    }
  });

  app.post('/api/auth/login', async (req: any, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }

      const user = await loginUser(email, password);
      
      // Set session
      (req.session as any).userId = user.id;
      
      res.json({ 
        message: "Login successful",
        user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName }
      });
    } catch (error: any) {
      console.error("Login error:", error);
      res.status(401).json({ message: error.message || "Login failed" });
    }
  });

  app.post('/api/auth/logout', (req: any, res) => {
    req.session?.destroy((err: any) => {
      if (err) {
        console.error("Logout error:", err);
        return res.status(500).json({ message: "Logout failed" });
      }
      res.json({ message: "Logout successful" });
    });
  });

  // Auth routes (supporting both local and Replit auth)
  app.get('/api/auth/user', async (req: any, res) => {
    try {
      // Try local auth first
      const localUser = await getAuthenticatedUser(req);
      if (localUser) {
        return res.json(localUser);
      }

      // Fall back to Replit auth if available
      if (req.isAuthenticated && req.isAuthenticated() && (req.user as any)?.claims?.sub) {
        const userId = (req.user as any).claims.sub;
        const user = await storage.getUser(userId);
        return res.json(user);
      }

      res.status(401).json({ message: "Unauthorized" });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  // Products API
  app.get("/api/products", async (req, res) => {
    try {
      const { category } = req.query;
      
      if (category && typeof category === 'string') {
        const products = await storage.getProductsByCategory(category);
        res.json(products);
      } else {
        const products = await storage.getAllProducts();
        res.json(products);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await storage.getProduct(id);
      
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      
      res.json(product);
    } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ error: 'Failed to fetch product' });
    }
  });

  app.post("/api/products", async (req, res) => {
    try {
      const productData = insertProductSchema.parse(req.body);
      const product = await storage.createProduct(productData);
      res.status(201).json(product);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Failed to create product' });
    }
  });

  // Helper function to get user ID from both auth systems
  const getUserId = async (req: any) => {
    // Check local auth first
    const localUserId = (req.session as any)?.userId;
    if (localUserId) {
      return localUserId;
    }
    
    // Fall back to Replit auth
    if (req.isAuthenticated && req.isAuthenticated() && (req.user as any)?.claims?.sub) {
      return (req.user as any).claims.sub;
    }
    
    // Fall back to session ID for guests
    return req.sessionID;
  };

  // Cart API with session-based storage (supports both authenticated and guest users)
  app.get("/api/cart", async (req, res) => {
    try {
      const userId = await getUserId(req);
      const cartItems = await storage.getCartItems(userId);
      res.json(cartItems);
    } catch (error) {
      console.error('Error fetching cart:', error);
      res.status(500).json({ error: 'Failed to fetch cart' });
    }
  });

  app.post("/api/cart", async (req, res) => {
    try {
      const userId = await getUserId(req);
      const { productId, quantity = 1 } = req.body;
      
      const cartItemData = insertCartItemSchema.parse({
        userId,
        productId,
        quantity
      });
      
      const cartItem = await storage.addToCart(cartItemData);
      res.json(cartItem);
    } catch (error) {
      console.error('Error adding to cart:', error);
      res.status(500).json({ error: 'Failed to add to cart' });
    }
  });

  app.put("/api/cart/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { quantity } = req.body;
      const userId = await getUserId(req);
      
      const cartItem = await storage.updateCartItemQuantity(id, userId, quantity);
      if (!cartItem) {
        return res.status(404).json({ error: 'Cart item not found' });
      }
      
      res.json(cartItem);
    } catch (error) {
      console.error('Error updating cart item:', error);
      res.status(500).json({ error: 'Failed to update cart item' });
    }
  });

  app.delete("/api/cart/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const userId = await getUserId(req);
      await storage.removeFromCart(id, userId);
      res.json({ success: true });
    } catch (error) {
      console.error('Error removing cart item:', error);
      res.status(500).json({ error: 'Failed to remove cart item' });
    }
  });

  app.delete("/api/cart", async (req, res) => {
    try {
      const userId = await getUserId(req);
      await storage.clearCart(userId);
      res.json({ success: true });
    } catch (error) {
      console.error('Error clearing cart:', error);
      res.status(500).json({ error: 'Failed to clear cart' });
    }
  });

  // Stripe Payment Routes
  app.post("/api/create-payment-intent", async (req, res) => {
    try {
      if (!process.env.STRIPE_SECRET_KEY) {
        return res.status(500).json({ 
          error: "Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment." 
        });
      }

      const Stripe = require('stripe');
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2023-10-16",
      });

      const { amount } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
      });
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      console.error('Stripe payment intent error:', error);
      res
        .status(500)
        .json({ error: "Error creating payment intent: " + error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
