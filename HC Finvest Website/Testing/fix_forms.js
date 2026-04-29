const fs = require('fs');
const path = require('path');

const rootDir = 'd:/HcFinvest/HC Finvest Website/HC Finvest Website';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            if (f !== 'node_modules' && f !== 'assets') {
                walkDir(dirPath, callback);
            }
        } else {
            callback(path.join(dir, f));
        }
    });
}

walkDir(rootDir, (file) => {
    if (!file.endsWith('.html')) return;

    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    console.log(`Processing: ${file}`);

    // 1. Revert Search Forms (if they were incorrectly updated)
    content = content.replace(/<form\s+([^>]*action=["']assets\/inc\/sendmail\.php["'][^>]*?)>/gi, (match, p1, offset) => {
        const context = content.substring(Math.max(0, offset - 500), Math.min(content.length, offset + 500)).toLowerCase();
        if (p1.includes('search') || match.includes('search') || match.includes('Keyword') || p1.includes('Keyword') || context.includes('search') || context.includes('keyword')) {
            console.log(`  Reverting Search form in ${file}`);
            return `<form ${p1.replace(/action=["']assets\/inc\/sendmail\.php["']/gi, 'action="#"')}>`;
        }
        return match;
    });

    // 2. Update Newsletter/Subscription Forms
    content = content.replace(/<form\s+([^>]*action=["'](?:#|index\.html)["'][^>]*?)>/gi, (match, p1, offset) => {
        // Skip search forms (again, to be safe)
        if (p1.includes('search') || match.includes('search') || match.includes('Keyword') || p1.includes('Keyword')) {
            return match;
        }

        const context = content.substring(Math.max(0, offset - 500), Math.min(content.length, offset + 500)).toLowerCase();
        
        if (context.includes('newsletter') || context.includes('subscribe')) {
            console.log(`  Found Newsletter form in ${file}`);
            let newP1 = p1.replace(/action=["'](?:#|index\.html)["']/gi, 'action="assets/inc/sendmail.php"');
            if (!newP1.includes('method=')) {
                newP1 += ' method="post"';
            } else {
                newP1 = newP1.replace(/method=["'](?:get|GET)["']/gi, 'method="post"');
            }
            return `<form ${newP1}>\n                                    <input type="hidden" name="form_subject" value="Newsletter Subscription">`;
        }
        return match;
    });

    // 3. Update specific Lead forms if not already updated
    const leadForms = [
        { id: 'quick-contact-form', subject: 'Quick Call Request' },
        { id: 'trade-calculator-form', subject: 'Trade Calculator Inquiry' },
        { id: 'contact-style1__form', subject: 'Consultation Request' },
        { id: 'contact-form', subject: 'Contact Form Submission' }
    ];

    leadForms.forEach(form => {
        const regex = new RegExp(`<form\\s+([^>]*id=["']${form.id}["'][^>]*?)>`, 'gi');
        content = content.replace(regex, (match, p1) => {
            if (!p1.includes('assets/inc/sendmail.php') || !content.includes(`name="form_subject" value="${form.subject}"`)) {
                console.log(`  Updating ${form.id} in ${file}`);
                let newP1 = p1.replace(/action=["'](?:#|index\.html)["']/gi, 'action="assets/inc/sendmail.php"');
                if (!newP1.includes('action=')) {
                    newP1 += ' action="assets/inc/sendmail.php"';
                }
                if (!newP1.includes('method=')) {
                    newP1 += ' method="post"';
                }
                return `<form ${newP1}>\n                                    <input type="hidden" name="form_subject" value="${form.subject}">`;
            }
            return match;
        });
    });

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Successfully updated: ${file}`);
    }
});
