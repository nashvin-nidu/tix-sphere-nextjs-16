# TixSphere 🎫

**The Hub for Every Dev Event You Can't Miss**

A modern event discovery and booking platform built with Next.js 16, tailored for developers to find and register for hackathons, meetups, and conferences—all in one centralized location.

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8)
![PostHog](https://img.shields.io/badge/PostHog-Analytics-orange)

## ✨ Features


- **📅 Event Discovery**: Browse curated developer events including hackathons, meetups, and conference
- **🎟️ Event Booking**: Simple email-based registration system with duplicate prevention
- **📊 Analytics**: PostHog integration for tracking user behavior and event engagement
- **🗃️ MongoDB Database**: Robust data storage with Mongoose ODM for events and bookings
- **🖼️ Image Management**: Cloudinary integration for optimized event imagery
- **🎨 Modern UI**: Stunning visual effects with WebGL-powered light rays animation
- **📱 Responsive Design**: Mobile-first approach with TailwindCSS 4
- **⚡ Performance**: Advanced caching strategies with Next.js 16 cache APIs
- **🔍 Event Details**: Comprehensive event pages with agenda, location, organizer info, and tags
- **🌐 Multi-mode Events**: Support for online, offline, and hybrid event formats

## 🛠️ Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router and advanced caching
- **[React 19.2](https://react.dev/)** - Latest React with server components
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[TailwindCSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[OGL](https://github.com/oframe/ogl)** - WebGL library for 3D effects

### Backend & Database
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[Mongoose](https://mongoosejs.com/)** - Elegant MongoDB object modeling
- **[Cloudinary](https://cloudinary.com/)** - Cloud-based image and video management

### Analytics & Monitoring
- **[PostHog](https://posthog.com/)** - Product analytics and event tracking

### Utilities
- **[Class Variance Authority](https://cva.style/)** - Type-safe component variants
- **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Conditional className utilities

## 📁 Project Structure

```
jsm-tixshere-nextjs/
├── app/
│   ├── api/
│   │   └── events/         # Event API endpoints
│   ├── events/
│   │   └── [slug]/         # Dynamic event detail pages
│   ├── globals.css         # Global styles with custom animations
│   ├── layout.tsx          # Root layout with PostHog provider
│   └── page.tsx            # Homepage with featured events
├── components/
│   ├── BookEvent.tsx       # Event booking form component
│   ├── EventCard.tsx       # Event card for listings
│   ├── EventDetails.tsx    # Detailed event view component
│   ├── ExploreBtn.tsx      # Animated explore button
│   ├── LightRays.tsx       # WebGL light effects
│   └── NavBar.tsx          # Navigation component
├── database/
│   ├── event.model.ts      # Event schema and validation
│   ├── booking.model.ts    # Booking schema
│   └── index.ts            # Database exports
├── lib/
│   ├── actions/            # Server actions for events and bookings
│   ├── mongodb.ts          # MongoDB connection handler
│   ├── constants.ts        # Application constants
│   └── utils.ts            # Utility functions
└── public/
    └── icons/              # SVG icons and assets
```

## 🚀 Getting Started
### Prerequisites

- Node.js 20+ and npm/pnpm/yarn/bun
- MongoDB database (local or cloud)
- Cloudinary account (for image uploads)
- PostHog account (for analytics)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jsm-tixshere-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # MongoDB
   MONGODB_URI=your_mongodb_connection_string
   
   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   
   # PostHog Analytics
   NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
   NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
   
   # Base URL
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## 🗄️ Database Models

### Event Model

The Event model includes comprehensive fields for managing developer events:

- **Basic Info**: Title, slug, description, overview
- **Media**: Image URL (Cloudinary)
- **Location**: Venue, location, mode (online/offline/hybrid)
- **Timing**: Date (ISO format), time (24-hour format)
- **Details**: Audience, agenda (array), organizer
- **Categorization**: Tags for filtering and search
- **Metadata**: Auto-generated createdAt, updatedAt timestamps

**Features:**
- Auto-generates URL-friendly slugs from titles
- Validates and normalizes date/time formats
- Indexed for fast queries by date and tags
- Supports 12-hour and 24-hour time input

### Booking Model

Manages event registrations with:

- Event reference (MongoDB ObjectId)
- User email
- Event slug for quick lookups
- Duplicate booking prevention
- Timestamps for tracking

## 🎨 UI Highlights


### Event Cards
Beautiful event cards displaying:
- Event imagery
- Date and time badges
- Location and mode indicators
- Tag chips for categorization
- Quick action buttons

## 📊 Analytics

PostHog tracks key user interactions:
- Page views and navigation
- Event booking conversions
- User engagement metrics
- Custom event captures

Client-side instrumentation via `instrumentation-client.ts` ensures accurate tracking.

## 🔧 API Routes

### GET `/api/events`
Fetches all events with caching:
- Cache lifetime: 1 hour
- Cache tag: `event-cache`
- Returns sorted events (newest first)

### Environment Variables for Production

Ensure all environment variables are set:
- `MONGODB_URI` - Production MongoDB connection string
- `CLOUDINARY_*` - Cloudinary credentials
- `NEXT_PUBLIC_POSTHOG_*` - PostHog analytics keys
- `NEXT_PUBLIC_BASE_URL` - Your production domain

## 🎯 Key Features Explained

### Event Slug Generation
Automatic URL-friendly slug creation from event titles with:
- Lowercase conversion
- Special character removal
- Hyphen-separated words
- Duplicate hyphen handling

### Time Format Normalization
Accepts both 12-hour (e.g., "2:30 PM") and 24-hour (e.g., "14:30") time formats, automatically converting to consistent 24-hour storage format.

### Duplicate Booking Prevention
Email addresses are validated before booking creation to prevent users from registering multiple times for the same event

### Advanced Caching
Utilizes Next.js 16's new cache APIs:
- `cacheLife("hours")` for event listings
- `cacheTag("event-cache")` for selective invalidation
- Optimized performance with reduced database queries
