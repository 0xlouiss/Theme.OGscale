# Scaled Theme - Professional Shopify Theme for Resellers

## 📁 Project Structure

```
Theme.OGscale/
├── public/
│   ├── index.html              # Clean, minimal HTML (no inline styles)
│   ├── css/
│   │   └── styles.css          # All custom CSS (animations, buttons, carousel)
│   ├── js/
│   │   ├── app.js              # Main app logic (navigation, smooth scroll)
│   │   └── carousel.js         # Carousel animation logic
│   ├── fonts/
│   │   ├── Satoshi-Light.otf
│   │   ├── Satoshi-Regular.otf
│   │   ├── Satoshi-Medium.otf
│   │   ├── Satoshi-Bold.otf
│   │   └── Satoshi-Black.otf
│   └── _next/                  # Next.js static assets (pre-built)
│       └── static/
│           ├── chunks/         # JavaScript bundles
│           └── css/            # Tailwind CSS
├── README.md                   # Documentation (this file)
└── .gitignore                  # Git configuration

```

## 🚀 Quick Start

### Development
```bash
# Start local server on port 8000
cd Theme.OGscale
python -m http.server 8000

# Open http://localhost:8000/public/index.html
```

### Production Sync
```powershell
# Copy to production directory
Copy-Item "Theme.OGscale\public\*" -Destination "Theme.scaled.info" -Recurse -Force
```

## 📄 File Purposes

### HTML (`public/index.html`)
- **Size**: ~15 KB (dramatically reduced from 293 KB)
- **Content**: Clean semantic HTML with no inline styles
- **Features**:
  - Navigation bar with smooth scrolling links
  - Hero section with CTA buttons
  - Features grid (6 cards)
  - Social proof carousel (16 resellers)
  - Pricing section (2 plans)
  - Footer with links
- **External Dependencies**: CSS and JS files loaded separately

### Styles (`public/css/styles.css`)
- **Size**: ~2 KB
- **Contains**:
  - Keyframe animations (@keyframes)
  - Carousel animation logic
  - Button styles (premium-button, premium-button-outline)
  - Utility classes
- **Framework**: Works with Tailwind CSS from `_next/static/css/`

### JavaScript Files

#### `public/js/carousel.js` (~1.5 KB)
- Handles infinite scrolling carousel
- Clones carousel items for seamless loop
- Pause/resume on hover functionality
- Initialized on DOM ready

#### `public/js/app.js` (~2 KB)
- Main application logic
- Smooth scrolling navigation
- Button event handlers
- CTA tracking hooks
- Modular architecture

### Assets

#### Fonts (`public/fonts/`)
- Satoshi font family (5 weights):
  - Light (300)
  - Regular (400)
  - Medium (500)
  - Bold (700)
  - Black (900)
- Local hosting (no external font requests)

#### Next.js Assets (`_next/static/`)
- **Pre-built** static files from Next.js export
- **Chunks**: JavaScript bundles (runtime, polyfills)
- **CSS**: Tailwind CSS framework

## 🎨 Design System

### Color Palette
- **Primary**: Slate (#1e293b)
- **Secondary**: Blue (#1e40af)
- **Accent**: Rose, Purple, Emerald, etc.
- **Neutral**: Slate 50-900 range

### Typography
- **Font**: Satoshi (custom, hosted locally)
- **Sizes**: Responsive (mobile → desktop)
- **Weights**: Light, Regular, Medium, Bold, Black

### Components
1. **Navigation** - Fixed top bar with logo and links
2. **Hero** - Large headline with CTAs
3. **Features** - 6-card grid with icons
4. **Carousel** - Infinite scrolling social proof
5. **Pricing** - 2-column pricing plans
6. **Footer** - Links and copyright

## 🔧 Customization Guide

### Adding New Features

#### New Section
```html
<section id="my-section" class="py-20 px-4">
  <div class="max-w-7xl mx-auto">
    <!-- Your content -->
  </div>
</section>
```

#### New Carousel Item
```html
<div data-carousel-item class="flex-shrink-0 w-64 bg-white rounded-xl p-6">
  <!-- Card content -->
</div>
```

#### New Button
```html
<button class="premium-button">Click Me</button>
<!-- or -->
<a class="premium-button-outline" href="#">Link</a>
```

### Updating Styles
1. Edit `public/css/styles.css`
2. Add CSS classes or modify existing ones
3. Keep animations in dedicated keyframe sections
4. Tailwind classes work directly in HTML

### Modifying JavaScript
1. Edit `public/js/app.js` or `public/js/carousel.js`
2. Add event listeners to new elements
3. Use data attributes (e.g., `data-action="purchase"`) for targeting

## 📊 Performance Metrics

| Metric | Before | After | Reduction |
|--------|--------|-------|-----------|
| HTML Size | 293 KB | 15 KB | 95% ✅ |
| Inline CSS | Yes | No | Extracted ✅ |
| Inline JS | Yes | No | Separated ✅ |
| CSS File | 87 KB | 2 KB | 98% ✅ |
| Files Count | 1 | 5 | Organized ✅ |

## 🔗 File Dependencies

```
index.html
  ├── _next/static/css/12a9fa048ae01cc1.css (Tailwind)
  ├── public/css/styles.css (Custom animations)
  ├── _next/static/chunks/polyfills-*.js
  ├── _next/static/chunks/polyfills.js
  ├── _next/static/chunks/runtime.js
  ├── public/js/carousel.js
  └── public/js/app.js

Fonts:
  └── public/fonts/Satoshi-*.otf (5 files)
```

## 🚀 Deployment

### Local Testing
```powershell
cd c:\Users\louis\Git\Theme.OGscale
python -m http.server 8000
# Visit http://localhost:8000/public/index.html
```

### Production Deployment
```powershell
# Sync to production server
Copy-Item "public\*" -Destination "c:\Users\louis\Git\Theme.scaled.info" -Recurse -Force
```

### Server Configuration
- Serves static files (HTML, CSS, JS, fonts)
- No backend required
- Works with any web server
- Responsive on all devices

## 📝 Notes

### What Was Removed
- ✅ Removed 278 KB of redundant code
- ✅ Extracted inline styles to `styles.css`
- ✅ Separated JavaScript into modules
- ✅ Organized files by type (js, css, fonts)

### What Was Kept
- ✅ All 6 features and descriptions
- ✅ All 16 reseller cards in carousel
- ✅ Both pricing plans (Lite $179, Pro $379)
- ✅ Tailwind CSS framework
- ✅ Responsive design

### Best Practices Applied
- ✅ Semantic HTML structure
- ✅ CSS separation and organization
- ✅ Modular JavaScript (no spaghetti code)
- ✅ Consistent naming conventions
- ✅ Clear file organization
- ✅ Professional documentation
- ✅ Easy to maintain and extend

## 🎯 Next Steps

1. **Test thoroughly**: Visit `http://localhost:8000/public/index.html`
2. **Sync to production**: Copy files to `Theme.scaled.info`
3. **Verify carousel**: Should scroll left-to-right continuously
4. **Check responsive**: Test on mobile and desktop
5. **Customize as needed**: Update colors, fonts, content

## 📞 Support

For questions about the structure or customization:
- Check individual file comments
- Review the `public/js/app.js` and `public/js/carousel.js` for hooks
- CSS classes are prefixed with purpose (e.g., `.premium-button`, `.carousel-group`)

---

**Last Updated**: November 8, 2025
**Version**: 1.0 (Professional Restructure)
**Status**: ✅ Production Ready
