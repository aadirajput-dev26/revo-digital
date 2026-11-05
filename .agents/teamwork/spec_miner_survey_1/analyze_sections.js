const fs = require('fs');
const path = require('path');

const desktopHtml = fs.readFileSync(path.join(__dirname, 'rendered_f0cDVHCexB-k_screens_homepage-desktop.jsx.html'), 'utf8');

// Find all data-component occurrences
const compRegex = /data-component=["']([^"']+)["']/gi;
let m;
const components = [];
while ((m = compRegex.exec(desktopHtml)) !== null) {
  if (m[1].startsWith('@components/')) {
    components.push(m[1]);
  }
}
console.log('Main components in desktop homepage:');
console.log(components);

// Check if there are any sections outside these components
// Check container widths and layout wrappers
const sectionRegex = /<div class="([^"]*)" data-component="(@components\/[^"]+)"/gi;
while ((m = sectionRegex.exec(desktopHtml)) !== null) {
  console.log(`Component: ${m[2]} with classes: ${m[1]}`);
}
