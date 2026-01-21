# WebDevPro - Professional Website Theme Shell

A high-quality, conversion-optimized website template system for contractors and small businesses. Built with Jekyll, managed via GitHub, and designed for transparency and ownership.

## 🎯 What Is This?

WebDevPro is a **professional website theme** that serves two purposes:

1. **Demo Site**: Show contractors what their website could look like
2. **Template Shell**: Quickly create new client websites using this proven framework

## ✨ Features

- **Mobile-First Design**: Responsive layouts that look great on all devices
- **SEO Optimized**: Built-in structure for search engine visibility
- **Fast Loading**: Static site architecture for blazing performance
- **GitHub Managed**: Full transparency and version control
- **Ownership Options**: Full management, collaborative, or complete transfer
- **Custom Tools Framework**: Calculator/estimator system ready for customization
- **Data-Driven Content**: All content managed via simple YAML files

## 📁 Project Structure

```
├── _config.yml          # Site configuration
├── _data/               # Content data files
│   ├── home.yml         # Homepage content
│   ├── navigation.yml   # Navigation structure
│   ├── services.yml     # Service listings
│   ├── reviews.yml      # Customer testimonials
│   ├── faq.yml          # FAQ content
│   └── templates/       # Blank templates for new sites
├── _includes/           # Reusable components
├── _layouts/            # Page layouts
├── assets/              # CSS, JS, images
├── index.md             # Homepage
├── about.html           # About page
├── services.html        # Services page
├── portfolio.html       # Portfolio page
├── contact.html         # Contact page
├── pricing.html         # Pricing page
├── tools.html           # Tools framework page
└── ...
```

## 🚀 Quick Start

### For Demo/Development

```bash
# Install dependencies
bundle install
npm install

# Start development server
bundle exec jekyll serve
# or
npm run dev
```

Visit `http://localhost:4000`

### For Creating New Client Sites

See [SHELL-README.md](SHELL-README.md) for complete instructions.

## 📋 Documentation

- **[SHELL-README.md](SHELL-README.md)** - Complete guide for creating new client sites
- **[CLIENT-GUIDE.md](CLIENT-GUIDE.md)** - Client-facing documentation for website owners
- **[_data/templates/](/_data/templates/)** - Blank data templates for easy content entry

## 🎨 Customization

### Quick Content Updates

All main content is in `_data/` folder:

1. Edit `_data/home.yml` for homepage content
2. Edit `_data/services.yml` for service listings
3. Edit `_data/navigation.yml` for menu structure
4. Add reviews to `_data/reviews.yml`

### Branding

1. Update `_config.yml` with client info
2. Replace logo in `/assets/img/logo/`
3. Update colors in `/assets/css/` (design tokens)

### Custom Tools

The tools framework in `/tools.html` and `/_includes/tools/` can be customized for any industry:
- Quote calculators
- Service estimators
- Volume calculators
- Booking systems

## 🏗️ Industries Supported

This template is designed for service businesses:

- **Plumbing** - Emergency-focused with prominent contact
- **Electrical** - Trust-building with credential display
- **HVAC** - Seasonal campaigns and maintenance plans
- **Hauling** - Volume calculators and easy booking
- **Landscaping** - Visual portfolios and seasonal content
- **General Contractors** - Project galleries and case studies
- **And more...**

## 💼 Management Options

### Option 1: Full Management
We handle everything. Client requests changes via email.

### Option 2: Collaborative
Client owns GitHub repo. We're collaborators. Shared responsibility.

### Option 3: Full Transfer
Complete handoff with training. Hourly support available.

See [CLIENT-GUIDE.md](CLIENT-GUIDE.md) for details.

## 📝 License

This template is proprietary. Contact for licensing information.

## 🤝 Support

For questions about this template or client implementations:

- Email: hello@webdevpro.demo
- Documentation: See inline comments in data files
- Issues: Create GitHub issue in this repository

---

**WebDevPro** - Professional Websites for Contractors & Small Businesses
