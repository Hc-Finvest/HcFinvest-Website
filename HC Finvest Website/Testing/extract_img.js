const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const regex = /<[^>]+>\s*<img[^>]+src="assets\/images\/(resources|blog|testimonial|about|services)\/[^"]+"[^>]*>/gi;
const matches = html.match(regex);
console.log(matches ? matches.join('\n\n') : 'No matches found.');
