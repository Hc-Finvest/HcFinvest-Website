const fs = require('fs');
const cheerio = require('cheerio');

const files = [
    'markets1-trade-forex.html',
    'markets2-stock-market.html',
    'markets3-commodities-market.html',
    'markets4-crypto-market.html',
    'markets5-indices-market.html',
    'markets6-metals-market.html'
];

for (const file of files) {
    let html = fs.readFileSync(file, 'utf8');
    
    // Instead of parsing the whole HTML with Cheerio, let's just parse the tables to preserve formatting of the rest of the file
    // Actually, Cheerio preserves most formatting. Let's see if we can do this using Regex.
    
    // Replace the <thead class="table-header"> ... </thead> block
    const theadRegex = /<thead class="table-header">[\s\S]*?<\/thead>/g;
    html = html.replace(theadRegex, `<thead class="table-header">
                                                    <tr>
                                                        <th class="name">Instruments</th>
                                                        <th>Average Spread</th>
                                                        <th>Spread as low as</th>
                                                    </tr>
                                                </thead>`);

    // Now for every <tr> inside <tbody> of the table, we need to remove all <td> except the first 3.
    // Wait, some tables might have a different number of columns.
    // Let's use Cheerio to safely parse ONLY the <tbody> sections!
    
    // Actually, the easiest and safest way to preserve formatting is string manipulation:
    let out = [];
    let lines = html.split('\n');
    let insideTbody = false;
    let tdCount = 0;
    let insideTd = false;
    let skipLines = false;
    
    // A better approach with cheerio: load the whole document with { recognizeSelfClosing: true, decodeEntities: false }
    const $ = cheerio.load(html, { decodeEntities: false });
    
    $('.pricing-table thead').html(`
        <tr>
            <th class="name">Instruments</th>
            <th>Average Spread</th>
            <th>Spread as low as</th>
        </tr>
    `);
    
    $('.pricing-table tbody tr').each((i, tr) => {
        // Find all direct <td> children
        const tds = $(tr).children('td');
        // Keep the first 3, remove the rest
        tds.each((j, td) => {
            if (j >= 3) {
                $(td).remove();
            }
        });
    });
    
    fs.writeFileSync(file, $.html(), 'utf8');
    console.log('Processed', file);
}
