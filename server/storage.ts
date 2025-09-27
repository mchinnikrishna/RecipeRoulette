import { users, products, cartItems, type User, type UpsertUser, type Product, type InsertProduct, type CartItem, type InsertCartItem } from "@shared/schema";
import { db } from "./db";
import { eq, and, sql } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods (required for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  createUser(user: UpsertUser): Promise<User>;
  getUserByEmail(email: string): Promise<User | undefined>;
  
  // Product methods
  getAllProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Cart methods
  getCartItems(userId: string): Promise<any[]>;
  addToCart(cartItem: InsertCartItem): Promise<CartItem>;
  updateCartItemQuantity(id: string, userId: string, quantity: number): Promise<CartItem | undefined>;
  removeFromCart(id: string, userId: string): Promise<void>;
  clearCart(userId: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // User methods (required for Replit Auth)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  async createUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .returning();
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    return user || undefined;
  }

  // Product methods
  async getAllProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProduct(id: string): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product || undefined;
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return await db.select().from(products).where(eq(products.category, category));
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const [product] = await db
      .insert(products)
      .values(insertProduct)
      .returning();
    return product;
  }

  // Cart methods
  async getCartItems(userId: string): Promise<any[]> {
    return await db
      .select({
        id: cartItems.id,
        quantity: cartItems.quantity,
        product: {
          id: products.id,
          name: products.name,
          price: products.price,
          imageUrl: products.imageUrl,
          category: products.category,
        },
      })
      .from(cartItems)
      .innerJoin(products, eq(cartItems.productId, products.id))
      .where(eq(cartItems.userId, userId));
  }

  async addToCart(cartItem: InsertCartItem): Promise<CartItem> {
    // Check if item already exists in cart
    const existingItem = await db
      .select()
      .from(cartItems)
      .where(and(eq(cartItems.userId, cartItem.userId), eq(cartItems.productId, cartItem.productId)))
      .limit(1);

    if (existingItem.length > 0) {
      // Update existing item quantity
      const [item] = await db
        .update(cartItems)
        .set({ quantity: (existingItem[0].quantity || 0) + (cartItem.quantity || 1) })
        .where(eq(cartItems.id, existingItem[0].id))
        .returning();
      return item;
    } else {
      // Insert new item
      const [item] = await db
        .insert(cartItems)
        .values(cartItem)
        .returning();
      return item;
    }
  }

  async updateCartItemQuantity(id: string, userId: string, quantity: number): Promise<CartItem | undefined> {
    const [cartItem] = await db
      .update(cartItems)
      .set({ quantity })
      .where(and(eq(cartItems.id, id), eq(cartItems.userId, userId)))
      .returning();
    return cartItem || undefined;
  }

  async removeFromCart(id: string, userId: string): Promise<void> {
    await db.delete(cartItems).where(and(eq(cartItems.id, id), eq(cartItems.userId, userId)));
  }

  async clearCart(userId: string): Promise<void> {
    await db.delete(cartItems).where(eq(cartItems.userId, userId));
  }
}

export const storage = new DatabaseStorage();
