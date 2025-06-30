# SalonSync Landing Page

A sleek, responsive landing page for SalonSync - a smart booking platform for barbers and stylists. Built with React, Tailwind CSS, and modern web technologies.

## 🎨 Design Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Brand Colors**: Red primary, white secondary, charcoal gray and off-black backgrounds
- **Interactive Elements**: Hover effects, smooth scrolling, and engaging animations
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## 🚀 Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **React Router** - Client-side routing
- **PostCSS** - CSS processing

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation and logo
│   ├── Hero.jsx        # Main hero section
│   ├── HowItWorks.jsx  # Process explanation
│   ├── SmartBooking.jsx # AI chatbot section
│   ├── FeatureShowcase.jsx # Features for clients/barbers
│   ├── MobileAppTeaser.jsx # Mobile app preview
│   ├── Testimonials.jsx # Customer testimonials
│   ├── FAQ.jsx         # Frequently asked questions
│   ├── Footer.jsx      # Footer with links
│   └── ChatbotModal.jsx # Dify chatbot modal
├── assets/             # Static assets
│   └── logo.svg        # SalonSync logo
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles and Tailwind
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SalonSync
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎯 Key Features

### 1. Header Navigation
- Fixed header with logo and navigation
- Mobile-responsive hamburger menu
- Smooth scroll to sections
- Chat with SyncBot integration

### 2. Hero Section
- Bold headline with gradient text
- Dual CTA buttons for clients and barbers
- Social proof statistics
- Animated decorative elements

### 3. How It Works
- Two-column layout (Clients vs Barbers)
- Step-by-step process with icons
- Numbered progression indicators

### 4. Smart Booking (AI Integration)
- SyncBot chatbot showcase
- Mock chat interface
- AI features and benefits
- Performance statistics

### 5. Feature Showcase
- Split layout for different user types
- Feature cards with icons
- Hover animations and effects

### 6. Mobile App Teaser
- Coming soon announcement
- App store badges (disabled)
- Email waitlist signup
- Mobile features preview

### 7. Testimonials
- Interactive slider with navigation
- Star ratings and user avatars
- Category indicators (Client/Barber)
- Dot navigation

### 8. FAQ Section
- Accordion-style questions
- Category filtering
- Smooth expand/collapse animations

### 9. Footer
- Comprehensive link organization
- Social media links
- Contact information
- Brand tagline

## 🤖 Dify Chatbot Integration

The landing page includes a placeholder for Dify chatbot integration. To add your chatbot:

1. Replace the placeholder in `ChatbotModal.jsx`
2. Add your Dify iframe embed code
3. Customize the styling to match your brand

```jsx
// Example Dify integration
<iframe 
  src="https://your-dify-chatbot-url.com"
  width="100%"
  height="400"
  frameBorder="0"
/>
```

## 🎨 Customization

### Colors
The color palette is defined in `tailwind.config.js`:

```javascript
colors: {
  'salon-red': '#DC2626',
  'salon-red-dark': '#B91C1C',
  'salon-charcoal': '#374151',
  'salon-off-black': '#1F2937',
  'salon-silver': '#E5E7EB',
  'salon-light': '#F9FAFB'
}
```

### Typography
- **Display Font**: Poppins (for headings)
- **Body Font**: Inter (for body text)

### Animations
Custom animations are defined in the Tailwind config:
- `fade-in`: Fade in effect
- `slide-up`: Slide up from bottom
- `bounce-slow`: Slow bounce animation

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: hello@salonsync.com
- Chat with SyncBot on the website
- Create an issue in the repository

---

**SalonSync — Built for the Cut.** ✂️
