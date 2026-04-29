const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'assets', 'css', 'module-css', '07-footer-section.css');
let content = fs.readFileSync(cssPath, 'utf8');

content = content.replace(/width: 100%;\s*\}\s*\.footer-main-bottom__inner \.middle-box li \{/, '} \n\n.footer-main-bottom__inner .middle-box li {');
fs.writeFileSync(cssPath, content, 'utf8');
console.log('Fixed width');
