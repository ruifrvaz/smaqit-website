# smaQit Website

**Power up with smaQit** — a suite of three agentic development toolkits: smaQit (spec-driven orchestration), smaQit Extensions (quality-of-life workflows), and smaQit ADK (agent development kit).

This repository contains the official landing page for the smaQit suite: one continuous scroll, cards emerging over a fixed, depth-layered dark background.

---

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional but recommended)

### Running Locally

**Option 1: Python HTTP Server (Recommended)**

```bash
cd public
python3 -m http.server 8000
```

Then open: http://localhost:8000

**Option 2: Node.js HTTP Server**

```bash
cd public
npx http-server -p 8000
```

Then open: http://localhost:8000

**Option 3: VS Code Live Server**

1. Install the "Live Server" extension in VS Code
2. Open `public/index.html`
3. Right-click and select "Open with Live Server"

**Option 4: Direct File Access**

Simply open `public/index.html` in your browser. Note: Some features may not work correctly with `file://` protocol.

---

## 📁 Project Structure

```
smaqit-website/
├── public/                    # Website files (deploy this folder)
│   ├── index.html             # Main HTML file — immersive single-scroll layout
│   ├── style.css              # Stylesheet — dark theme, depth-layered background
│   └── script.js               # IntersectionObserver scroll reveal + parallax (optional JS)
├── hall-of-honor/              # Retired design candidates, kept for reference
│   ├── README.md
│   ├── version-a-cards/        # Candidate A — extended cards + banner image
│   └── version-c-panels/       # Candidate C — dark blue, no-scroll panel nav
├── specs/                      # Specification files
│   ├── business/                # Business layer specs
│   ├── functional/               # Functional layer specs
│   ├── stack/                    # Stack layer specs
│   ├── infrastructure/           # Infrastructure layer specs
│   └── coverage/                 # Test coverage specs
├── docs/                        # Suite research and content briefs
├── .smaqit/                     # smaQit framework files
│   ├── reports/                  # Development reports
│   └── templates/                # Specification templates
└── README.md                    # This file
```

---

## 🛠️ Technology Stack

This website is built with:

- **HTML5** — Semantic markup
- **CSS3** — Custom Properties, layered radial-gradient backgrounds for depth, glassmorphism
- **Vanilla JavaScript** — `IntersectionObserver` for scroll-reveal and section tracking, `requestAnimationFrame`-throttled parallax (progressive enhancement — the page works without JS)
- **Font Awesome 6.x** — Icons (via CDN)
- **Google Fonts (Inter)** — Typography (via CDN)

### No Build Step Required

This is a **zero-build** static website. No compilation, bundling, or transpilation needed. Just open the HTML file and it works!

---

## 🧪 Testing

### Manual Testing Checklist

Open the website in your browser and verify:

- [ ] Suite intro loads immediately with the smaQit title, tagline, and description
- [ ] Scrolling down reveals each offering (smaQit, Extensions, ADK) as a card emerging over the fixed background
- [ ] The background glow cross-fades to match whichever section is active
- [ ] The right-edge dot navigation tracks scroll position and jumps to a section on click
- [ ] "How they fit together" shows the three positioning cards (greenfield/business-heavy, add tooling or app-heavy, build-your-own ecosystem)
- [ ] GitHub (×3) and LinkedIn links in the Connect section open in new tabs
- [ ] Page is responsive on mobile devices (resize browser window)
- [ ] Page works without JavaScript (disable JS in browser) — content is still visible, just without scroll-reveal/parallax

### Browser Compatibility

Tested and working in:

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)

### Responsive Testing

Test at these viewport sizes:

- **Mobile:** < 768px (portrait phone)
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

---

## 📦 Deployment

### GitHub Pages (Recommended)

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Set source to `main` branch and `/public` folder (or root with adjusted structure)
4. Your site will be live at `https://username.github.io/smaqit-website/`

### Custom Domain

To use a custom domain with GitHub Pages:

1. Add a `CNAME` file to the `public/` folder with your domain name
2. Configure DNS records at your domain registrar:
   - For apex domain: Add A records to GitHub's IPs
   - For subdomain: Add CNAME record to `username.github.io`
3. Enable custom domain in GitHub repository settings

### Other Static Hosts

The `public/` folder can be deployed to:

- **Netlify:** Drag and drop the `public/` folder
- **Vercel:** Import repository and set build directory to `public/`
- **Cloudflare Pages:** Connect repository and set output directory to `public/`

---

## 🔗 Links

- **Website:** [Coming soon]
- **smaQit:** https://github.com/ruifrvaz/smaqit
- **smaQit Extensions:** https://github.com/ruifrvaz/smaqit-extensions
- **smaQit ADK:** https://github.com/ruifrvaz/smaqit-adk
- **LinkedIn:** https://www.linkedin.com/in/rui-vaz-43b13842

---

## 📄 License

Open source. See the main smaQit repository for license details.

---

## 🤝 Contributing

This website is part of the smaQit Spec Driven Development workflow. Contributions should:

1. Start with Business specifications
2. Create corresponding Functional specifications
3. Define Stack requirements
4. Implement according to specs

See the main smaQit documentation for the full workflow.

---

## 📝 Specification Traceability

This website was built following the smaQit methodology. All implementation decisions trace back to specifications:

- **Business Specs:** `specs/business/` (UC1-PRODUCT, UC2-FEATURES, UC3-CONNECT, UC4-COMPARE)
- **Functional Specs:** `specs/functional/` (page-layout, hero-section, features-section, social-links, preview-comparison)
- **Stack Specs:** `specs/stack/` (frontend-stack, comparison-harness-stack)
- **Coverage Specs:** `specs/coverage/` (functional-tests, user-journeys-tests, technical-tests)

`specs/business/uc4-compare.md` and `specs/functional/preview-comparison.md` document the full A/B/C design comparison and the decision to promote Candidate B to production — see `hall-of-honor/README.md` for the retired candidates.

Every HTML/CSS/JS file includes traceability comments linking implementation to requirements.

---

**Built with ❤️ using smaQit Spec Driven Development**
