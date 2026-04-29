const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'assets', 'css', 'responsive.css');
let content = fs.readFileSync(cssPath, 'utf8');

// Replace flex-direction: column for middle-box
content = content.replace(/.footer-main-bottom__inner \.middle-box \{\s*margin: 30px 0 30px;\s*flex-direction: column;\s*\}/, `.footer-main-bottom__inner .middle-box {\n        margin: 30px 0 30px;\n        flex-direction: row;\n        justify-content: center;\n        flex-wrap: wrap;\n    }`);

// Replace middle-box li+li margin
content = content.replace(/.footer-main-bottom__inner \.middle-box li\+li \{\s*margin-top: 20px;\s*\}/, `.footer-main-bottom__inner .middle-box li+li {\n        margin-top: 0;\n    }`);

fs.writeFileSync(cssPath, content, 'utf8');
console.log('Updated responsive.css');
