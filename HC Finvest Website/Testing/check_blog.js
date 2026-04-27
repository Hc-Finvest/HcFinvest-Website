const fs = require('fs');
const content = fs.readFileSync('d:/HcFinvest/HC Finvest Website/HC Finvest Website/blog-3.html', 'utf8');

const regex = /<li class="dropdown">\s*<a href="#">About<\/a>\s*<ul>[\s\S]*?<\/ul>/g;
const matches = content.match(regex);

if (matches) {
    console.log(matches.join('\n\n'));
} else {
    console.log("No matches found.");
}
