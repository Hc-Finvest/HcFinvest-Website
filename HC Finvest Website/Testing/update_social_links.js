const fs = require('fs');
const path = require('path');
const baseDir = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website/';

const files = fs.readdirSync(baseDir).filter(file => file.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(baseDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Footer YouTube
    content = content.replace(/href="https:\/\/www\.youtube\.com\/"/g, 'href="https://www.youtube.com/@hcfinvest" target="_blank"');
    
    // 2. Footer Instagram
    content = content.replace(/href="https:\/\/www\.instagram\.com\/"/g, 'href="https://www.instagram.com/hcfinvest/" target="_blank"');
    
    // 3. Sidebar Instagram
    content = content.replace(/<a href="#">(\s*<i class="icon-instagram-logo"><\/i>\s*)<\/a>/g, '<a href="https://www.instagram.com/hcfinvest/" target="_blank">$1</a>');
    
    // 4. Sidebar YouTube
    content = content.replace(/<a href="#">(\s*<i class="icon-youtube"><\/i>\s*)<\/a>/g, '<a href="https://www.youtube.com/@hcfinvest" target="_blank">$1</a>');
    
    // 5. Mobile Nav Instagram
    content = content.replace(/<a href="#" class="fab fa-instagram"><\/a>/g, '<a href="https://www.instagram.com/hcfinvest/" target="_blank" class="fab fa-instagram"></a>');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + file);
});
