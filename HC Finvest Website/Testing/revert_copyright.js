const fs = require('fs');
const path = require('path');

const directory = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website';

function updateFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('Copyright © 2026')) {
        const newContent = content.replace(/Copyright © 2026 /g, 'Copyright © 2025 ');
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            // Skip assets/vendors
            if (file !== 'assets') {
                processDirectory(filePath);
            }
        } else if (file.endsWith('.html')) {
            updateFile(filePath);
        }
    });
}

processDirectory(directory);
console.log('Revert complete.');
