const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'assets', 'css', 'module-css', '07-footer-section.css');
let content = fs.readFileSync(cssPath, 'utf8');

const regex = /\.footer-main-bottom__inner \.middle-box \{[\s\S]*?\.footer-main-bottom__inner \.middle-box li a:hover \.text p \{[\s\S]*?\}/;

const newCss = `.footer-main-bottom__inner .middle-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    width: 100%;
}

.footer-main-bottom__inner .middle-box li {
    position: relative;
    display: block;
}

.footer-main-bottom__inner .middle-box li a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    transition: transform 0.3s ease;
}

.footer-main-bottom__inner .middle-box li a:hover {
    transform: scale(1.1);
}

.footer-main-bottom__inner .middle-box li a.fb { background-color: #1877F2; }
.footer-main-bottom__inner .middle-box li a.in { background-color: #0A66C2; }
.footer-main-bottom__inner .middle-box li a.yt { background-color: #FF0000; }
.footer-main-bottom__inner .middle-box li a.ig { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); }

.footer-main-bottom__inner .middle-box li a .icon {
    position: relative;
    display: block;
    color: var(--thm-white);
    font-size: 20px;
    line-height: 0;
}

.footer-main-bottom__inner .middle-box li a:hover .icon {
    color: var(--thm-white);
}`;

if (regex.test(content)) {
    content = content.replace(regex, newCss);
    fs.writeFileSync(cssPath, content, 'utf8');
    console.log('Replaced middle-box CSS in 07-footer-section.css');
} else {
    console.log('Regex did not match in 07-footer-section.css');
}
