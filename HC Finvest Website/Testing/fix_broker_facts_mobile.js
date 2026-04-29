const fs = require('fs');

const css = `

/* ==========================================================================
   Broker Facts Section Fixes (Mobile)
   ========================================================================== */
@media only screen and (max-width: 767px) {
    .trader-broker-style1__content li+li {
        margin-top: 20px !important;
    }
    
    .single-trader-broker-style1 {
        flex-direction: column !important;
        justify-content: center !important;
        text-align: center !important;
    }
    
    .single-trader-broker-style1 .title, 
    .single-trader-broker-style1 .title2 {
        max-width: 280px !important;
        margin: 15px auto 0 !important;
        text-align: center !important;
        padding: 12px 20px !important;
        order: 2;
    }
    
    .single-trader-broker-style1 .icon {
        margin: 0 auto !important;
        order: 1;
    }

    .trader-broker-style1__img {
        margin: 40px auto !important;
    }
}
`;

fs.appendFileSync('assets/css/responsive.css', css);
console.log('Mobile broker facts fixes appended to responsive.css');
