# Implementation Plan - Global Email & Form Routing

## Goal
Centralize and correct all form submission and contact email routing across the entire website to `support@heddgecapitals.com`.

## Tasks

### 1. PHP Backend Standardization
- [x] Update `assets/inc/sendmail.php` recipient and sender headers.
- [x] Update `assets/inc/appointment.php` recipient and sender headers.
- [x] Update `assets/inc/sendemail-with-autoresponder.php` recipient and sender headers.
- [ ] Modify `sendmail.php` to handle diverse form types (Newsletter, Lead Forms) by making `form_name` and `form_subject` optional with defaults.

### 2. HTML Form Audit & Correction
- [ ] Search for all `<form>` tags and ensure their `action` points to a valid handler (`assets/inc/sendmail.php` or `appointment.php`).
- [ ] Add hidden fields for `form_subject` to forms like Newsletter (e.g., "Newsletter Subscription") and Lead Forms (e.g., "Consultation Request").
- [ ] Ensure all "Open Account" or "Get Started" buttons point to the correct registration URL or a lead form.

### 3. JavaScript AJAX Handler Update
- [ ] Update `assets/js/custom.js` to include validation and AJAX submission for:
    - `#quick-contact-form`
    - `#trade-calculator-form`
    - `#contact-style1__form`
    - Newsletter forms (if applicable).

### 4. Global Search & Replace (Final Sweep)
- [x] Run `update_emails.js` to replace all `info@example.com` and legacy emails.
- [ ] Final manual check of `mailto:` links in footer and headers.

### 5. Documentation
- [ ] Create `Documents/Global_Email_Audit.md` detailing all communication points.
- [ ] Create `Testing/Form_Validation_Log.md` for testing results.

## Success Criteria
- All forms submit via AJAX without page reload (where supported).
- All emails arrive at `support@heddgecapitals.com`.
- No placeholder emails remain in the codebase.
