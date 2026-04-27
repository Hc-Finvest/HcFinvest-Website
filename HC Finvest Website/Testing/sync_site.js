const fs = require('fs');
const path = require('path');
const baseDir = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website/';

const files = [
    '404.html', 'about.html', 'accounts.html', 'accounts1-starter-account.html',
    'accounts2-protrader-account.html', 'accounts3-zerospread-account.html',
    'accounts4-elite-account.html', 'blog-3.html', 'contact.html', 'faq.html',
    'index.html', 'markets1-trade-forex.html', 'markets2-stock-market.html',
    'markets3-commodities-market.html', 'markets4-crypto-market.html',
    'markets5-indices-market.html', 'markets6-metals-market.html', 'privacy-policy.html'
];

const indexContent = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');

// Extract patterns from index.html
const headerRegex = /<header class="main-header main-header-style2">[\s\S]*?<\/header>/;
const footerRegex = /<footer class="footer-style1">[\s\S]*?<\/footer>/;
const scriptsRegex = /<script src="assets\/vendors\/jquery\/jquery-3\.6\.0\.min\.js">[\s\S]*?<\/html>/;

const newHeader = indexContent.match(headerRegex)[0];
const newFooter = indexContent.match(footerRegex)[0];
// We'll take everything from the first script tag to the end of the file (closing html) to be safe
const scriptsMatch = indexContent.match(/<script src="assets\/vendors\/jquery\/jquery-3\.6\.0\.min\.js">[\s\S]*/);
const newScripts = scriptsMatch[0];

files.forEach(file => {
    const filePath = path.join(baseDir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Replace Header
        content = content.replace(headerRegex, newHeader);
        
        // Replace Footer
        content = content.replace(footerRegex, newFooter);
        
        // Replace Scripts
        // We look for where the first script tag starts and replace everything until </html>
        const scriptStart = content.indexOf('<script src="assets/vendors/jquery/jquery-3.6.0.min.js">');
        if (scriptStart !== -1) {
            content = content.slice(0, scriptStart) + newScripts;
        } else {
            // If the first script tag is different, try to find any vendor script
            const altScriptStart = content.indexOf('<script src="assets/vendors/');
             if (altScriptStart !== -1) {
                content = content.slice(0, altScriptStart) + newScripts;
             }
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Synchronized ' + file);
    }
});
