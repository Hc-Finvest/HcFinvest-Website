const fs = require('fs');

const css = `

/* ==========================================================================
   Global Mobile Refinements & Overflow Fixes
   ========================================================================== */
@media only screen and (max-width: 767px) {
    html, body {
        overflow-x: hidden !important;
        width: 100% !important;
        position: relative !important;
    }
    
    .container {
        padding-left: 15px !important;
        padding-right: 15px !important;
        max-width: 100% !important;
    }
    
    .row {
        margin-left: -15px !important;
        margin-right: -15px !important;
    }
    
    /* Fix Broker Facts Spacing */
    .trader-broker-style1 {
        padding: 60px 0 40px !important;
    }
    
    .trader-broker-style1__content li+li {
        margin-top: 15px !important;
    }
    
    .single-trader-broker-style1 .title, 
    .single-trader-broker-style1 .title2 {
        box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05) !important;
        border: 1px solid rgba(0,0,0,0.05);
    }

    /* Better Platform Layout */
    .platforms-style1 {
        padding: 60px 0 !important;
    }
    
    .platforms-style1__img {
        margin-bottom: 20px !important;
    }
    
    .platforms-style1__content {
        padding-top: 20px !important;
    }

    /* Market Cards Refinement */
    .pricing-list-style1__inner ul li {
        width: 100% !important;
        border-right: none !important;
        border-bottom: 1px solid var(--thm-border-color);
        padding: 20px 15px !important;
    }
    
    .pricing-list-style1__inner ul li:last-child {
        border-bottom: none !important;
    }
}
`;

fs.appendFileSync('assets/css/responsive.css', css);
console.log('Global mobile refinements appended to responsive.css');
