# Trinoxor Website Setup Guide

A comprehensive guide to set up the Trinoxor website project on a new computer.

## 📋 Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)
- **Code Editor** (VS Code recommended) - [Download here](https://code.visualstudio.com/)

## 🚀 Quick Setup

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/Lebanglibby/trinoxor_web.git

# Navigate to project directory
cd trinoxor_web
```

### 2. Install Dependencies

```bash
# Install all project dependencies
npm install

# Or if you prefer yarn
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```bash
# Copy the example environment file
cp .env.local.example .env.local
```

Edit `.env.local` and add your configuration:

```env
# Firebase Configuration (Optional - for future features)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Email Configuration (Already configured)
# Note: Email functionality is pre-configured and working
```

### 4. Run the Development Server

```bash
# Start the development server
npm run dev

# Or with yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📧 Email Configuration

The contact form email functionality is **already configured** and working with:

- **SMTP Provider**: Gmail
- **Sender Email**: lebanggarebantsi@gmail.com
- **Recipient Email**: trinoxorbw@gmail.com
- **App Password**: Pre-configured (secure)

**No additional email setup required** - the contact form will work immediately.

## 🏗️ Project Structure

```
trinoxor_web/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── demos/             # Interactive demos
│   ├── layout/            # Layout components
│   └── sections/          # Page sections
├── lib/                   # Utility libraries
│   ├── email.ts           # Email configuration
│   ├── firebase.ts        # Firebase config
│   └── theme.ts           # MUI theme
├── public/                # Static assets
├── types/                 # TypeScript types
└── utils/                 # Helper functions
```

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 🎨 Key Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Contact Form** - Working email functionality
- ✅ **Modern UI** - Material-UI components
- ✅ **SEO Optimized** - Meta tags and structured data
- ✅ **TypeScript** - Type safety throughout
- ✅ **Professional Email Templates** - Enhanced HTML emails

## 🚀 Deployment Options

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Import the project
3. Deploy automatically

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`

### Manual Deployment

```bash
# Build the project
npm run build

# The built files will be in the .next folder
```

## 🔧 Customization

### Brand Colors

The project uses these brand colors (defined in `lib/theme.ts`):

- **Primary Blue**: #1E3A8A
- **Secondary Purple**: #8B5CF6
- **Accent Orange**: #F59E0B

### Contact Information

Update contact details in:
- `components/layout/Footer.tsx`
- `app/contact/page.tsx`

### Content Updates

- **Homepage**: `app/page.tsx`
- **About Page**: `app/about/page.tsx`
- **Services**: `app/services/page.tsx`
- **Portfolio**: `app/portfolio/page.tsx`

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🐛 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Use a different port
   npm run dev -- -p 3001
   ```

2. **Module not found errors**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors**
   ```bash
   # Run type checking
   npm run type-check
   ```

### Email Issues

If contact form emails aren't working:
1. Check your internet connection
2. Verify the API route is accessible at `/api/contact`
3. Check browser console for errors

## 📞 Support

For technical support or questions:

- **Email**: info@trinoxor.com
- **Phone**: (+267) 78080590
- **Repository**: [GitHub Issues](https://github.com/Lebanglibby/trinoxor_web/issues)

## 📄 License

This project is private and proprietary to Trinoxor.

---

**Trinoxor** - Secure • Scalable • Seamless

*Last updated: ${new Date().toLocaleDateString()}*