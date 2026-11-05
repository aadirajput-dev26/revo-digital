const fs = require('fs');
const path = require('path');

const desktopHtml = fs.readFileSync(path.join(__dirname, 'rendered_f0cDVHCexB-k_screens_homepage-desktop.jsx.html'), 'utf8');

const iconRegex = /data-icon="([^"]+)"[^>]*>([\s\S]*?<\/svg>)/gi;
const iconsMap = new Map();
let m;
while ((m = iconRegex.exec(desktopHtml)) !== null) {
  const name = m[1];
  const svg = m[2].trim();
  if (!iconsMap.has(name)) {
    iconsMap.set(name, svg);
  }
}

console.log(`Found ${iconsMap.size} unique icons:`);
const output = {};
for (const [name, svg] of iconsMap.entries()) {
  console.log(`- ${name}`);
  output[name] = svg;
}

fs.writeFileSync(path.join(__dirname, 'extracted_icons.json'), JSON.stringify(output, null, 2));
console.log('Saved to extracted_icons.json');
