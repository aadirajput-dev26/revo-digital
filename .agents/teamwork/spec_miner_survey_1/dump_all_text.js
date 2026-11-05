const fs = require('fs');
const path = require('path');

const components = [
  { name: 'Navbar', file: 'clean_f0cDVHCexB-k_components_Navbar.jsx.html' },
  { name: 'Hero', file: 'clean_f0cDVHCexB-k_components_Hero.jsx.html' },
  { name: 'ProductsSection', file: 'clean_f0cDVHCexB-k_components_ProductsSection.jsx.html' },
  { name: 'GalleryCustom', file: 'clean_f0cDVHCexB-k_components_GalleryCustom.jsx.html' },
  { name: 'HowAiWho', file: 'clean_f0cDVHCexB-k_components_HowAiWho.jsx.html' },
  { name: 'FaqFooter', file: 'clean_f0cDVHCexB-k_components_FaqFooter.jsx.html' }
];

for (const comp of components) {
  const html = fs.readFileSync(path.join(__dirname, comp.file), 'utf8');
  // strip style, script, svg
  const textOnly = html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .split('\n')
    .map(t => t.trim())
    .filter(t => t.length > 0);
  
  console.log(`\n=== ${comp.name} Text Tokens (${textOnly.length}) ===`);
  console.log(textOnly.join(' | '));
}
