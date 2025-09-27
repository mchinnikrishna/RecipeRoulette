import bcrypt from "bcryptjs";
import { storage } from "./storage";
import type { Request, Response, NextFunction } from "express";

export interface LocalAuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    profileImageUrl?: string;
  };
}

export async function registerUser(email: string, password: string, firstName: string, lastName?: string) {
  // Check if user already exists
  const existingUser = await storage.getUserByEmail(email);
  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  // Hash password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Create username from email (part before @)
  const username = email.split('@')[0];

  // Create user with hashed password
  const userId = crypto.randomUUID();
  await storage.createUser({
    id: userId,
    username,
    email,
    password: hashedPassword,
    firstName,
    lastName,
  });

  return { id: userId, username, email, firstName, lastName };
}

export async function loginUser(email: string, password: string) {
  // Find user by email
  const user = await storage.getUserByEmail(email);
  if (!user || !user.password) {
    throw new Error("Invalid email or password");
  }

  // Verify password
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new Error("Invalid email or password");
  }

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    profileImageUrl: user.profileImageUrl,
  };
}

export const requireAuth = (req: LocalAuthRequest, res: Response, next: NextFunction) => {
  if (!req.session || !(req.session as any).userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

export const getAuthenticatedUser = async (req: LocalAuthRequest) => {
  const userId = (req.session as any)?.userId;
  if (!userId) {
    return null;
  }

  const user = await storage.getUser(userId);
  return user;
};