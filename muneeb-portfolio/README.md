# Muneeb Iqbal — Personal Portfolio

A modern, premium personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🌑 Dark luxury theme with glassmorphism cards
- ⚡ Smooth Framer Motion scroll animations
- 📱 Fully responsive, mobile-first design
- ✍️ Animated typing effect (react-type-animation)
- 📊 Animated skill bars with intersection observer
- 🎯 SEO optimized with JSON-LD structured data
- 🚀 Vercel-ready deployment

## 📁 Project Structure

```
muneeb-portfolio/
├── app/
│   ├── globals.css          ← All styles, CSS variables, glassmorphism
│   ├── layout.tsx           ← Root layout + SEO metadata
│   └── page.tsx             ← Main page composition
├── components/
│   ├── Navbar.tsx           ← Sticky nav + mobile menu
│   ├── Footer.tsx           ← Clean footer
│   ├── ui/
│   │   └── SectionWrapper.tsx  ← Scroll animation wrapper
│   └── sections/
│       ├── Hero.tsx         ← Hero with typing animation
│       ├── About.tsx        ← Bio, education, goals
│       ├── Skills.tsx       ← Animated skill bars
│       ├── Projects.tsx     ← Project cards
│       ├── Experience.tsx   ← Freelancing services
│       └── Contact.tsx      ← Contact form + socials
├── public/
│   └── resume.pdf           ← Add your resume PDF here
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Add your resume

Place your resume PDF at:
```
public/resume.pdf
```

### 4. Customize your details

Update these files with your real info:

| File | What to update |
|------|---------------|
| `components/sections/Hero.tsx` | Stats (15+ projects, etc.) |
| `components/sections/About.tsx` | Bio text, education details |
| `components/sections/Skills.tsx` | Skill levels (0-100) |
| `components/sections/Projects.tsx` | Real projects, GitHub links, live URLs |
| `components/sections/Experience.tsx` | Fiverr URL, service prices |
| `components/sections/Contact.tsx` | WhatsApp number, email, LinkedIn URL |
| `app/layout.tsx` | OpenGraph URL, Twitter handle |

### 5. Connect contact form

Replace the simulated form submission in `Contact.tsx` with a real service:

**Option A — Formspree (free, easy):**
```bash
# Sign up at formspree.io, create a form, get your form ID
```
```tsx
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' },
})
```

**Option B — EmailJS:**
```bash
npm install @emailjs/browser
```
```tsx
import emailjs from '@emailjs/browser'
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
```

---

## 🌐 Deploy to Vercel

### Method 1 — Vercel CLI (Recommended)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy from project root
vercel

# 4. For production deployment
vercel --prod
```

### Method 2 — GitHub + Vercel Dashboard

1. Push your code to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/muneeb-portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `https://your-project.vercel.app` 🎉

### Method 3 — Drag & Drop

```bash
# Build the project
npm run build

# The .next folder is your build output
# Upload it directly at vercel.com/new
```

---

## 🎨 Customization Guide

### Change accent colors

In `app/globals.css`, update the CSS variables:
```css
:root {
  --cyan: #22d3ee;     /* Primary accent */
  --violet: #a78bfa;   /* Secondary accent */
  --rose: #fb7185;     /* Highlight */
}
```

### Add a real profile photo

In `components/sections/Hero.tsx`, replace the initials block:
```tsx
import Image from 'next/image'

// Replace the initials div with:
<Image
  src="/profile.jpg"  // Add to public/
  alt="Muneeb Iqbal"
  fill
  className="object-cover"
  priority
/>
```

### Add Google Analytics

In `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'
// In <head>:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

---

## 📦 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2 | React framework + routing |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 11 | Animations |
| react-type-animation | 3.2 | Typing effect |
| react-intersection-observer | 9.10 | Scroll triggers |
| lucide-react | 0.383 | Icons |

---

## 📄 License

MIT — free to use and modify for personal use.

---

Built with ❤️ by [Muneeb Iqbal](https://muneebiqbal.dev)
