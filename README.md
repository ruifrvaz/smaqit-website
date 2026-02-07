# smaQ'it Website

**Power up with smaQ'it** — A Spec Driven Development (SDD) toolkit for IT professionals.

This repository contains the official landing page for smaQit, built with simplicity and performance in mind.

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
├── public/              # Website files (deploy this folder)
│   ├── index.html       # Main HTML file
│   ├── style.css        # Stylesheet
│   └── script.js        # Optional JavaScript enhancements
├── specs/               # Specification files
│   ├── business/        # Business layer specs
│   ├── functional/      # Functional layer specs
│   └── stack/           # Stack layer specs
├── .smaqit/             # smaQ'it framework files
│   ├── reports/         # Development reports
│   └── templates/       # Specification templates
└── README.md            # This file
```

---

## 🛠️ Technology Stack

This website is built with:

- **HTML5** — Semantic markup
- **CSS3** — Modern layouts with Flexbox and Grid
- **Vanilla JavaScript** — Minimal progressive enhancements (optional)
- **Font Awesome 6.x** — Social media icons (via CDN)
- **Google Fonts (Inter)** — Typography (via CDN)

### No Build Step Required

This is a **zero-build** static website. No compilation, bundling, or transpilation needed. Just open the HTML file and it works!

---

## 🧪 Testing

### Manual Testing Checklist

Open the website in your browser and verify:

- [ ] Hero section loads immediately with product name, tagline, and description
- [ ] Four feature cards are displayed in a grid layout
- [ ] GitHub and LinkedIn icons are visible in the footer
- [ ] Clicking social icons opens links in new tabs
- [ ] Smooth scrolling works (if supported by browser)
- [ ] Page is responsive on mobile devices (resize browser window)
- [ ] Page works without JavaScript (disable JS in browser)

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
- **GitHub Repository:** https://github.com/ruifrvaz/smaqit
- **LinkedIn:** https://www.linkedin.com/in/rui-vaz-43b13842

---

## 📄 License

Open source. See the main smaQ'it repository for license details.

---

## 🤝 Contributing

This website is part of the smaQ'it Spec Driven Development workflow. Contributions should:

1. Start with Business specifications
2. Create corresponding Functional specifications
3. Define Stack requirements
4. Implement according to specs

See the main smaQ'it documentation for the full workflow.

---

## 📝 Specification Traceability

This website was built following the smaQ'it methodology. All implementation decisions trace back to specifications:

- **Business Specs:** `specs/business/` (UC1-PRODUCT, UC2-FEATURES, UC3-CONNECT)
- **Functional Specs:** `specs/functional/` (page-layout, hero-section, features-section, social-links)
- **Stack Specs:** `specs/stack/` (frontend-stack, dependencies-stack)

Every HTML/CSS/JS file includes traceability comments linking implementation to requirements.

---

**Built with ❤️ using smaQ'it Spec Driven Development**
