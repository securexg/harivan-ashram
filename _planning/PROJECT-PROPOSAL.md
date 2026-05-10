# HARIVAN ASHRAM WEBSITE - COMPLETE PROJECT PROPOSAL

## Handover Document for AI Implementation

**Project**: Harivan Ashram Landing Page Website  
**Client**: Art of Living, Harivan Ashram, Chandigarh  
**Framework**: Astro.js with advanced animations  
**Design Style**: Signature aesthetic with video backgrounds, transparent headers, elegant typography  
**Status**: Ready for Weekend Implementation  
**Date**: May 2026  

---

## TABLE OF CONTENTS

1. [Project Overview](#project-overview)
2. [Design System & Aesthetic](#design-system--aesthetic)
3. [Content Structure](#content-structure)
4. [Technical Implementation](#technical-implementation)
5. [Photo Integration Plan](#photo-integration-plan)
6. [Weekend Implementation Roadmap](#weekend-implementation-roadmap)
7. [Complete Code Examples](#complete-code-examples)
8. [Resources & Assets](#resources--assets)

---

## PROJECT OVERVIEW

### Client Information
- **Organization**: Harivan Ashram (The Art of Living)
- **Location**: Bardar, Chandigarh - 140108
- **Contact Email**: artoflivingharivanashram@gmail.com
- **Contact Phone**: +91 95699 19990

### Website Purpose
Single-page landing website showcasing Harivan Ashram's spiritual retreat center, upcoming events, YLTP course, and contact information with Art of Living branding.

### Key Features Required
- ✅ 7 main sections with full-screen video backgrounds
- ✅ Transparent glass morphism header
- ✅ Elegant, lightweight typography (no bold fonts)
- ✅ Classy, sophisticated animations (GSAP)
- ✅ Professional photo gallery with lightbox
- ✅ Mobile-responsive design
- ✅ Art of Living brand consistency
- ✅ YLTP course registration highlight

### Design Philosophy (Client's Signature Style)
- **Transparent headers** with glass morphism effect
- **Full-screen video backgrounds** for immersive experience
- **Centered content** with perfect alignment
- **Elegant fonts** - lightweight only (300-400 weight), never bold
- **Classy animations** - smooth, refined, premium interactions
- **Minimal UI** - clean, uncluttered interface

---

## DESIGN SYSTEM & AESTHETIC

### Typography System (CRITICAL - NEVER USE BOLD FONTS)

#### Primary Font Stack
```css
/* CRITICAL: NEVER use font-weight above 400 */

.font-elegant {
  font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 300; /* Light weight only */
  letter-spacing: 0.02em;
  line-height: 1.4;
}

.font-heading {
  font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 400; /* Regular weight - NEVER bold */
  letter-spacing: 0.01em;
  line-height: 1.2;
}

.font-subtitle {
  font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 300;
  letter-spacing: 0.03em;
  line-height: 1.5;
  opacity: 0.9;
}

/* Quotes only - Georgia serif */
.font-quote {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-style: italic;
  font-weight: 400;
  line-height: 1.6;
}
```

#### Typography Hierarchy
```css
/* Hero Title - Large, elegant */
.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 300; /* Light only */
  letter-spacing: 0.02em;
  line-height: 1.1;
  color: rgba(255, 255, 255, 0.95);
}

/* Section Title */
.section-title {
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 300;
  letter-spacing: 0.02em;
  line-height: 1.1;
  color: rgba(255, 255, 255, 0.95);
}

/* Body Text */
.body-text {
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 300;
  letter-spacing: 0.03em;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
}
```

### Color Palette

#### Primary Colors (Based on Art of Living Brand)
```css
:root {
  /* Art of Living Purple */
  --artofliving-purple: #805ad5;
  --artofliving-purple-dark: #6b46c1;
  --artofliving-purple-light: #9f7aea;
  
  /* Text Colors */
  --text-primary: rgba(255, 255, 255, 0.95);
  --text-secondary: rgba(255, 255, 255, 0.85);
  --text-muted: rgba(255, 255, 255, 0.7);
  
  /* Background Colors */
  --bg-dark: rgba(0, 0, 0, 0.8);
  --bg-overlay: rgba(0, 0, 0, 0.4);
  --bg-glass: rgba(255, 255, 255, 0.1);
  
  /* Accent Colors */
  --accent-gold: rgba(255, 215, 0, 0.8);
  --nature-green: #38a169;
  --sky-blue: #3182ce;
}
```

### Transparent Header System

```css
.header-transparent {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.nav-link-transparent {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  letter-spacing: 0.02em;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link-transparent::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link-transparent:hover::after {
  width: 100%;
}
```

### Full-Screen Video Background

```css
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
}
```

### Elegant Button Styles

```css
.btn-elegant {
  display: inline-block;
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  font-weight: 300;
  letter-spacing: 0.02em;
  border-radius: 50px;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
}

.btn-elegant:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
```

---

## CONTENT STRUCTURE

### 7 Main Sections

#### 1. HERO SECTION
**Content**:
- Title: "Harivan Ashram"
- Subtitle: "Where nature meets spirituality in the heart of Chandigarh. Experience peace, meditation, and spiritual growth in natural surroundings."
- CTA Buttons: "Discover More", "Visit Us"
- Video: Nature/spiritual ashram atmosphere

**Layout**:
- Full-screen video background
- Centered content (vertical & horizontal)
- Transparent header at top
- Elegant typography, lightweight fonts

#### 2. ABOUT SECTION
**Content**:
- Title: "About Harivan Ashram"
- Subtitle: "A spiritual sanctuary where ancient wisdom meets modern living in harmony with nature"
- Three feature cards:
  - 🌿 Nature-Oriented
  - 🕉️ Art of Living
  - 🤝 Community Focus

**Layout**:
- Full-screen with video/image background
- Centered heading
- 3-column grid for feature cards
- Elegant card hover effects

#### 3. GURUDEV SECTION
**Content**:
- Title: "Our Inspiration"
- Description: Gurudev Sri Sri Ravi Shankar biography
- Quote: "The world is a mixture of joy and sorrow. Celebrate when you have joy, and when you have sorrow, have the faith that this will also pass."
- Link to Art of Living website

**Layout**:
- Two-column layout (text + image)
- Quote with elegant border-left styling
- Georgia serif font for quote

#### 4. ACTIVITIES SECTION
**Content**:
- Title: "Recent Activities"
- Subtitle: "Join us in our spiritual journey and community celebrations"
- Three event cards:
  - Navratri Celebration (Sept 28-30, 2025)
  - Shobhayatra (Feb 19, 2026)
  - Somnath Ji Darshan (Feb 21, 2026)

**Layout**:
- Timeline or grid layout
- Event cards with hover effects
- Date badges

#### 5. YLTP COURSE SECTION
**Content**:
- Title: "Youth Leadership Training Program"
- Details:
  - Dates: May 23-29, 2026
  - Age: 18-35 years
  - Duration: 7 days residential
  - Donation: ₹1,000/- only
- CTA: "Call to Register: +91 95699 19990"

**Layout**:
- Prominent course highlight
- Information grid
- Large CTA button

#### 6. GALLERY SECTION
**Content**:
- Title: "Gallery"
- 6-8 best photos from provided folders
- Categories: Events, Nature, Community

**Layout**:
- Masonry grid layout
- Lightbox functionality
- Category filtering

#### 7. CONTACT SECTION
**Content**:
- Title: "Visit Harivan Ashram"
- Subtitle: "Experience peace and spirituality in the lap of nature"
- Contact info:
  - Address: The Art of Living, Harivan Ashram, Bardar, Chandigarh - 140108
  - Email: artoflivingharivanashram@gmail.com
  - Phone: +91 95699 19990
- Google Map

**Layout**:
- Two-column (info + map)
- Contact cards with icons
- Clean, minimal form (if needed)

---

## TECHNICAL IMPLEMENTATION

### Tech Stack

```json
{
  "framework": "Astro.js v4.0+",
  "styling": "Tailwind CSS + Custom CSS",
  "animations": "GSAP + ScrollTrigger",
  "fonts": "Inter (lightweight only), Georgia for quotes",
  "icons": "Font Awesome or Lucide",
  "images": "Sharp for optimization",
  "video": "HTML5 Video with lazy loading"
}
```

### Project Structure

```
harivan-ashram/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── Navigation.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── About.astro
│   │   │   ├── Gurudev.astro
│   │   │   ├── Activities.astro
│   │   │   ├── YLTP.astro
│   │   │   ├── Gallery.astro
│   │   │   └── Contact.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       └── VideoBackground.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── scripts/
│       └── animations.js
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── activities/
│   │   └── gallery/
│   └── videos/
│       └── hero-background.mp4
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

### Dependencies

```bash
# Install all dependencies
npm install @astrojs/tailwind
npm install gsap @gsap/scrolltrigger
npm install lenis  # Smooth scrolling
npm install sharp  # Image optimization
```

### Animation System

```javascript
// GSAP Animation Setup
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/scrolltrigger';

gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.timeline()
  .from(".hero-title", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power2.out"
  })
  .from(".hero-subtitle", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out"
  }, "-=0.6")
  .from(".hero-buttons", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.4");

// Scroll-triggered animations
gsap.utils.toArray(".section-title").forEach(title => {
  gsap.from(title, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: title,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});
```

---

## PHOTO INTEGRATION PLAN

### Photo Sources

**Google Drive Folder 1**: Harivan Ashram (Somnath Jyotirling Shobha Yatra)
- URL: https://drive.google.com/drive/folders/1VmKKq0O9JNq7IcajOiGTHWlr6wfuqo1G
- Content: Event photography, Shobhayatra procession, Somnath Ji darshan
- Estimated: 50-100 photos

**Google Drive Folder 2**: Navratri 2025 Professional Shoot
- URL: https://drive.google.com/drive/folders/1k_7n3xvmyGPHMs_F22gQmUNfO89gSeKK
- Content: Professional photography, Navratri celebration
- Estimated: 30-50 photos

### Photo Requirements by Section

| Section | Quantity | Quality | Dimensions |
|---------|----------|---------|------------|
| Hero | 1-2 | High, wide-angle | 1920x1080 |
| About | 2-3 | Good, environment | 1200x800 |
| Gurudev | 1 | Respectful, clear | 800x600 |
| Activities | 4-6 | Event coverage | 800x600 |
| YLTP | 1-2 | Youth-oriented | 800x600 |
| Gallery | 6-8 | Variety, striking | 600x400 |

### Photo Optimization

**Tools**:
- Squoosh.app (Free, web-based)
- ImageOptim (Mac)
- TinyPNG (Web)

**Settings**:
- Format: JPG for photos, WebP for modern browsers
- Quality: 75-85% for web
- Max file size: Under 500KB per image

---

## WEEKEND IMPLEMENTATION ROADMAP

### Saturday (Day 1): Foundation & Structure

#### Morning (3 hours): Project Setup
1. Create Astro.js project
   ```bash
   npm create astro@latest harivan-ashram -- --template minimal
   cd harivan-ashram
   npm install
   npm install @astrojs/tailwind gsap @gsap/scrolltrigger lenis sharp
   npx astro add tailwind
   ```

2. Configure project files
   - `astro.config.mjs` - Set up static output
   - `tailwind.config.js` - Add custom colors
   - `src/styles/global.css` - Import fonts, set up design system

#### Afternoon (3 hours): Component Architecture
1. Create layout components (Header, Footer, Navigation)
2. Create section components (Hero, About, Gurudev, etc.)
3. Set up design system with CSS variables
4. Create video background component

### Sunday (Day 2): Content & Advanced Features

#### Morning (3 hours): Section Implementation
1. Build all 7 sections with content
2. Implement video backgrounds
3. Set up transparent header
4. Add elegant typography throughout

#### Afternoon (3 hours): Animations & Polish
1. Implement GSAP animations
2. Add scroll-triggered effects
3. Create parallax effects
4. Test responsive design
5. Optimize performance

---

## COMPLETE CODE EXAMPLES

### 1. Main Layout (MainLayout.astro)

```astro
---
const { title } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <meta name="description" content="Harivan Ashram - A nature-oriented spiritual retreat center under The Art of Living, located in Chandigarh.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap" rel="stylesheet">
</head>
<body class="font-sans antialiased">
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
    <script src="../scripts/animations.js"></script>
</body>
</html>
```

### 2. Hero Section (Hero.astro)

```astro
<section class="hero-section" id="home">
    <div class="video-background">
        <video autoplay muted loop playsinline>
            <source src="/videos/hero-background.mp4" type="video/mp4">
        </video>
        <div class="video-overlay"></div>
    </div>
    
    <div class="content-centered">
        <h1 class="hero-title animate-fade-in">Harivan Ashram</h1>
        <p class="hero-subtitle animate-fade-in animate-stagger-1">
            Where nature meets spirituality in the heart of Chandigarh. 
            Experience peace, meditation, and spiritual growth in natural surroundings.
        </p>
        <div class="hero-buttons animate-fade-in animate-stagger-2">
            <a href="#about" class="btn-elegant">Discover More</a>
            <a href="#contact" class="btn-elegant btn-elegant-outline">Visit Us</a>
        </div>
    </div>
</section>

<style>
.hero-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.video-background video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0.1) 50%,
        rgba(0, 0, 0, 0.2) 100%
    );
}

.content-centered {
    text-align: center;
    max-width: 800px;
    padding: 0 20px;
    z-index: 10;
}

.hero-title {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 300;
    letter-spacing: 0.02em;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 0.95);
}

.hero-subtitle {
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-weight: 300;
    letter-spacing: 0.03em;
    line-height: 1.5;
    margin-bottom: 3rem;
    color: rgba(255, 255, 255, 0.85);
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
```

### 3. Transparent Header (Header.astro)

```astro
<header class="header-transparent" id="header">
    <div class="nav-container">
        <a href="#home" class="nav-logo">🕉️ Harivan Ashram</a>
        <nav class="nav-links">
            <a href="#home" class="nav-link-transparent">Home</a>
            <a href="#about" class="nav-link-transparent">About</a>
            <a href="#gurudev" class="nav-link-transparent">Gurudev</a>
            <a href="#activities" class="nav-link-transparent">Activities</a>
            <a href="#yltp" class="nav-link-transparent">YLTP</a>
            <a href="#contact" class="nav-link-transparent">Contact</a>
        </nav>
    </div>
</header>

<style>
.header-transparent {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
}

.nav-logo {
    font-size: 1.25rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.95);
    text-decoration: none;
    letter-spacing: 0.02em;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-link-transparent {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 300;
    letter-spacing: 0.02em;
    transition: all 0.3s ease;
    position: relative;
}

.nav-link-transparent::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.nav-link-transparent:hover::after {
    width: 100%;
}
</style>

<script>
// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.15)';
        header.style.backdropFilter = 'blur(25px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
        header.style.backdropFilter = 'blur(20px)';
    }
});
</script>
```

### 4. GSAP Animations (animations.js)

```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/scrolltrigger';

gsap.registerPlugin(ScrollTrigger);

// Hero entrance animation
gsap.timeline()
  .from(".hero-title", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power2.out"
  })
  .from(".hero-subtitle", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out"
  }, "-=0.6")
  .from(".hero-buttons", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.4");

// Section reveal animations
gsap.utils.toArray(".section-title").forEach((title, i) => {
  gsap.from(title, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: title,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});

// Card animations
gsap.utils.toArray(".feature-card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    delay: i * 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: target, offsetY: 70 },
        ease: "power2.inOut"
      });
    }
  });
});
```

---

## RESOURCES & ASSETS

### Fonts
- **Primary**: Inter (Google Fonts) - Use weights 300, 400 only
- **Quotes**: Georgia (system font) - italic style

### Colors
- Art of Living Purple: #805ad5
- White text: rgba(255, 255, 255, 0.95)
- Background overlay: rgba(0, 0, 0, 0.3)

### Icons
- Use Font Awesome or Lucide icons
- Keep icons minimal and elegant

### Video Sources
- Need nature/spiritual video for hero background
- Can use stock footage or client-provided video
- Format: MP4, optimized for web

### Photo Sources
- Google Drive Folder 1: Shobhayatra event
- Google Drive Folder 2: Navratri professional shoot
- Select 15-20 best photos total

---

## CRITICAL NOTES FOR AI IMPLEMENTATION

### Typography - MOST IMPORTANT
- **NEVER use font-weight above 400**
- **NO bold fonts anywhere**
- **Lightweight fonts only** (300-400)
- Inter font family for everything except quotes
- Georgia serif for quotes only

### Design Philosophy
- **Transparent headers** with glass morphism
- **Full-screen video backgrounds**
- **Centered content** always
- **Elegant, minimal UI**
- **Classy, smooth animations**

### Technical Must-Haves
- Astro.js framework
- GSAP for animations
- Tailwind CSS for styling
- Responsive design (mobile-first)
- Performance optimization
- SEO meta tags

### Client's Signature Style
This client uses the same aesthetic for ALL their websites:
- Video backgrounds
- Transparent floating headers
- Lightweight elegant fonts
- Centered content
- Sophisticated animations
- Minimal, uncluttered design

---

## CONTACT INFORMATION

**Client**: Harivan Ashram, The Art of Living  
**Location**: Bardar, Chandigarh - 140108  
**Email**: artoflivingharivanashram@gmail.com  
**Phone**: +91 95699 19990  

**Project Location**: `/Users/gauravgarg/CascadeProjects/harivan-ashram/`  
**Planning Documents**: `/Users/gauravgarg/.windsurf/plans/`

---

**END OF PROPOSAL**

This document contains everything needed to implement the Harivan Ashram website. Follow the design system strictly, especially the typography rules (NO BOLD FONTS), and maintain the elegant, sophisticated aesthetic throughout.
