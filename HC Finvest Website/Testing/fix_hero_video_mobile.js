const fs = require('fs');

const css = `

/* ==========================================================================
   Hero Banner Video Fixes (Mobile)
   ========================================================================== */
@media only screen and (max-width: 767px) {
    .banner-style1 {
        display: flex !important;
        flex-direction: column-reverse !important;
        padding-top: 80px !important;
    }
    
    .video-bg-container {
        position: relative !important;
        left: 0 !important;
        width: 100% !important;
        height: 400px !important;
        z-index: 1 !important;
    }
    
    .video-bg {
        object-position: center !important;
    }

    .banner-style1__content {
        padding: 0px 15px 30px !important;
    }
}
`;

fs.appendFileSync('assets/css/responsive.css', css);
console.log('Mobile hero video fixes appended to responsive.css');
