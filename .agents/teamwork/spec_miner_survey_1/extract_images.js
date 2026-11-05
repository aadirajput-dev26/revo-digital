const fs = require('fs');
const path = require('path');

const desktopHtml = fs.readFileSync(path.join(__dirname, 'rendered_f0cDVHCexB-k_screens_homepage-desktop.jsx.html'), 'utf8');

const imgRegex = /<img([^>]+)>/gi;
let m;
const images = [];
while ((m = imgRegex.exec(desktopHtml)) !== null) {
  const attrs = m[1];
  const queryMatch = attrs.match(/data-query="([^"]+)"/);
  const aspectMatch = attrs.match(/data-aspect-ratio="([^"]+)"/);
  const styleMatch = attrs.match(/style="([^"]+)"/);
  const classMatch = attrs.match(/class="([^"]+)"/);
  const srcMatch = attrs.match(/src="([^"]+)"/);

  images.push({
    query: queryMatch ? queryMatch[1] : null,
    aspectRatio: aspectMatch ? aspectMatch[1] : null,
    style: styleMatch ? styleMatch[1] : null,
    className: classMatch ? classMatch[1] : null,
    src: srcMatch ? srcMatch[1] : null
  });
}

console.log(`Found ${images.length} images:`);
images.forEach((img, idx) => {
  console.log(`\n[${idx + 1}] Aspect: ${img.aspectRatio}`);
  console.log(`    Query: ${img.query}`);
  console.log(`    Class: ${img.className}`);
});

fs.writeFileSync(path.join(__dirname, 'extracted_images.json'), JSON.stringify(images, null, 2));
