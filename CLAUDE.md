# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a static website with no build process. To view and test changes:

- Open any HTML file directly in a web browser (e.g., `index.html`, `projects.html`)
- For local development, you can use a simple static server:
  - Python: `python -m http.server 8000` (then visit http://localhost:8000)
  - No npm/yarn build steps required
- To test a single change: save the file and refresh the browser

## Code Architecture & Structure

### Core Technologies
- **HTML5**: Semantic markup with consistent structure across pages
- **CSS3**: Custom properties (CSS variables) for theming and design tokens in `style.css`
- **JavaScript**: Vanilla JS for interactive features in `script.js`
- **Responsive Design**: Mobile-first approach with CSS media queries

### File Organization
- `index.html`: Homepage with hero section and navigation
- `projects.html`: Portfolio showcase with project cards and skills grid
- `about.html`: Personal/professional information page
- `contact.html`: Contact form that opens email client
- `blog.html` & `blog-post.html`: Blog listing and individual post templates
- `style.css`: Global stylesheet with:
  - CSS variables for light/dark theme switching
  - Component styles (navbar, hero, project cards, etc.)
  - Responsive breakpoints at 768px
- `script.js`: Client-side functionality:
  - Theme toggle with localStorage persistence
  - Mobile hamburger menu
  - Contact form validation and email client integration

### Key Patterns
- **Theming**: Uses `data-theme` attribute on `<html>` element with CSS variables
  - Toggle via JavaScript that updates attribute and localStorage
  - Dark theme is default (`theme === 'dark' ? '☀️' : '🌙'`)
- **Navigation**: Consistent navbar across all pages with active state indication
- **Components**: Reusable UI patterns via CSS classes:
  - `.project-card`, `.skill-item`, `.sub-section`, `.section`
  - Utility classes for spacing and layout
- **Forms**: Contact form uses client-side validation before opening mailto: link
- **Assets**: Uses Google Fonts (Inter, JetBrains Mono) and SVG favicon

### Common Development Tasks
1. **Updating content**: Edit the relevant HTML file directly
2. **Styling changes**: Modify `style.css` - variables are in `:root` and `[data-theme="light"]`
3. **Adding features**: Enhance `script.js` for new interactions
4. **Theme adjustments**: Modify CSS variables in `style.css`
5. **Adding pages**: Duplicate existing HTML structure and update navigation

### Deployment
The site is static and can be deployed to any static hosting service (GitHub Pages, Netlify, Vercel, etc.) by uploading all files preserving the directory structure.
