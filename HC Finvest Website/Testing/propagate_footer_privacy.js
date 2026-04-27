const fs = require('fs');
const files = ['privacy-policy.html'];
const baseDir = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website/';

const indexContent = fs.readFileSync(baseDir + 'index.html', 'utf8');
const footerMainStart = indexContent.indexOf('<div class="footer-main">');
const footerBottomStart = indexContent.indexOf('<div class="footer-bottom">');
const newFooterMain = indexContent.slice(footerMainStart, footerBottomStart);

files.forEach(file => {
    const filePath = baseDir + file;
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        const start = content.indexOf('<div class="footer-main">');
        const end = content.indexOf('<div class="footer-bottom">');
        if (start !== -1 && end !== -1) {
            content = content.slice(0, start) + newFooterMain + content.slice(end);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Fixed footer in ' + file);
        } else {
            console.log('Could not find footer in ' + file);
        }
    }
});
