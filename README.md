# SwiftPe - Fintech Landing Page

A modern, production-ready Next.js 14 application for SwiftPe, a fintech platform that enables instant USDC to INR transfers.

## 🚀 Features

- **Next.js 14** with App Router and static export support
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom design system
- **Framer Motion** for smooth animations
- **Radix UI** components for accessibility
- **Responsive Design** optimized for all devices
- **SEO Optimized** with proper meta tags and structured data
- **Production Ready** with ESLint, TypeScript, and build optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Build Tool**: Next.js built-in bundler

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd swiftpe-fintech-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Static Export (for hosting on CDN/static hosts)
```bash
npm run export
```

The static files will be generated in the `out` directory.

### Start Production Server
```bash
npm run start
```

## 📁 Project Structure

```
├── pages/                 # Next.js pages
│   ├── _app.tsx          # App component
│   ├── _document.tsx     # Document component
│   └── index.tsx         # Home page
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   ├── figma/       # Figma-specific components
│   │   └── *.tsx        # Page-specific components
│   └── styles/          # Global styles
│       └── globals.css  # Global CSS with Tailwind
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Styling

The project uses Tailwind CSS with a custom design system:

- **Colors**: Custom color palette with CSS variables
- **Typography**: Responsive typography scale
- **Components**: Styled with Tailwind utilities
- **Animations**: Custom animations with Framer Motion
- **Dark Mode**: Ready for dark mode implementation

## 🧩 Components

### UI Components
- All Radix UI components are properly configured
- Custom styling with Tailwind CSS
- TypeScript support with proper types
- Accessibility features built-in

### Page Components
- **Header**: Navigation with mobile menu
- **HeroSection**: Main landing section with CTA
- **HowItWorksSection**: Step-by-step process
- **FeaturesSection**: Key features showcase
- **CTASection**: Call-to-action section
- **Footer**: Site footer with links

## 🔧 Configuration

### Next.js Configuration
- Static export enabled for CDN deployment
- Image optimization configured
- TypeScript and ESLint integration

### Tailwind Configuration
- Custom color system
- Extended theme with animations
- Responsive breakpoints
- Plugin support for animations

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Optimized images and assets

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Deploy automatically on push to main branch

### Static Hosting (Netlify, GitHub Pages, etc.)
1. Run `npm run export`
2. Upload the `out` directory to your hosting provider

### Traditional Hosting
1. Run `npm run build`
2. Deploy the `.next` directory with a Node.js server

## 🔍 SEO Features

- Proper meta tags and Open Graph data
- Structured data for search engines
- Optimized images with alt text
- Semantic HTML structure
- Fast loading times

## 🛡️ Security

- No sensitive data exposed
- Secure headers configuration
- Input validation and sanitization
- HTTPS ready

## 📊 Performance

- Optimized bundle size
- Code splitting
- Image optimization
- Lazy loading
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

Built with ❤️ using Next.js 14 and modern web technologies.