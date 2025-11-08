 📁 Theme.OGscale - File Structure & Naming Guide

## 🗂️ Directory Structure

```
Theme.OGscale/
├── index.html                    # Main HTML file (562 KB)
├── fonts/                        # Satoshi font family
│   ├── Satoshi-Black.otf
│   ├── Satoshi-Bold.otf
│   ├── Satoshi-Light.otf
│   ├── Satoshi-Medium.otf
│   └── Satoshi-Regular.otf
└── _next/                        # Next.js build output
    └── static/
        ├── chunks/              # JavaScript bundles
        │   ├── Runtime & Core Files:
        │   │   ├── runtime.js            # React runtime
        │   │   ├── polyfills.js          # Browser polyfills
        │   │   ├── polyfills-42372ed130431b0a.js  # Legacy polyfills
        │   │   ├── webpack-runtime.js    # Webpack runtime configuration
        │   │   └── main-app-bundle.js    # Main application bundle
        │   │
        │   ├── Component Chunks:
        │   │   ├── chunk-providers.js    # React Context Providers
        │   │   ├── chunk-theme.js        # Theme configuration and UI theme
        │   │   ├── chunk-layout.js       # Layout components & structure
        │   │   ├── chunk-tracking.js     # Analytics & tracking code
        │   │   ├── chunk-analytics.js    # Google Analytics integration
        │   │   ├── chunk-commerce.js     # E-commerce functionality
        │   │   ├── chunk-utils.js        # Utility functions
        │   │   └── chunk-styles.js       # Global styles & CSS-in-JS
        │   │
        │   ├── App Structure:
        │   │   ├── app/
        │   │   │   ├── layout-bundle.js  # App root layout
        │   │   │   ├── layout.js         # Layout wrapper
        │   │   │   └── theme/
        │   │   │       ├── theme-page-bundle.js  # Theme page (main landing)
        │   │   │       ├── page-theme.js
        │   │   │       ├── affiliate/    # Affiliate program page
        │   │   │       ├── login/        # Login page
        │   │   │       ├── products/     # Products showcase page
        │   │   │       └── support/      # Support page
        │   │
        │   └── Legacy Wrappers:
        │       ├── chunk-*.js            # Wrapper files for compatibility
        │       └── main-app.js           # Legacy main app wrapper
        │
        └── css/                 # Stylesheets
            ├── main.css         # Primary stylesheet (with all Tailwind CSS)
            └── 12a9fa048ae01cc1.css  # Hashed CSS (same as main.css)
```

---

## 🏷️ JavaScript Files Explained

### Core Runtime Files
| File | Purpose |
|------|---------|
| `runtime.js` | Next.js runtime - handles app initialization |
| `webpack-runtime.js` | Webpack configuration & chunk loading |
| `main-app-bundle.js` | Main React application code |
| `polyfills.js` | Browser compatibility polyfills |

### Component Chunks (Code Splitting)
These files are loaded on-demand to reduce initial load time:

| File | Purpose |
|------|---------|
| `chunk-providers.js` | React Context providers (Theme, Language, etc.) |
| `chunk-theme.js` | Theme configuration, colors, styling system |
| `chunk-layout.js` | Main layout components, navigation |
| `chunk-tracking.js` | User tracking, event logging |
| `chunk-analytics.js` | Google Analytics, conversion tracking |
| `chunk-commerce.js` | E-commerce features, shopping cart |
| `chunk-utils.js` | Helper functions, utilities |
| `chunk-styles.js` | Global CSS, animations |

### Page Files
| File | Purpose |
|------|---------|
| `theme-page-bundle.js` | Home/landing page code |
| `page-theme.js` | Page wrapper |
| `layout-bundle.js` | Application layout wrapper |

---

## 📊 File Sizes

| File | Size |
|------|------|
| index.html | 562 KB |
| main.css | 4.2 KB (Tailwind CSS) |
| Each chunk | 50-200 KB |
| Total JS | ~2.5 MB |

---

## 🔄 How It Works

1. **index.html loads** → Browser receives pre-rendered HTML + CSS
2. **CSS applies** → Page gets styled with Tailwind + custom styles
3. **JS bundles load** → React initializes with `BAILOUT_TO_CLIENT_SIDE_RENDERING`
4. **React hydration** → Page becomes interactive
5. **Chunks load on demand** → Heavy features loaded as needed

---

## 💡 What Each Section Does

### Header Navigation
- Company logo and branding
- Navigation menu (Products, Support, Account, Affiliate)
- Mobile hamburger menu
- CTA button (Get Started)

### Hero Section
- Main headline with blue gradient text
- Subheading and value proposition
- Two CTA buttons (Primary + Discord)
- Benefits badges

### Features Section
- 6 feature cards with icons
- Each feature has title + description
- Hover effects and animations

### Testimonials Section
- Scrolling carousel of reseller profiles
- Social media handles and follower counts
- Automatic animations

### Pricing Section
- Two tier comparison (Lite $179 vs Pro $379)
- Feature comparison table
- CTA buttons for each tier

### FAQ Section
- Common questions and answers
- Company information
- Legal policies and links

### Footer
- Company details
- Contact information
- Social links

---

## 🚀 Server & Deployment

### Local Development
```bash
python -m http.server 8000
# Open: http://localhost:8000/index.html
```

### Production (Live)
- **URL**: https://theme.scaled.info
- **Deployment**: Static hosting (Vercel, Netlify, AWS S3, etc.)

---

## ✅ Checklist

- [x] HTML structure complete
- [x] CSS/Styling loaded
- [x] JavaScript bundles load
- [x] React hydration working
- [x] All 23 JS files organized
- [x] Fonts loading (Satoshi)
- [x] Navigation interactive
- [x] Buttons clickable
- [x] Mobile responsive
- [x] Image optimization

---

**Last Updated:** November 7, 2025
**Version:** 1.0 - Production Ready
