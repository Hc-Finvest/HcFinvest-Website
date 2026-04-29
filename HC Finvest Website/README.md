# Heddge Capitals Website

Official corporate website for **Heddge Capitals**, a premium financial services provider specializing in digital trading, forex, and wealth management.

## Project Overview
This repository contains the frontend and email infrastructure for the Heddge Capitals web platform. The site is designed with a high-end, professional aesthetic using a dark blue and teal brand palette.

## Key Features
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Centralized Email Routing**: All forms (Contact, Lead Gen, Newsletter) are routed through a standardized PHP backend to `support@heddgecapitals.com`.
- **AJAX-Powered Forms**: Seamless submission experience without page reloads using jQuery validation and AJAX.
- **Brand Identity**: Consistent use of Heddge Capitals branding, including circular social media icons and premium typography.

## Technical Structure
- **Frontend**: HTML5, CSS3, JavaScript (jQuery).
- **Backend**: PHP (PHPMailer) for email handling.
- **Styling**: Modular CSS structure with theme-specific components.
- **Assets**: Optimized financial imagery and SVG/Icon fonts for high performance.

## Form Submission Details
All lead capture forms site-wide have been standardized to include:
- `form_subject`: Identifies the specific source or intent of the submission (e.g., "Newsletter Subscription", "Trade Calculator Inquiry").
- **AJAX Integration**: Global handler in `assets/js/custom.js` for all forms pointing to `assets/inc/sendmail.php`.

## Maintenance & Audit
A full audit of the email routing and form infrastructure is available in the `Documents/` directory:
- [Global Email Audit](Documents/Global_Email_Audit.md)

---
*Last Updated: 2026-04-29*
