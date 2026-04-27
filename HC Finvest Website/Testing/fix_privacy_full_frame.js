const fs = require('fs');
const file = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website/privacy-policy.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove the constrained wrapper styles
content = content.replace(/<div style="max-width: 800px; margin: 0 auto; background: var\(--thm-gray-bg\); padding: 50px; border-radius: var\(--thm-border-radius\); box-shadow: 0 10px 30px rgba\(0,0,0,0\.1\); color: var\(--thm-body-font-color\);">/g, '<div class="privacy-policy-content">');

// 2. Fix the H1 heading
content = content.replace(/<h1 style="color: var\(--thm-heading-font-color\); margin-bottom: 30px; font-size: 36px; text-align: center;">/g, '<h1 style="margin-bottom: 30px;">');

// 3. Fix the first centered paragraph
content = content.replace(/<p style="margin-bottom: 20px; text-align: center;">/g, '<p style="margin-bottom: 20px;">');

// 4. Fix all H2 tags (remove font overrides, keep spacing)
content = content.replace(/<h2 style="color: var\(--thm-heading-font-color\); margin-top: 40px; margin-bottom: 20px; font-size: 24px; border-left: 4px solid var\(--thm-primary-color\); padding-left: 15px;">/g, '<h2 style="margin-top: 40px; margin-bottom: 20px; border-left: 4px solid var(--thm-primary-color); padding-left: 15px;">');

// 5. Fix all H3 tags (remove font overrides, keep spacing)
content = content.replace(/<h3 style="color: var\(--thm-heading-font-color\); font-size: 18px; margin-top: 20px;">/g, '<h3 style="margin-top: 20px; margin-bottom: 10px;">');

// 6. Fix the link styles at the bottom (remove inline font-weight and color, let global links handle it or use standard classes)
content = content.replace(/style="color: var\(--thm-black-bg\); font-weight: bold;"/g, 'style="font-weight: 600;"');

fs.writeFileSync(file, content, 'utf8');
console.log('Done');
