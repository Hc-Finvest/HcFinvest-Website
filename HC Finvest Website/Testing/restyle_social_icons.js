const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..');

function processFile(filePath) {
    if (!filePath.endsWith('.html')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace the middle-box ul with the new version
    const regex = /<ul class="middle-box clearfix">[\s\S]*?<\/ul>/;
    
    const replacement = `<ul class="middle-box clearfix">
                                    <li>
                                        <a href="https://www.facebook.com/" class="social-icon fb">
                                            <div class="icon">
                                                <i class="icon-facebook"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/login" class="social-icon in">
                                            <div class="icon">
                                                <i class="icon-linkedin"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/@hcfinvest" target="_blank" class="social-icon yt">
                                            <div class="icon">
                                                <i class="icon-youtube"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/hcfinvest/" target="_blank" class="social-icon ig">
                                            <div class="icon">
                                                <i class="icon-social"></i>
                                            </div>
                                        </a>
                                    </li>
                                </ul>`;

    if (regex.test(content)) {
        content = content.replace(regex, replacement);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function traverse(currentDir) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
        const fullPath = path.join(currentDir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'Testing' && file !== 'node_modules' && file !== '.git') {
                traverse(fullPath);
            }
        } else {
            processFile(fullPath);
        }
    }
}

traverse(dir);
console.log('Done replacing HTML.');
