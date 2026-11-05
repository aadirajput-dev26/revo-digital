const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'rendered_f0cDVHCexB-k_screens_homepage-desktop.jsx.html'), 'utf8');

// Separate <style> and DOM
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
const css = styleMatch ? styleMatch[1] : '';
const bodyHtml = html.replace(/<style>[\s\S]*?<\/style>/g, '');

fs.writeFileSync(path.join(__dirname, 'extracted_styles.css'), css);
fs.writeFileSync(path.join(__dirname, 'extracted_body.html'), bodyHtml);

console.log('CSS length:', css.length);
console.log('Body length:', bodyHtml.length);

// Extract images
const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
const images = [];
let m;
while ((m = imgRegex.exec(bodyHtml)) !== null) {
  images.push(m[0]);
}
console.log('\n--- Images (' + images.length + ') ---');
images.forEach(img => console.log(img));

// Extract data-icon
const iconRegex = /data-icon=["']([^"']+)["']/gi;
const icons = new Set();
while ((m = iconRegex.exec(bodyHtml)) !== null) {
  icons.add(m[1]);
}
console.log('\n--- Icons (' + icons.size + ') ---');
console.log([...icons]);

// Extract data-file
const fileRegex = /data-file=["']([^"']+)["']/gi;
const files = new Set();
while ((m = fileRegex.exec(bodyHtml)) !== null) {
  files.add(m[1]);
}
console.log('\n--- Referenced Files (' + files.size + ') ---');
console.log([...files]);
