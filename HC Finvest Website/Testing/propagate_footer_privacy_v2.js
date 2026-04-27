const fs = require('fs');
const baseDir = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website/';
const indexContent = fs.readFileSync(baseDir + 'index.html', 'utf8');

const footerRegex = /<footer class="footer-style1">[\s\S]*?<\/footer>/;
const match = indexContent.match(footerRegex);

if (match) {
    const newFooter = match[0];
    const files = ['privacy-policy.html'];

    files.forEach(file => {
        const filePath = baseDir + file;
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf8');
            content = content.replace(footerRegex, newFooter);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated footer in ' + file);
        }
    });
} else {
    console.log('Could not find footer in index.html');
}
