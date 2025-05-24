# Pizza Dashboard

A modern web application for managing pizza orders with real-time updates and a beautiful user interface.

## Features

- 🔐 Google Authentication
- 📊 Interactive Dashboard
- 📋 Order Management
- 🔄 Real-time Updates
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive Design
- ⚡ Fast Page Transitions
- 🔄 Loading States

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- Google Cloud Platform account (for OAuth credentials)

## Environment Setup

1. Create a `.env.local` file in the root directory with the following variables:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

2. To get Google OAuth credentials:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project
   - Enable Google OAuth API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd pizza-dashboard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploying to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [Vercel](https://vercel.com) and create a new project

3. Import your repository

4. Configure environment variables in Vercel:

   - Go to Project Settings > Environment Variables
   - Add the following variables:
     ```
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     NEXTAUTH_SECRET=your_nextauth_secret
     NEXTAUTH_URL=your_deployment_url
     ```

5. Update Google OAuth settings:

   - Go to Google Cloud Console
   - Add your deployment URL to authorized redirect URIs:
     ```
     https://your-domain.vercel.app/api/auth/callback/google
     ```

6. Deploy your application

### Common Deployment Issues

#### Server-Side Exception Error

If you encounter "Application error: a server-side exception has occurred", check the following:

1. Environment Variables:

   - Verify all required environment variables are set in your deployment platform
   - Ensure NEXTAUTH_URL matches your deployment URL
   - Check if NEXTAUTH_SECRET is properly set

2. Google OAuth Configuration:

   - Verify the authorized redirect URI includes your deployment URL
   - Check if GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are correct
   - Ensure the Google OAuth API is enabled in your Google Cloud Console

3. Build Configuration:

   - Check if your `next.config.js` is properly configured
   - Verify all dependencies are listed in `package.json`
   - Ensure you're using compatible versions of Next.js and React

4. Debugging Steps:
   - Check deployment logs in your hosting platform
   - Verify the build process completes successfully
   - Test the application locally with production build:
     ```bash
     npm run build
     npm run start
     ```

## Project Structure

```
pizza-dashboard/
├── app/
│   ├── api/              # API routes
│   ├── auth/             # Authentication pages
│   ├── components/       # Reusable components
│   ├── dashboard/        # Dashboard pages
│   └── layout.tsx        # Root layout
├── public/              # Static files
└── package.json         # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features in Detail

### Authentication

- Secure Google OAuth integration
- Protected routes
- Session management
- Loading states during authentication

### Dashboard

- Overview of all orders
- Real-time updates
- Interactive charts and statistics
- Responsive design for all devices

### Order Management

- View all orders in a sortable table
- Filter orders by status
- Sort by different columns
- Status updates with color-coded badges

### UI/UX Features

- Smooth page transitions
- Loading spinners for better UX
- Responsive design
- Modern and clean interface
- Dark mode support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email [your-email] or open an issue in the repository.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
