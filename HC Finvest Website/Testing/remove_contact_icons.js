const fs = require('fs');
const file = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website/contact.html';
let content = fs.readFileSync(file, 'utf8');

// Use regex to remove the block
content = content.replace(/\s*<!-- Background Decorative Icons \(Smart CSS handled\) -->\s*<div class="banner-icons-overlay">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, (match) => {
    // Wait, the div closes 3 times, let's just do a tighter regex.
    return '';
});

// Let's do a safer string replace or a tighter regex
const blockStart = '<!-- Background Decorative Icons (Smart CSS handled) -->';
const blockEnd = '            </div>\r\n\r\n            <!-- Foreground Content (z-index handled by section flow) -->';

const startIndex = content.indexOf(blockStart);
const foregroundIndex = content.indexOf('<!-- Foreground Content (z-index handled by section flow) -->');

if (startIndex !== -1 && foregroundIndex !== -1) {
    content = content.substring(0, startIndex) + '            ' + content.substring(foregroundIndex);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Removed icons');
} else {
    console.log('Could not find block');
}
