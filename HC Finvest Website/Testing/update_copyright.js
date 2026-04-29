const fs = require('fs');
const path = require('path');

const rootDir = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            if (f !== 'node_modules' && f !== 'assets') {
                walkDir(dirPath, callback);
            }
        } else {
            callback(path.join(dir, f));
        }
    });
}

walkDir(rootDir, (filePath) => {
    if (filePath.endsWith('.html')) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('Copyright © 2025')) {
            let updatedContent = content.replace(/Copyright © 2025/g, 'Copyright © 2026');
            fs.writeFileSync(filePath, updatedContent, 'utf8');
            console.log(`Updated copyright in: ${filePath}`);
        }
    }
});
