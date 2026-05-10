# LeaseTeq - Car Leasing Landing Page

A modern, responsive landing page for a car leasing company built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Modern UI**: Dark theme with cyan accents inspired by automotive industry design patterns
- **Component-Based Architecture**: Reusable React components for easy maintenance
- **Performance Optimized**: Built with Next.js for fast loading and excellent SEO
- **Accessible**: Semantic HTML and ARIA-compliant components

## 📋 Sections

1. **Header/Navigation** - Fixed navigation with logo and menu links
2. **Hero Section** - Eye-catching headline with CTAs and key metrics
3. **Features** - 6 key benefits of LeaseTeq services
4. **Featured Cars** - Showcase of popular vehicle options with specs
5. **How It Works** - 4-step process explanation
6. **Pricing** - Three pricing tiers (Essential, Premium, Elite)
7. **Testimonials** - Social proof from satisfied customers
8. **Call-to-Action** - Final conversion opportunity
9. **Footer** - Links and company information

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **React**: 19.2.6

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The app will be available at `http://localhost:3000`

## 📁 Project Structure

```
├── pages/
│   ├── _app.tsx          # App wrapper with global styles
│   ├── _document.tsx     # HTML document structure
│   └── index.tsx         # Landing page
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features showcase
│   ├── FeaturedCars.tsx  # Car listings
│   ├── HowItWorks.tsx    # Process steps
│   ├── Pricing.tsx       # Pricing tiers
│   ├── Testimonials.tsx  # Customer reviews
│   ├── CTA.tsx           # Call to action
│   └── Footer.tsx        # Footer section
├── styles/
│   └── globals.css       # Global styles and CSS variables
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Design System

### Colors
- **Primary**: `#00d4ff` (Cyan)
- **Secondary**: `#1a1a2e` (Dark Blue)
- **Accent**: `#ff6b35` (Orange)
- **Dark**: `#0f0f1e` (Nearly Black)

### Components
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary action button
- `.gradient-text` - Gradient text effect

## 🚀 Deployment

To deploy to production:

```bash
npm run build
npm start
```

The project is ready to be deployed to any Node.js hosting platform (Vercel, Netlify, AWS, etc.)

## 📝 Customization

### Adding New Sections
1. Create a new component in `components/`
2. Import and add to `pages/index.tsx`

### Changing Colors
Update the colors in:
- `tailwind.config.js` - For Tailwind utility classes
- `styles/globals.css` - For CSS variables (`:root`)

### Modifying Content
Edit the data arrays and text within each component file.

## 🔧 Development Tips

- Hot reload is enabled - changes save automatically
- TypeScript provides type safety
- Tailwind CSS IntelliSense available with VS Code extension
- Check `npm run build` to catch any issues before deployment