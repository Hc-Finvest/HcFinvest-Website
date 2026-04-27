const fs = require('fs');
const path = require('path');

const dir = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let updatedFiles = 0;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it has FAQ's but NO Privacy Policy in the About dropdown
    // Let's just find the exact line `<li><a href="faq.html">FAQ’s</a></li>`
    // and if the next few lines don't contain privacy-policy.html, we insert it.
    
    // A simpler way: we just find `<li><a href="faq.html">FAQ’s</a></li>`
    // and replace it with `<li><a href="faq.html">FAQ’s</a></li>\n                                                                <li><a href="/privacy-policy.html">Privacy Policy</a></li>`
    // ONLY if `privacy-policy.html` is not already present in that block.
    
    // Let's look for `faq.html` in the file.
    if (content.includes('<li><a href="faq.html">FAQ’s</a></li>')) {
        // If the file doesn't have privacy-policy in the nav (we can just check if it has /privacy-policy.html anywhere near FAQ)
        // To be safe, we do a global regex replace, but check if we aren't doubling up.
        
        // Actually, the header is repeated twice (sticky and normal) or just once?
        // Let's use regex with a negative lookahead to ensure we don't insert it if it already exists right after.
        const regex = /(<li><a href="faq.html">FAQ’s<\/a><\/li>)(?![\s\S]*?<a href="\/privacy-policy\.html">)/;
        
        // Let's just do a string split and check.
        const parts = content.split('<li><a href="faq.html">FAQ’s</a></li>');
        if (parts.length > 1) {
            let modified = false;
            for (let i = 0; i < parts.length - 1; i++) {
                // Check if the next part starts with the privacy policy link (ignoring whitespace and comments)
                const nextPart = parts[i + 1].trim();
                if (!nextPart.includes('privacy-policy.html')) {
                    // It doesn't have it, let's insert it
                    // Wait, what if it's further down? `includes` checks the whole rest of the file.
                    // Let's just check the next 200 characters.
                    if (!parts[i+1].substring(0, 200).includes('privacy-policy.html')) {
                        parts[i] = parts[i] + '<li><a href="faq.html">FAQ’s</a></li>\n                                                                <li><a href="/privacy-policy.html">Privacy Policy</a></li>';
                        parts[i+1] = parts[i+1]; // we replaced the delimiter manually
                        modified = true;
                    } else {
                        parts[i] = parts[i] + '<li><a href="faq.html">FAQ’s</a></li>';
                    }
                } else {
                    parts[i] = parts[i] + '<li><a href="faq.html">FAQ’s</a></li>';
                }
            }
            if (modified) {
                // Reconstruct content
                let newContent = '';
                for (let i = 0; i < parts.length; i++) {
                    newContent += parts[i];
                }
                fs.writeFileSync(filePath, newContent, 'utf8');
                updatedFiles++;
                console.log(`Updated ${file}`);
            }
        }
    }
});

console.log(`Done. Updated ${updatedFiles} files.`);
