# FORTEVA.TECH - Ultra-High-End Website

A premium, futuristic website for FORTEVA.TECH - an AI/Tech startup. Built with cutting-edge technologies and featuring interactive 3D elements, smooth animations, and a dark-mode-first design.

## 🚀 Features

### Design & Aesthetics
- **Futuristic × Elegant × Minimal × Interactive** design
- Dark-mode-first with custom violet-to-blush gradient palette
- Glassmorphism and neomorphism effects
- Ultra-smooth scroll and parallax effects
- Custom typography with Space Grotesk and Inter fonts

### Interactive Elements
- **3D WebGL Models**: Interactive brain model and floating cube using Three.js
- **GSAP Animations**: Staggered animations and scroll-triggered effects
- **Framer Motion**: Smooth component transitions and hover effects
- **Mouse-follow Parallax**: Dynamic background gradients that follow cursor
- **Floating Particles**: Animated background elements

### Sections
1. **Hero Section**: Fullscreen with 3D brain model and animated tagline
2. **What We Offer**: Horizontally scrolling service cards
3. **Subscription Tools**: Interactive flip cards with live demo buttons
4. **Custom Projects**: 3D carousel with conversational form
5. **Why FORTEVA**: Dynamic counters and floating cube
6. **Pricing**: Neon card layout with hover animations
7. **Footer**: Contact form, social links, and newsletter signup

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🎨 Color Palette

```css
--forteva-base: #190019      /* Header/footer background */
--forteva-card: #2B124C      /* Cards, buttons hover */
--forteva-accent: #522B5B    /* Text highlight/accent */
--forteva-button: #854F6C    /* Background shapes/buttons */
--forteva-text: #DFB6B2      /* Text, secondary highlights */
--forteva-cta: #FBE4D8       /* Call-to-actions, headers */
```

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd forteva-tech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
forteva-tech/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/
│   │   └── Button.tsx       # Reusable button component
│   ├── 3d/
│   │   └── BrainModel.tsx   # 3D brain model component
│   └── sections/
│       ├── HeroSection.tsx
│       ├── WhatWeOfferSection.tsx
│       ├── SubscriptionToolsSection.tsx
│       ├── CustomProjectsSection.tsx
│       ├── WhyFortevaSection.tsx
│       ├── PricingSection.tsx
│       └── Footer.tsx
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🎯 Key Components

### Hero Section
- Interactive 3D brain model with orbit controls
- Animated floating particles
- Mouse-follow parallax background
- Gradient text effects

### Subscription Tools
- Flip card animations on hover
- Live demo buttons
- Category badges and pricing display
- Glassmorphism effects

### Custom Projects
- 3D carousel with smooth transitions
- ChatGPT-style conversational form
- Quick response buttons
- Real-time form validation

### Why FORTEVA
- Dynamic counters with smooth animations
- 3D floating cube with wireframe effect
- Feature list with staggered animations
- In-view triggers for performance

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  'forteva': {
    'base': '#190019',
    'card': '#2B124C',
    // ... other colors
  }
}
```

### Animations
Customize animations in `globals.css`:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

### 3D Models
Replace the brain model in `components/3d/BrainModel.tsx` with your own GLB files.

## 📱 Responsive Design

- Mobile-first approach
- Optimized for ultra-wide screens
- Touch-friendly interactions
- Adaptive 3D camera controls

## 🔧 Performance Optimizations

- Lazy loading for 3D components
- Compressed textures and models
- Optimized animations with `will-change`
- Efficient re-renders with React.memo
- Image optimization with Next.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎯 Future Enhancements

- [ ] AI-powered chatbot integration
- [ ] Real-time collaboration features
- [ ] Advanced 3D model loading
- [ ] PWA capabilities
- [ ] Multi-language support
- [ ] Advanced analytics dashboard

---

**Built with ❤️ for FORTEVA.TECH** 