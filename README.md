# HC Finvest Website

![HC Finvest Logo](HC%20Finvest%20Website/assets/images/hcfinvestlogolight.png)

Welcome to the official **HC Finvest Website** repository! This project hosts the front-end code for the HC Finvest online platform, a modern, responsive, and dynamic website designed to offer a premium experience for traders and investors.

## 🚀 Overview

HC Finvest is a comprehensive financial portal providing users with information on various trading markets, account tiers, platform features, and educational resources. The website emphasizes visual excellence, smooth micro-animations, and a professional aesthetic aligning with the brand's premium identity.

### Key Features
*   **Dynamic Markets Integration**: Dedicated pages for Forex, Commodities, Stocks, Cryptocurrencies, Indices, and Metals.
*   **Account Tiers Overview**: Detailed comparisons for Starter, Pro Trader, Zero Spread, and Elite accounts.
*   **Modern Animations**: Utilizes GSAP, AOS, and custom pre-loaders for a seamless, interactive user experience.
*   **Fully Responsive**: Built with Bootstrap, ensuring mobile-first compatibility across all devices.
*   **Security & Compliance**: Integrated Privacy Policy and secure portal routing.

## 🛠️ Technology Stack

*   **HTML5 & CSS3**: Core semantic structure and vanilla styling.
*   **JavaScript (ES6+)**: Custom DOM manipulation and interactivity.
*   **Bootstrap**: Responsive grid and layout framework.
*   **jQuery**: Dependency management for vendor plugins.
*   **Animation Libraries**: GSAP, AOS, WOW.js, Sal.js, Vegas.js.
*   **Carousel & Sliders**: Owl Carousel, Swiper, Slick.

## 📂 Project Structure

```text
├── Documents/            # Documentation and summary reports
├── HC Finvest Website/   # Main source directory containing HTML, CSS, JS, and Assets
│   ├── assets/           # Images, Videos, CSS, JS, and Vendor plugins
│   ├── index.html        # Main landing page
│   ├── about.html        # About Us page
│   ├── accounts.html     # Account comparison and details
│   ├── markets*.html     # Individual market pages
│   └── privacy-policy.html # Legal and privacy documentation
├── Testing/              # Testing and utility synchronization scripts
└── .gitignore            # Git exclusion rules
```

## 💻 Running the Project Locally

Because this is a static HTML/JS/CSS website, no complex build processes or transpilers are required. However, due to external resources and CORS policies, it is highly recommended to run the project through a local development server rather than opening the files directly.

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Hc-Finvest/HcFinvest-Website.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd HcFinvest-Website
   ```

3. **Start a Local Server**
   You can use any local web server. Examples include:
   *   **VS Code Live Server**: Open `index.html` and click "Go Live"
   *   **Node.js (http-server)**: `npx http-server`
   *   **Python**: `python -m http.server 3000`
   
4. **View in Browser**
   Open your browser and navigate to `http://localhost:3000` (or the port specified by your server).

## 🔒 Contributing & Best Practices

When contributing to this repository, please adhere to the following best practices:
*   **Single Source of Truth**: Maintain consistent headers and footers across all pages. Use the synchronization scripts located in the `Testing/` directory if bulk updates are needed.
*   **No Patchwork**: Solve the root cause of UI/UX issues rather than applying temporary CSS hacks.
*   **Asset Management**: Keep all new images and videos within the appropriate `assets/` subdirectories and ensure they are properly compressed.

## 📱 Connect With Us

Stay updated with our latest news and features:
*   **Instagram**: [@hcfinvest](https://www.instagram.com/hcfinvest/)
*   **YouTube**: [@hcfinvest](https://www.youtube.com/@hcfinvest)

---
*Copyright © 2026 HC Finvest. All rights reserved.*
