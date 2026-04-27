const fs = require('fs');
const file = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website/blog-3.html';
let content = fs.readFileSync(file, 'utf8');

// Replace the line containing FAQ's with FAQ's and Privacy Policy.
content = content.replace('<li><a href="faq.html">FAQ’s</a></li>', '<li><a href="faq.html">FAQ’s</a></li>\n                                                                <li><a href="/privacy-policy.html">Privacy Policy</a></li>');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed blog-3.html');
