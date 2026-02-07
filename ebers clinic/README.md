# EBERS Medical Diagnostic Center - Website

A high-end, responsive multi-page website for EBERS Medical Diagnostic Center. Conveys precision, hygiene, and cutting-edge technology.

## Design Language

- **Primary:** Medical Blue (#003399) – trust (brand color)
- **Secondary:** Vitality Green (#a3d9cf) – healing accents
- **Neutral:** Pure White (#FFFFFF), Soft Gray (#F8FAFC)
- **Typography:** Inter (Google Fonts)
- **Icons:** FontAwesome (SVG-based)

## Pages

- **Home** – Hero with background image + dark overlay, headline "Precision Diagnostics, Compassionate Care.", Quick Stats (24/7 | 50+ Machines | 100% Data Privacy)
- **About** – Mission, values, center information
- **Services** – Card grid with shadow-sm / hover:shadow-xl, FontAwesome icons
- **Equipment** – Lightbox gallery with medical imagery
- **Contact** – Address, phone, hours, styled Google Maps iframe, appointment form with validation

## Structure

```
ebers clinic/
├── index.html
├── about.html
├── services.html
├── equipment.html
├── contact.html
├── css/
│   └── styles.css    # AOS-style reveal, form validation, lightbox
├── js/
│   └── common.js     # Mobile menu, scroll reveal, form validation, lightbox
└── README.md
```

## Setup

1. **Logo:** Place your logo image at `assets/logo.png` (the EBERS logo with hexagonal symbol and white text on blue background)
2. Open `index.html` in a browser, or
3. Use a local server (e.g. `npx serve .`) for full functionality

## Tech Stack

- HTML5 (Semantic)
- Tailwind CSS (CDN)
- Vanilla JavaScript (mobile menu, scroll-reveal, form validation, lightbox)
- FontAwesome, Google Fonts (Inter)

## Features

- Glassmorphism sticky header (backdrop-blur)
- Emergency Call button prominent on mobile
- AOS-style fade-up on scroll
- Equipment lightbox (click image to zoom)
- Appointment via WhatsApp (+213 77 47 21 318) and optional form
