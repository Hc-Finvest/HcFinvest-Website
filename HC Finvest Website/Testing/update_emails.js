const fs = require('fs');
const path = require('path');

const directory = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website';

const replacements = [
    { from: /support@hcfinvest\.com/g, to: 'support@heddgecapitals.com' },
    { from: /info@example\.com/g, to: 'support@heddgecapitals.com' },
    { from: /templatecform@gmail\.com/g, to: 'support@heddgecapitals.com' },
    { from: /spam\.thememascot@gmail\.com/g, to: 'support@heddgecapitals.com' },
    { from: /contact@HC Finvest\.com/g, to: 'support@heddgecapitals.com' },
    { from: /sendyourmail@HC Finvest\.com/g, to: 'support@heddgecapitals.com' },
    { from: /template_path/g, to: 'Heddge Capitals Support' },
    { from: /ThemeMascot/g, to: 'Heddge Capitals Support' }
];

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    replacements.forEach(r => {
        if (r.from.test(content)) {
            content = content.replace(r.from, r.to);
            changed = true;
        }
    });

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (file !== 'assets' || filePath.includes('inc')) {
                processDirectory(filePath);
            }
        } else if (file.endsWith('.html') || file.endsWith('.php')) {
            updateFile(filePath);
        }
    });
}

// Special case for assets/inc
processDirectory(path.join(directory, 'assets/inc'));
processDirectory(directory);

console.log('Global email update complete.');
