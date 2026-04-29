# Global Email and Form Submission Audit Report

## 1. Primary Contact Information
All global contact points have been standardized to the official support address.
- **Support Email**: `support@heddgecapitals.com`
- **Mailto Links**: All instances in headers, footers, and contact sections have been updated.

## 2. Form Handlers (PHP Backend)
The following PHP scripts in `assets/inc/` have been updated with correct brand identity and flexible field handling:
- **`sendmail.php`**: Handles most lead forms and newsletters.
- **`appointment.php`**: Handles the consultation/appointment requests.
- **`sendemail-with-autoresponder.php`**: Handles specific automated response flows.

### Technical Updates:
- **SetFrom**: Standardized to `support@heddgecapitals.com`.
- **AddReplyTo**: Dynamically set to the user's submitted email address.
- **Flexibility**: Scripts now handle missing `form_name` and `form_subject` fields with professional defaults, allowing them to serve diverse form types (e.g., Newsletter).

## 3. Frontend Forms Audit
The following forms have been audited and updated to ensure functional routing via AJAX:

| Form ID / Type | Location | Action Handler | Subject Line |
| :--- | :--- | :--- | :--- |
| `#contact-form` | `contact.html` | `sendmail.php` | User Defined |
| `#quick-contact-form`| `contact.html` | `sendmail.php` | Quick Call Request |
| `#trade-calculator-form`| `index.html` | `sendmail.php` | Trade Calculator Inquiry |
| `#contact-style1__form`| `index.html` | `sendmail.php` | Consultation Request |
| Newsletter Forms | Global (Footer/Sidebar)| `sendmail.php` | Newsletter Subscription |

## 4. JavaScript Integration
- **`assets/js/custom.js`**: Updated to automatically handle any form pointing to `assets/inc/sendmail.php` using the `jquery.validate` and `ajaxSubmit` plugins. This ensures a smooth user experience without page reloads.

## 5. Security & Deliverability
- **Sender Verification**: By setting the `From` address to the official brand email, we improve deliverability and reduce the likelihood of emails being flagged as spam.
- **Data Integrity**: All lead capture forms now include a hidden `form_subject` field to help identify the source of the lead in the support inbox.

## 6. Verification Results
- **Global Scan**: A site-wide regex search confirmed NO remaining instances of placeholder emails (`example.com`, `steelthemes.com`, `ismail-hossain.me`).
- **SMTP Identity**: Updated SMTP usernames in all handlers to `support@heddgecapitals.com` for consistency.
- **Autoresponder**: Updated to professional brand signature ("Heddge Capitals Team").

---
*Verified on: April 29, 2026*
