# WebDevPro Shell - Theme Template System

## Overview

This is the **WebDevPro Shell** - a professional website template system designed to rapidly create high-quality websites for contractors and small businesses. The shell provides:

- **Proven Framework**: Mobile-first, SEO-optimized, conversion-focused design
- **Data-Driven Content**: All content managed via YAML files in `_data/`
- **Modular Components**: Reusable includes for consistent styling
- **Custom Tools Framework**: Calculator/estimator system ready for customization
- **GitHub-Based Management**: Full version control and transparent workflow

---

## Quick Start: Creating a New Client Site

### Step 1: Clone the Shell

```bash
# Clone to new client folder
git clone https://github.com/your-org/webdevpro-shell.git ClientName-Site
cd ClientName-Site

# Remove git history and start fresh
rm -rf .git
git init
git add .
git commit -m "Initial commit from WebDevPro Shell"
```

### Step 2: Update Configuration

Edit `_config.yml`:

```yaml
# Update these required fields
title: "Client Business Name"
tagline: "Their Tagline Here"
description: "Client-specific description..."
url: "https://clientdomain.com"
is_demo_template: false  # IMPORTANT: Set to false for client sites

# Update company info
company:
  owner: "Client Name"
  phone_display: "(555) 123-4567"
  phone_link: "+15551234567"
  license: "License info if applicable"
  address_line: "123 Business St"
  address_city: "City"
  address_region: "ST"
  address_postal_code: "12345"
  email: "contact@clientdomain.com"
```

### Step 3: Populate Data Files

See [Data Templates](#data-templates) section below for each file.

### Step 4: Add Client Assets

- `/assets/img/logo/` - Client logo files
- `/assets/img/portfolio/` - Project photos
- `/assets/img/hero/` - Hero images
- `/assets/img/team/` - Team photos (if applicable)

### Step 5: Build and Test

```bash
bundle install
bundle exec jekyll serve
# Open http://localhost:4000
```

---

## Data Templates

### `_data/home.yml`

Primary homepage content. Key sections:

```yaml
hero:
  eyebrow: "Licensed & Insured"
  eyebrow_line2: "Your Industry Tag"
  title: "Main Headline Here"
  subtitle: "Subheadline Here"
  summary: "2-3 sentence description of what the business does..."
  primary:
    label: "CTA Button Text"
    url: /contact/
  facts:
    - icon: "badge"
      label: "Credential"
      text: "License #12345"
    # Add 2-3 trust indicators

services:
  cards:
    - icon: service1
      title: "Service Name"
      description: "Service description..."
      details:
        - "Bullet point 1"
        - "Bullet point 2"
      url: "/services/#service1"
    # Repeat for each service
```

### `_data/services.yml`

Detailed service information:

```yaml
services:
  - id: service1
    name: "Service Display Name"
    icon: service1
    description: "Full service description..."
    points:
      - "Key benefit or feature 1"
      - "Key benefit or feature 2"
    url: "/services/#service1"
```

### `_data/navigation.yml`

Site navigation structure:

```yaml
primary:
  - id: services
    title: "Services"
    url: "/services/"
    # Add children for dropdown menus

secondary:
  - id: privacy
    title: "Privacy"
    url: "/privacy/"
```

### `_data/portfolio.yml`

Project/work examples:

```yaml
projects:
  - id: project1
    title: "Project Name"
    category: "service-type"
    description: "Project description..."
    image: "/assets/img/portfolio/project1.jpg"
    featured: true
```

### `_data/reviews.yml`

Customer testimonials:

```yaml
reviews:
  - name: "Customer Name"
    location: "City, State"
    date: "2026-01-15"
    rating: 5
    text: "Review text..."
    service: "Service they received"
```

---

## Custom Tools Integration

### Framework Location

Tool framework components are in:
- `_includes/tools/` - Tool component templates
- `/assets/js/tools-app.js` - Calculator logic framework
- `/assets/css/tools-app.css` - Tool styling

### Creating Industry-Specific Tools

1. **Define Calculator Logic** in `/assets/js/client-calculators.js`:

```javascript
// Example: Hauling Volume Calculator
const HaulingCalculators = {
  volumeEstimate: function(length, width, height, itemType) {
    const volume = length * width * height;
    const rates = {
      'furniture': 50,
      'appliances': 75,
      'construction': 40,
      'general': 45
    };
    return {
      volume: volume,
      estimatedCost: volume * (rates[itemType] || rates.general)
    };
  }
};
```

2. **Create Tool Interface** in `_includes/tools/`:

```html
<!-- _includes/tools/volume-calculator.html -->
<div class="tool-calculator" id="volume-calculator">
  <h3>Volume & Cost Estimator</h3>
  <!-- Input fields -->
  <!-- Results display -->
</div>
```

3. **Add to Tools Page**:

```liquid
{% include tools/volume-calculator.html %}
```

---

## Management Options for Clients

### Option 1: Full Management (Recommended for Most Clients)

**Setup:**
- Create repository under your organization
- Add client as viewer (optional)
- Deploy via Netlify/GitHub Pages

**Client Experience:**
- Requests changes via email/form
- We implement all updates
- Monthly reports on site performance

**Best For:** Busy business owners who want hands-off management

### Option 2: Collaborative Management

**Setup:**
- Create repository under client's GitHub account
- Add your team as collaborators with write access
- Set up branch protection rules

**Client Experience:**
- Can make simple content edits via GitHub UI
- Complex changes handled by your team
- Pull request workflow for review

**Best For:** Tech-comfortable clients who want involvement

### Option 3: Full Transfer

**Setup:**
- Build complete site
- Transfer repository ownership to client
- Provide comprehensive documentation

**Client Experience:**
- Full ownership and control
- Independent management
- Hourly support available when needed

**Best For:** Clients with in-house web capabilities

---

## Domain Configuration

### Option A: We Manage Domain

1. Register domain on client's behalf
2. Configure DNS for hosting provider
3. Handle renewals and SSL

### Option B: Client Owns, We Configure

1. Client purchases domain from preferred registrar
2. Provide DNS configuration instructions:

```
# For Netlify hosting
Type: CNAME
Name: www
Value: [site-name].netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

3. We verify and configure SSL

### Option C: Full Client Control

1. Provide comprehensive DNS documentation
2. Client handles all domain management
3. Support available if issues arise

---

## Deployment Options

### GitHub Pages (Free)

```yaml
# In _config.yml
url: "https://username.github.io"
baseurl: "/repository-name"
```

### Netlify (Recommended)

1. Connect repository to Netlify
2. Build command: `bundle exec jekyll build`
3. Publish directory: `_site`
4. Environment variables: `JEKYLL_ENV=production`

### Custom Server

Build and deploy `_site/` directory to any static hosting.

---

## Checklist: New Client Site

- [ ] Clone shell to new repository
- [ ] Update `_config.yml` with client info
- [ ] Set `is_demo_template: false`
- [ ] Replace logo and branding assets
- [ ] Populate `_data/home.yml`
- [ ] Populate `_data/services.yml`
- [ ] Populate `_data/navigation.yml`
- [ ] Add portfolio images and data
- [ ] Add customer reviews
- [ ] Configure forms endpoint
- [ ] Set up hosting (Netlify/GitHub Pages)
- [ ] Configure domain
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Client review and approval
- [ ] Go live!

---

## File Reference

```
├── _config.yml          # Site configuration (EDIT FIRST)
├── _data/
│   ├── home.yml         # Homepage content
│   ├── navigation.yml   # Navigation structure
│   ├── services.yml     # Service details
│   ├── portfolio.yml    # Project gallery
│   ├── reviews.yml      # Testimonials
│   └── faq.yml          # FAQ content
├── _includes/
│   ├── components/      # Reusable UI components
│   ├── sections/        # Page sections
│   ├── hero/            # Hero variations
│   └── tools/           # Calculator framework
├── _layouts/
│   └── default.html     # Main layout
├── assets/
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript
│   └── img/             # Images (add client assets)
├── index.md             # Homepage
├── about.html           # About page
├── services.html        # Services page
├── portfolio.html       # Portfolio page
├── contact.html         # Contact page
└── tools.html           # Tools page (customize per client)
```

---

## Support

For questions about this shell or client implementations:

- Documentation: See inline comments in data files
- Issues: Create GitHub issue in shell repository
- Direct: Contact development team

---

*WebDevPro Shell v1.0 - Last Updated: January 2026*
