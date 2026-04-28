const fs = require('fs');
const path = require('path');

const dir = 'd:\\HcFinvest\\HC Finvest Website\\HC Finvest Website';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let count = 0;
files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    const regex = /<a(\s+)href="https:\/\/trade\.hcfinvest\.com\/user\/login">Platform<\/a>/g;
    
    if (regex.test(content)) {
        const newContent = content.replace(regex, '<a$1href="https://trade.hcfinvest.com/user/login" target="_blank" rel="noopener noreferrer">Platform</a>');
        fs.writeFileSync(filePath, newContent, 'utf-8');
        count++;
    }
});

console.log(`Updated ${count} files.`);
