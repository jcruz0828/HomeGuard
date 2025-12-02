# CURSER - Smart Rental Security System

A premium Next.js 14 landing page for CURSER, an AI-powered security system built for property managers, Airbnb hosts, and home enthusiasts.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS** with custom CURSER color palette
- **shadcn/ui** components
- **lucide-react** icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /components        # Reusable components (Navbar, Footer, ProductCard)
  /ui               # shadcn/ui components
  /page.tsx         # Home page
  /products         # Products page
  /solutions        # Solutions page
  /contact          # Contact page
/lib
  utils.ts          # Utility functions
/styles
  globals.css       # Global styles and Tailwind directives
```

## Features

- ✅ Fully responsive design
- ✅ Modern, premium UI with custom color palette
- ✅ Mobile-friendly navigation with Sheet component
- ✅ Product showcase with hover effects
- ✅ Hardware specifications section
- ✅ Contact form
- ✅ SEO-friendly metadata

## Color Palette

The custom CURSER color palette is defined in `tailwind.config.ts`:

- `curser-bg`: Dark background (#0f1117)
- `curser-bgLight`: Lighter background (#1a1d25)
- `curser-card`: Card background (#1f242d)
- `curser-primary`: Emerald green (#10b981)
- `curser-accent`: Cyan (#22d3ee)
- `curser-text`: Light text (#f1f5f9)
- `curser-subtle`: Subtle text (#94a3b8)

## Build for Production

```bash
npm run build
npm start
```

## License

© 2025 CURSER. All rights reserved.

