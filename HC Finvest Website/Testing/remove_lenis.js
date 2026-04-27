const fs = require('fs');
const files = ['index.html', 'about.html', 'contact.html', 'faq.html', 'privacy-policy.html'];
const baseDir = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website/';

files.forEach(file => {
    const filePath = baseDir + file;
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        const target = '<script src="assets/vendors/lenis.min.js"></script>';
        if (content.includes(target)) {
            content = content.replace(target, '<!-- <script src="assets/vendors/lenis.min.js"></script> -->');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Commented out lenis.min.js in ' + file);
        }
    }
});
