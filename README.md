# Portfolio 2025 - Custom Animated Cursor

A modern Next.js portfolio website featuring a fully customizable animated cursor component built with Framer Motion and Tailwind CSS.

## 🚀 Features

### ✨ Custom Cursor Component
- **Smooth Animation**: Powered by Framer Motion with spring physics
- **Interactive Scaling**: Scales up 1.5x when hovering over clickable elements
- **Smart Detection**: Automatically detects buttons, links, and interactive elements
- **Mobile Responsive**: Hides on devices with screen width < 768px
- **Performance Optimized**: Uses `useMotionValue` and `requestAnimationFrame`
- **Mix Blend Mode**: Uses `mix-blend-difference` for visual contrast
- **Trailing Effect**: Subtle glow and trailing animation

### 🎯 Interactive Elements Detected
- `<a>` tags (links)
- `<button>` elements
- Elements with `role="button"`
- Elements with `.cursor-pointer` class
- Elements with `onclick` handlers
- Elements with `href` attributes

### 🎨 Customization Options
```tsx
<CustomCursor
  size={24}              // Size in pixels (default: 24)
  color="#f97316"        // Default color (default: orange)
  hoverColor="#fb923c"   // Hover state color (default: lighter orange)
  scaleOnHover={1.5}     // Scale multiplier on hover (default: 1.5)
  hideOnMobile={true}    // Hide on mobile devices (default: true)
/>
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 3+
- **Animations**: Framer Motion 10+
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Clone or use this repository**
```bash
git clone <repository-url>
cd portfolio-2025
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

## 🔧 Usage

### Basic Integration

The cursor is already integrated globally in `app/layout.tsx`:

```tsx
import CustomCursor from '@/components/CustomCursor'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hide-cursor">
      <body className="custom-cursor-active">
        {children}
        <CustomCursor />
      </body>
    </html>
  )
}
```

### Custom Configuration

```tsx
<CustomCursor
  size={32}
  color="#3b82f6"
  hoverColor="#60a5fa"
  scaleOnHover={2}
  hideOnMobile={false}
/>
```

### Making Elements Interactive

Add the `cursor-pointer` class to any element to trigger hover effects:

```tsx
<div className="cursor-pointer">
  This will trigger the cursor hover effect
</div>
```

## 🎨 Styling

The cursor uses these Tailwind classes and can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      accent: '#f97316',
      'accent-hover': '#fb923c',
    },
    animation: {
      'cursor-glow': 'cursor-glow 2s ease-in-out infinite alternate',
    },
  },
}
```

## 🔒 Accessibility

- The cursor doesn't interfere with keyboard navigation
- Uses `pointer-events-none` to avoid blocking interactions
- Maintains focus indicators for accessibility
- Gracefully degrades when JavaScript is disabled

## ⚡ Performance

- Uses `useMotionValue` for efficient animations
- Implements `requestAnimationFrame` for smooth tracking
- `MutationObserver` for dynamic content detection
- Optimized event listeners with proper cleanup
- No unnecessary re-renders

## 📱 Mobile Behavior

- Automatically detects screen width < 768px
- Completely hides cursor on mobile devices
- Responds to window resize events
- No performance impact on mobile devices

## 🏗️ Project Structure

```
portfolio-2025/
├── app/
│   ├── globals.css         # Global styles with Tailwind
│   ├── layout.tsx          # Root layout with cursor integration
│   └── page.tsx           # Homepage with demo elements
├── components/
│   └── CustomCursor.tsx   # Main cursor component
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎯 Component API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Cursor size in pixels |
| `color` | `string` | `'#f97316'` | Default cursor color |
| `hoverColor` | `string` | `'#fb923c'` | Cursor color on hover |
| `scaleOnHover` | `number` | `1.5` | Scale multiplier on hover |
| `hideOnMobile` | `boolean` | `true` | Hide cursor on mobile devices |

### TypeScript Interface

```tsx
interface CustomCursorProps {
  size?: number;
  color?: string;
  hoverColor?: string;
  scaleOnHover?: number;
  hideOnMobile?: boolean;
}
```

## 🚀 Deployment

This project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your repository
- **AWS**: Use AWS Amplify or EC2
- **Railway**: Connect your GitHub repository

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔮 Future Enhancements

- [ ] Color themes and presets
- [ ] Particle trail effects
- [ ] Sound effects on interactions
- [ ] Cursor shape variations
- [ ] Animation easing customization
- [ ] Accessibility preferences detection

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion** 