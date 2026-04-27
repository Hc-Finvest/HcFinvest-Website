const fs = require('fs');
const baseDir = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website/';
const indexContent = fs.readFileSync(baseDir + 'index.html', 'utf8');

const headerRegex = /<header class="main-header main-header-style2">[\s\S]*?<\/header>/;
const match = indexContent.match(headerRegex);

if (match) {
    const newHeader = match[0];
    const files = ['about.html', 'contact.html', 'faq.html', 'privacy-policy.html'];

    files.forEach(file => {
        const filePath = baseDir + file;
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf8');
            content = content.replace(headerRegex, newHeader);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated header in ' + file);
        }
    });
} else {
    console.log('Could not find header in index.html');
}
