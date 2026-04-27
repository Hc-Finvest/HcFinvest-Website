const fs = require('fs');
const path = require('path');
const file = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website/privacy-policy.html';

let content = fs.readFileSync(file, 'utf8');

// The main container background and text color
content = content.replace(/background: var\(--thm-black-bg-2\);/g, 'background: var(--thm-gray-bg);');
content = content.replace(/color: var\(--thm-body-font-color-2\);/g, 'color: var(--thm-body-font-color);');

// The headings color from white to black/heading-color
content = content.replace(/color: var\(--thm-white\);/g, 'color: var(--thm-heading-font-color);');

// Let's also ensure the h3 are updated if they have white (which they do)
// And the links color from primary to something readable, or keep primary. 
// Link has: <a href="..." style="color: var(--thm-primary-color); font-weight: bold;">
// Let's leave the link color alone, primary color (#6bddd9) might be a bit light on white background.
// I will change link color to var(--thm-black-bg) which is #125c72 (dark teal)
content = content.replace(/color: var\(--thm-primary-color\);/g, 'color: var(--thm-black-bg);');

// The hr borders are var(--thm-border-color-1) which is #103e33 (very dark).
// We can change them to var(--thm-border-color) which is #e2eaea
content = content.replace(/border-top: 1px solid var\(--thm-border-color-1\);/g, 'border-top: 1px solid var(--thm-border-color);');

fs.writeFileSync(file, content, 'utf8');
console.log('Done');
