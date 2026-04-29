const fs = require('fs');
const path = require('path');

const directoryPath = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website';

function processFiles(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'assets') {
                processFiles(filePath);
            }
        } else if (file.endsWith('.html')) {
            let content = fs.readFileSync(filePath, 'utf8');

            // More flexible regex to handle whitespace and line breaks
            const pattern = /<div class="btn-box">\s*<a href="https:\/\/trade\.hcfinvest\.com\/user\/signup" class="btn-one"\s*target="_blank" rel="noopener noreferrer">\s*<span class="txt">\s*New Account\s*<i class="icon-right-arrow"><\/i>\s*<\/span>\s*<\/a>\s*<a href="https:\/\/trade\.hcfinvest\.com\/user\/login" class="btn-one" target="_blank"\s*rel="noopener noreferrer">\s*<span class="txt">\s*Sign In\s*<i class="icon-right-arrow"><\/i>\s*<\/span>\s*<\/a>\s*<\/div>/g;
            
            const replacement = `<div class="footer-btn-box">
                                        <a href="https://trade.hcfinvest.com/user/signup" class="footer-btn btn-signup" target="_blank" rel="noopener noreferrer">
                                            <span>New Account</span>
                                            <i class="icon-right-arrow"></i>
                                        </a>
                                        <a href="https://trade.hcfinvest.com/user/login" class="footer-btn btn-signin" target="_blank" rel="noopener noreferrer">
                                            <span>Sign In</span>
                                            <i class="icon-right-arrow"></i>
                                        </a>
                                    </div>`;

            const newContent = content.replace(pattern, replacement);
            
            if (content !== newContent) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                console.log(`Updated ${file}`);
            }
        }
    });
}

processFiles(directoryPath);
