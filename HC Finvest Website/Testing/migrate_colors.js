const fs = require('fs');
const path = require('path');

const colorMap = {
    '#00c339': '#6bddd9', // bright greens to Primary Teal
    '#00f076': '#6bddd9',
    '#50fa7b': '#6bddd9',
    '#19b820': '#6bddd9',
    '#28c01b': '#6bddd9',
    '#3dc654': '#6bddd9',
    '#44aa20': '#6bddd9',
    '#51b662': '#6bddd9',
    '#66f798': '#6bddd9',
    '#9ced6a': '#6bddd9',
    
    // dark greens to brand dark blue/teal
    '#033428': '#0a4a5c', 
    '#051509': '#0b1a24', 
    '#071e1a': '#0a3e56', 
    '#103e33': '#1d768f', // Accent dark teal (for boxes)
    '#134639': '#1d768f', 
    '#1c4e42': '#1d768f', 
    '#28574c': '#1d768f', 
    '#285934': '#1d768f', 
    '#2d574d': '#1d768f', 
    
    // Grayish greens
    '#4f7169': '#b7ced4' // For subtitles/tags
};

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.css')) {
            results.push(file);
        }
    });
    return results;
}

const cssFiles = walk('d:/HcFinvest/HC Finvest Website/HC Finvest Website/assets/css');
let filesUpdated = 0;

cssFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Replace hex codes
    for (const [green, blue] of Object.entries(colorMap)) {
        // Case-insensitive replacement
        const regex = new RegExp(green, 'gi');
        content = content.replace(regex, blue);
    }
    
    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        filesUpdated++;
        console.log(`Updated colors in ${path.basename(file)}`);
    }
});

console.log(`Color migration complete. Updated ${filesUpdated} CSS files.`);
