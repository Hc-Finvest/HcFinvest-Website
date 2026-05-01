# HC Finvest Website

Official corporate website for **HC Finvest**, a premium financial services provider specializing in Forex, CFD trading, and global market access.

## Project Overview
This repository contains the frontend and email infrastructure for the HC Finvest trading platform. The site is designed with a premium, high-end financial aesthetic, prioritizing performance, security, and a seamless user experience.

## Key Features
- **4-Tier Account System**: Integrated trading account options including Starter, Pro Trader, Zero Spread, and the new **Elite Account**.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing with advanced CSS animations.
- **Brand Identity**: Authentic branding with official App Store and Google Play colors, premium typography, and a cohesive blue-teal color palette.
- **Centralized Email Routing**: All forms (Contact, Newsletter, Account Inquiries) are routed through a standardized PHP backend to `support@heddgecapitals.com`.
- **AJAX-Powered Forms**: Seamless submission experience without page reloads using jQuery validation and AJAX.

## Technical Structure
- **Frontend**: HTML5, CSS3 (Vanilla + Bootstrap), JavaScript (jQuery, AOS, Owl Carousel).
- **Backend**: PHP (PHPMailer) for secure email handling.
- **Styling**: Modular CSS architecture for scalable maintenance.
- **Assets**: Optimized high-resolution financial imagery and vector-based icon systems.

## Account Types
The platform offers tailored solutions for all trading levels:
1. **Starter a/c**: Low entry point ($50) for new traders.
2. **Pro Trader a/c**: Enhanced spreads and leverage for growing portfolios.
3. **Zero Spread a/c**: Raw spreads starting from 0.0 pips for high-volume traders.
4. **Elite a/c**: Premium institutional-grade trading with exclusive commission rates.

## Form Submission Details
All lead capture forms site-wide have been standardized to include:
- `form_subject`: Identifies the specific source or intent of the submission (e.g., "Consultation Request", "Newsletter Subscription").
- **AJAX Integration**: Global handler in `assets/js/custom.js` for all forms pointing to `assets/inc/sendmail.php`.

## Maintenance & Audit
Project documentation and infrastructure audits are maintained in the `Documents/` directory:
- [Global Email Audit](Documents/Global_Email_Audit.md)

---
*Last Updated: 2026-05-01*
