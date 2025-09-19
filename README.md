# AutoAgent X - Modern Business Website

A cutting-edge business website built with Next.js, React, TypeScript, and Tailwind CSS. Features modern animations, responsive design, and optimized performance.

## 🚀 Features

- **Modern Design**: Beautiful, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for speed with Next.js and modern web technologies
- **SEO Optimized**: Built-in SEO optimization with proper meta tags and structured data
- **Type Safe**: Built with TypeScript for better development experience
- **Animations**: Smooth animations powered by Framer Motion
- **Contact Form**: Interactive contact form with validation
- **Portfolio**: Showcase of projects and work
- **Services**: Detailed services pages
- **About**: Company information and team showcase

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fsite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📁 Project Structure

```
src/
├── app/                 # App Router pages
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── portfolio/      # Portfolio page
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
└── components/         # Reusable components
    ├── About.tsx       # About section
    ├── Footer.tsx      # Footer component
    ├── Header.tsx      # Header/Navigation
    ├── Hero.tsx        # Hero section
    └── Services.tsx    # Services section
```

## 🎨 Customization

### Colors
The website uses a blue-to-purple gradient theme. You can customize colors in:
- `tailwind.config.js` for theme colors
- `src/app/globals.css` for custom CSS variables

### Content
Update content in the respective component files:
- Hero section: `src/components/Hero.tsx`
- Services: `src/components/Services.tsx`
- About: `src/components/About.tsx`
- Contact info: `src/app/contact/page.tsx`

### SEO
Update SEO metadata in:
- `src/app/layout.tsx` for global metadata
- Individual page files for page-specific metadata

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ⚡ Performance Features

- **Next.js App Router**: Latest Next.js features for optimal performance
- **Image Optimization**: Built-in Next.js image optimization
- **Code Splitting**: Automatic code splitting for faster loading
- **Static Generation**: Pre-rendered pages for better SEO and performance
- **Turbopack**: Fast bundler for development

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file for environment-specific variables:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email contact@autoagentx.com or create an issue in the repository.