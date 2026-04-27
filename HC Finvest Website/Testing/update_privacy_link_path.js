const fs = require('fs');
const path = require('path');

const dir = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let updatedFiles = 0;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace in headers/navigation and footers
    if (content.includes('href="privacy-policy.html"')) {
        content = content.replace(/href="privacy-policy\.html"/g, 'href="/privacy-policy.html"');
        fs.writeFileSync(filePath, content, 'utf8');
        updatedFiles++;
    }
});

console.log(`Updated ${updatedFiles} files to use root-relative path for Privacy Policy.`);
