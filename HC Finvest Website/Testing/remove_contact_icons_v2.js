const fs = require('fs');
const file = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website/contact.html';
let content = fs.readFileSync(file, 'utf8');

// Replace the banner icons block
const newContent = content.replace(/<!-- Background Decorative Icons[\s\S]*?<div class="banner-icons-overlay">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '');

fs.writeFileSync(file, newContent, 'utf8');
console.log('Done');
