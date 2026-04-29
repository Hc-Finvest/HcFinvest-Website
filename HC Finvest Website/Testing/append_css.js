const fs = require('fs');

const css = `
/* ==========================================================================
   Global Premium Image Styling (Creative Borders & Shadows)
   ========================================================================== */

.premium-image:not([src*="logo"]) {
    border-radius: 60px 5px 60px 5px !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
    border: 2px solid rgba(var(--thm-primary-color-rgb), 0.4) !important;
    transition: all 0.4s ease-in-out !important;
    z-index: 2;
    position: relative;
}

.premium-image:not([src*="logo"]):hover {
    transform: scale(1.03) !important;
    box-shadow: 0 30px 60px rgba(0,0,0,0.2) !important;
    border-color: var(--thm-primary-color) !important;
}

/* Creative Overlays (Frame Effect) */
.premium-image-wrap:has(> .premium-image:not([src*="logo"])) {
    position: relative;
    z-index: 1;
    display: inline-block;
}

.premium-image-wrap:has(> .premium-image:not([src*="logo"]))::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    width: 100%;
    height: 100%;
    border: 2px dashed rgba(var(--thm-primary-color-rgb), 0.5);
    border-radius: 60px 5px 60px 5px;
    z-index: 0;
    pointer-events: none;
    transition: all 0.4s ease-in-out;
}

.premium-image-wrap:has(> .premium-image:not([src*="logo"]):hover)::before {
    top: -20px;
    left: -20px;
    border-color: var(--thm-primary-color);
    box-shadow: inset 0 0 15px rgba(var(--thm-primary-color-rgb), 0.2);
}

/* Decorative Background Pattern */
.premium-image-wrap:has(> .premium-image:not([src*="logo"]))::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: -15px;
    width: 80px;
    height: 80px;
    background-image: radial-gradient(circle, var(--thm-primary-color) 2px, transparent 2.5px);
    background-size: 10px 10px;
    opacity: 0.6;
    z-index: 0;
    pointer-events: none;
    transition: all 0.4s ease-in-out;
}

.premium-image-wrap:has(> .premium-image:not([src*="logo"]):hover)::after {
    bottom: -25px;
    right: -25px;
    opacity: 1;
    transform: rotate(10deg);
}
`;

fs.appendFileSync('assets/css/style.css', css);
console.log('Appended CSS to style.css');
