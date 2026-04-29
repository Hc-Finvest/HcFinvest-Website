const fs = require('fs');

const css = `

/* ==========================================================================
   Mobile Responsive Overlap Fixes — @media max-width: 767px
   Root causes: absolute positioning with negative offsets, hardcoded
   pixel paddings/margins, and missing flex-wrap on column layouts.
   ========================================================================== */

@media only screen and (max-width: 767px) {

    /* ── Global Section Safety ───────────────────────────────── */
    section,
    .section-padding,
    [class*="-style1"],
    [class*="-style2"],
    [class*="-style3"] {
        overflow: visible;
        position: relative;
    }

    /* ── Global Image Safety ─────────────────────────────────── */
    img {
        max-width: 100%;
        height: auto;
    }

    /* ── Global Flex Wrap ────────────────────────────────────── */
    .row,
    [class*="__inner"],
    [class*="__top"],
    [class*="__bottom"] {
        flex-wrap: wrap !important;
    }

    /* =====================================================
       PLATFORMS SECTION (Biggest offender)
       Fixes: absolute image overlapping, 600px padding
    ====================================================== */
    .platforms-style1 {
        padding: 60px 0 60px;
        overflow: hidden;
    }

    .platforms-style1 .sec-title {
        padding-left: 0 !important;
        padding-bottom: 30px;
        text-align: center;
    }

    /* Unpin the image from absolute and let it flow naturally */
    .platforms-style1__img {
        position: relative !important;
        top: 0 !important;
        left: 0 !important;
        width: 100%;
        margin-bottom: 30px;
    }

    .platforms-style1__img .inner {
        padding: 0 20px;
    }

    .platforms-style1__img .inner img {
        width: 100%;
        max-width: 340px;
        margin: 0 auto;
        display: block;
    }

    .platforms-style1__content {
        padding-left: 0 !important;
        padding-top: 30px;
    }

    .platforms-style1-downlode {
        margin-left: 0 !important;
        padding-top: 30px;
    }

    .platforms-style1-downlode .row {
        justify-content: center;
    }

    .platforms-style1-downlode-single {
        margin-bottom: 20px;
    }

    .platforms-style1__tab .tabs-content-box {
        padding: 0;
    }

    /* =====================================================
       TRADER BROKER / ABOUT SECTION
       Fixes: pattern overflowing with -135px offset
    ====================================================== */
    .trader-broker-style1 {
        padding: 60px 0;
        overflow: hidden;
    }

    .trader-broker-style1__img .pattern {
        display: none !important;
    }

    .trader-broker-style1__img .inner {
        max-width: 300px;
        margin: 0 auto 40px;
    }

    .trader-broker-style1__content {
        max-width: 100%;
        margin: 0 auto;
        padding: 0 15px;
    }

    /* =====================================================
       MARKET SECTION CARDS
    ====================================================== */
    .market-style1 {
        padding: 60px 0;
    }

    .market-style1 .row {
        justify-content: center;
    }

    /* =====================================================
       SERVICES SECTION
    ====================================================== */
    .services-style1 {
        padding: 60px 0;
        overflow: hidden;
    }

    .single-service-style1 {
        margin-bottom: 30px;
    }

    /* =====================================================
       FACT COUNTER SECTION
    ====================================================== */
    .fact-counter-style1 {
        padding: 50px 0;
    }

    .fact-counter-style1__progress {
        overflow: hidden;
        padding: 40px 15px 30px;
    }

    /* =====================================================
       TESTIMONIAL SECTION
    ====================================================== */
    .testimonial-style2 {
        padding: 60px 0;
    }

    .testimonial-style2 .row {
        justify-content: center;
    }

    .single-testimonial-style2 {
        margin-bottom: 30px;
    }

    /* =====================================================
       BLOG SECTION
    ====================================================== */
    .blog-style2 {
        padding: 60px 0;
    }

    .blog-style2 .row {
        justify-content: center;
    }

    /* =====================================================
       BANNER / HERO SECTION
    ====================================================== */
    .banner-style1 {
        overflow: hidden;
    }

    .banner-style1-dashboard {
        max-width: 100% !important;
        overflow: hidden;
    }

    /* =====================================================
       PREMIUM IMAGE WRAP — disable corner brackets on xs
       (prevents negative overflow on tiny screens)
    ====================================================== */
    .premium-image-wrap:has(> .premium-image:not([src*="logo"]))::before,
    .premium-image-wrap:has(> .premium-image:not([src*="logo"]))::after {
        display: none !important;
    }

    .premium-image:not([src*="logo"]) {
        border-radius: 14px 3px 14px 3px !important;
        max-width: 100%;
        width: 100%;
    }

    /* =====================================================
       CHOOSE / HOW-IT-WORKS SECTION
    ====================================================== */
    .choose-style1 {
        overflow: hidden;
    }

    .choose-style1__img {
        margin: 30px 0;
        overflow: hidden;
    }

    /* =====================================================
       BREADCRUMB (Page Header)
    ====================================================== */
    .page-header-style1 {
        padding: 80px 0 60px;
        min-height: auto;
    }

    /* =====================================================
       ACCOUNT SECTION
    ====================================================== */
    .account-style1 {
        overflow: hidden;
    }

    /* =====================================================
       GLOBAL: no section should have fixed height
    ====================================================== */
    section[style*="height"] {
        height: auto !important;
        min-height: 0 !important;
    }
}

/* ==========================================================================
   Small Mobile Fixes — @media max-width: 480px
   ========================================================================== */
@media only screen and (max-width: 480px) {
    .sec-title h2 {
        font-size: 26px !important;
        line-height: 1.3em !important;
    }

    .platforms-style1-downlode-single {
        padding: 25px 15px 30px;
    }

    .trader-broker-style1__img .inner {
        max-width: 240px;
    }

    .premium-image:not([src*="logo"]) {
        border-radius: 10px !important;
    }
}
`;

fs.appendFileSync('assets/css/responsive.css', css);
console.log('Mobile overlap fixes appended to responsive.css');
