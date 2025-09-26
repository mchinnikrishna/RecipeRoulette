# VintageThreads E-commerce Platform

## Overview

VintageThreads is a modern e-commerce platform specializing in premium vintage clothing. The application features a curated collection of authentic vintage pieces including jackets, t-shirts, and shoes, with a focus on dark mode aesthetics and neon accent colors for a contemporary tech-forward appearance.

The platform is built as a full-stack web application with a React frontend and Express.js backend, featuring product browsing, category filtering, shopping cart functionality, and a responsive design optimized for both desktop and mobile experiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with support for product detail pages and cart functionality
- **State Management**: TanStack Query (React Query) for server state management and caching, providing optimistic updates and background synchronization
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable interface elements
- **Styling**: Tailwind CSS with custom design system featuring dark mode theming and neon accent colors
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations and schema management
- **Session Management**: Express sessions with PostgreSQL storage for cart persistence across browser sessions
- **API Design**: RESTful endpoints for products, cart operations, and user management with JSON responses

### Data Storage Solutions
- **Primary Database**: PostgreSQL for relational data storage with support for products, users, cart items, and sessions
- **Database Connection**: Neon serverless PostgreSQL with connection pooling for scalability
- **Schema Management**: Drizzle Kit for database migrations and schema versioning
- **Session Storage**: PostgreSQL-based session store using connect-pg-simple for cart persistence

### Authentication and Authorization
- **Session-based Authentication**: Express sessions with secure cookie configuration
- **User Management**: User table with email-based identification and profile management
- **Cart Isolation**: Session-based cart isolation ensuring user data privacy
- **Security**: Environment-based session secrets and secure cookie settings for production deployment

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with automatic scaling and connection pooling
- **Database URL**: Environment variable configuration for flexible deployment across development and production

### UI and Component Libraries
- **Radix UI**: Comprehensive primitive components for accessibility and customization
- **Shadcn/ui**: Pre-built component library with consistent design patterns
- **Lucide React**: Icon library for consistent iconography throughout the application

### Development and Build Tools
- **TypeScript**: Type checking and development tooling for both frontend and backend
- **ESBuild**: Fast bundling for production server builds
- **PostCSS**: CSS processing with Tailwind CSS integration
- **Replit Integration**: Development environment optimization with runtime error handling

### Frontend Libraries
- **TanStack Query**: Server state management with caching, background updates, and optimistic UI
- **React Hook Form**: Form handling with validation using Zod schemas
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Type-safe variant handling for component styling

### Asset Management
- **Static Assets**: Local image storage in attached_assets directory
- **Font Loading**: Google Fonts integration for typography (Inter, DM Sans, Geist Mono)
- **Image Optimization**: Vite-based asset processing and optimization