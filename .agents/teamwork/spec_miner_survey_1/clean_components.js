const fs = require('fs');
const path = require('path');

const screens = [
  'f0cDVHCexB-k_components_Navbar.jsx',
  'f0cDVHCexB-k_components_Hero.jsx',
  'f0cDVHCexB-k_components_ProductsSection.jsx',
  'f0cDVHCexB-k_components_GalleryCustom.jsx',
  'f0cDVHCexB-k_components_HowAiWho.jsx',
  'f0cDVHCexB-k_components_FaqFooter.jsx'
];

for (const s of screens) {
  const filePath = path.join(__dirname, `rendered_${s}.html`);
  const rawHtml = fs.readFileSync(filePath, 'utf8');
  // Strip <style>
  const bodyHtml = rawHtml.replace(/<style>[\s\S]*?<\/style>/g, '').trim();
  fs.writeFileSync(path.join(__dirname, `clean_${s}.html`), bodyHtml);
  console.log(`Saved clean_${s}.html (${bodyHtml.length} chars)`);
}
