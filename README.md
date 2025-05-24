# Pizza Ordering System

## Overview

A modern pizza ordering system built with Next.js that allows users to browse the menu, place orders, and track their order status. The application features user authentication, real-time order tracking, and a responsive design for both desktop and mobile devices.

## Features

- 🔐 Google OAuth Authentication
- 🍕 Interactive Pizza Menu
- 🛒 Shopping Cart Functionality
- 📱 Responsive Design
- 📊 Order Tracking
- 🔄 Real-time Updates

## Tech Stack

- **Framework**: Next.js 14
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Prisma ORM
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **State Management**: React Context API
- **Form Handling**: React Hook Form
- **Validation**: Zod

## Prerequisites

- Node.js 18.x or later
- MongoDB database
- Google OAuth credentials

## Local Development Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd pizza-ordering-system
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root directory with the following variables:

   ```env
   # Database
   DATABASE_URL="your_mongodb_connection_string"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your_nextauth_secret"

   # Google OAuth
   GOOGLE_CLIENT_ID="your_google_client_id"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"
   ```

4. **Google OAuth Setup**

   - Go to the [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select an existing one
   - Enable the Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (for development)
     - `https://your-production-domain.com/api/auth/callback/google` (for production)
   - Copy the Client ID and Client Secret to your `.env.local` file

5. **Database Setup**

   - Create a MongoDB database (local or Atlas)
   - Update the `DATABASE_URL` in your `.env.local` file
   - Run Prisma migrations:
     ```bash
     npx prisma generate
     npx prisma db push
     ```

6. **Run the development server**

   ```bash
   npm run dev
   ```

7. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Production Deployment

1. **Environment Variables**

   - Set up the same environment variables in your hosting platform (e.g., Vercel)
   - Update `NEXTAUTH_URL` to your production domain

2. **Build and Deploy**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
├── app/
│   ├── api/           # API routes
│   ├── auth/          # Authentication pages
│   ├── dashboard/     # Dashboard pages
│   └── layout.tsx     # Root layout
├── components/        # Reusable components
├── lib/              # Utility functions
├── prisma/           # Database schema
└── public/           # Static assets
```

## Assumptions and Challenges

### Assumptions

- Users have a Google account for authentication
- MongoDB is available for data storage
- Users have a modern web browser with JavaScript enabled

### Challenges Faced

1. **Real-time Updates**: Implemented a polling mechanism for order status updates
2. **Mobile Responsiveness**: Created a responsive design with a mobile-first approach
3. **State Management**: Used React Context for global state management
4. **Authentication Flow**: Configured NextAuth.js with Google OAuth
5. **Database Schema**: Designed an efficient schema for orders and user data

## Third-Party Libraries

- `@heroicons/react`: Icon library
- `@prisma/client`: Database ORM
- `react-hook-form`: Form handling
- `zod`: Schema validation
- `clsx`: Conditional class name utility
- `date-fns`: Date formatting and manipulation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
