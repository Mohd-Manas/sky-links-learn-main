# Sky Links Academy - HTML Export

This is the pure HTML/CSS/JavaScript version of the Sky Links Trading Academy platform.

## Structure

```
html-export/
├── index.html                  # Home page
├── css/
│   ├── styles.css             # Main styles
│   ├── components.css         # UI components
│   └── responsive.css         # Mobile responsive styles
├── js/
│   ├── main.js                # Core functionality
│   ├── navigation.js          # Navigation logic
│   └── carousel.js            # Carousel functionality
└── README.md                  # This file
```

## Features

- ✅ Pure HTML/CSS/JavaScript (no frameworks)
- ✅ Fully responsive design
- ✅ Mobile-friendly navigation
- ✅ Auto-playing video carousel
- ✅ Sky Links Academy branding and color scheme
- ✅ Lexend Deca font integration
- ✅ Cross-browser compatible

## How to Use

### Option 1: View Locally
1. Open `index.html` in any modern web browser
2. Navigate through the pages using the menu

### Option 2: Upload to WordPress
1. **As Static Files:**
   - Create a new page in WordPress
   - Use "Custom HTML" block
   - Paste the HTML content
   - Upload CSS/JS to Media Library
   - Update file paths in HTML

2. **Convert to WordPress Theme:**
   - Add WordPress theme header to `styles.css`
   - Convert HTML files to PHP templates
   - Use `get_header()` and `get_footer()`
   - Register menus in `functions.php`
   - Enqueue scripts properly

### Option 3: Deploy to Web Server
1. Upload entire `html-export` folder to your server
2. Ensure fonts are in `/public/fonts/` directory
3. Ensure images are in `/src/assets/` directory
4. Point domain to the folder

### Option 4: GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select branch and folder
4. Access via `username.github.io/repo-name`

## Font Setup

Make sure the Lexend Deca fonts are available at:
- `/public/fonts/LexendDeca-Light.ttf`
- `/public/fonts/LexendDeca-Regular.ttf`
- `/public/fonts/LexendDeca-Medium.ttf`
- `/public/fonts/LexendDeca-SemiBold.ttf`
- `/public/fonts/LexendDeca-Bold.ttf`

## Image Setup

Images should be in the `/src/assets/` directory or update the paths in:
- `index.html` (hero section, logo)
- `css/styles.css` (background images)
- `js/main.js` (video thumbnails)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary: #030349;
    --cta: #0036cc;
    --success: #2d7a4f;
    /* etc. */
}
```

### Navigation
Update navigation links in `index.html`:
```html
<a href="index.html" class="nav-link">Home</a>
```

### Content
- Videos: Edit `featuredVideos` array in `js/main.js`
- Ebooks: Edit `featuredEbooks` array in `js/main.js`

## WordPress Integration Guide

### Method 1: Page Builder Plugin
1. Install Elementor or Beaver Builder
2. Create new page
3. Use Custom HTML widgets
4. Paste HTML sections
5. Style using page builder

### Method 2: Custom Theme
1. Create theme folder: `wp-content/themes/skylinks-academy/`
2. Add `style.css` with theme header:
```css
/*
Theme Name: Sky Links Academy
Author: Your Name
Version: 1.0
*/
```
3. Convert HTML to PHP templates
4. Activate theme in WordPress

## Notes

- All functionality is vanilla JavaScript (no jQuery or React)
- Lucide icons loaded from CDN
- Auto-playing carousel with 3-second intervals
- Mobile menu toggles on small screens
- Responsive breakpoints: 768px (tablet), 480px (mobile)

## Support

For issues or questions about this HTML export, refer to the original React codebase or contact support.
