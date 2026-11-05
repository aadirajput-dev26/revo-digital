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

const results = {};

for (const comp of components) {
  const html = fs.readFileSync(path.join(__dirname, comp.file), 'utf8');
  // Strip SVG tags to avoid extracting SVG inner text
  const noSvg = html.replace(/<svg[\s\S]*?<\/svg>/gi, '');
  
  // Extract text with data-idx
  const idxRegex = /<([a-z0-9]+)[^>]*data-idx="(\d+)"[^>]*>([\s\S]*?)<\/\1>/gi;
  const items = [];
  let m;
  while ((m = idxRegex.exec(noSvg)) !== null) {
    items.push({
      tag: m[1],
      idx: parseInt(m[2], 10),
      text: m[3].replace(/<[^>]+>/g, '').trim()
    });
  }
  
  results[comp.name] = items.sort((a, b) => a.idx - b.idx);
}

fs.writeFileSync(path.join(__dirname, 'extracted_indexed_text.json'), JSON.stringify(results, null, 2));
console.log('Saved indexed text extraction.');
