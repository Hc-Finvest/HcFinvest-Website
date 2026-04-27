const fs = require('fs');
const file = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website/contact.html';
let content = fs.readFileSync(file, 'utf8');

// The exact block to remove:
//             <!-- Background Decorative Icons (Smart CSS handled) -->
//             <div class="banner-icons-overlay">
//                 <div class="icon-circle">
//                     <i class="fa fa-phone" style="transform: scaleX(-1);"></i>
//                 </div>
//                 <div class="icon-circle large">
//                     <i class="fa fa-envelope"></i>
//                 </div>
//                 <div class="icon-circle">
//                     <i class="fa fa-at"></i>
//                 </div>
//             </div>

content = content.replace(/<!-- Background Decorative Icons[\s\S]*?<div class="banner-icons-overlay">[\s\S]*?<i class="fa fa-at"><\/i>\s*<\/div>\s*<\/div>/, '');

fs.writeFileSync(file, content, 'utf8');
console.log('Done');
