# Hrala — Centar dentalne medicine
## Next.js Website Redesign

### Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

### Requirements
- Node.js 18+
- npm 9+

---

### Project Structure

```
src/
└── app/
    ├── layout.tsx          # Root layout + Google Fonts (Cormorant Garamond + DM Sans)
    ├── page.tsx            # Home page — wires all sections
    ├── globals.css         # Tailwind base + custom CSS variables, animations
    └── components/
        ├── Navbar.tsx      # Sticky nav, top contact bar, language switcher, mobile menu
        ├── Hero.tsx        # Full-screen 3-slide carousel with stats bar
        ├── Services.tsx    # 3×3 service cards grid (no individual pages)
        ├── About.tsx       # Split layout + quality pillars + team grid
        ├── Gallery.tsx     # Masonry photo grid with lightbox + 360° CTA
        ├── Testimonials.tsx# Marquee band + dark testimonials section
        ├── Contact.tsx     # Google Maps + contact info + appointment form
        └── Footer.tsx      # 4-column footer with all links
```

---

### Design System

**Colors (CSS variables)**
- `--green-primary: #2a7d58` — main green (from existing Hrala branding)
- `--green-light: #3a9a6e`   — hover states, accents
- `--green-dark: #1f4f3a`    — dark backgrounds, top bar
- `--green-pale: #e8f5ee`    — light green backgrounds
- `--cream: #faf8f4`         — section backgrounds
- `--charcoal: #1a1f1c`      — dark section backgrounds, text

**Fonts**
- `Cormorant Garamond` — headings, numbers (editorial serif)
- `DM Sans` — body, labels, buttons (clean grotesque)

---

### Key Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ All 9 services on one page (no individual service pages)
- ✅ Smooth scroll-reveal animations via IntersectionObserver
- ✅ Hero slideshow with 3 slides + stats bar
- ✅ Team section with 4 doctor cards
- ✅ Photo gallery with lightbox viewer (keyboard navigation)
- ✅ 360° virtual tour CTA block
- ✅ Google Maps embed
- ✅ Appointment request form
- ✅ Language switcher (HR/EN/IT)
- ✅ Mobile hamburger menu
- ✅ Animated service marquee banner
- ✅ Testimonials with star ratings

---

### Content To Replace
All placeholder text is in Croatian to match the existing site. Replace:
- Hero slide headlines and subtext (client copy)
- About section body text
- Service descriptions
- Team member names and photos
- Testimonials (or connect to Google Reviews API)
- Google Maps embed URL with exact address

### Image Placeholders
All images use Unsplash URLs. Replace with actual clinic photos before launch.
Images used in:
- Hero: 3 slide backgrounds
- Services: 9 service card images
- About: 2 collage images + 4 team portraits
- Gallery: 7 gallery images

---

### Deployment
Works with any Next.js host:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: connect GitHub repo
- **Self-hosted**: `npm run build && npm start`
