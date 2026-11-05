const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/Aadityaraj/PROJECTS/RevoDigital/.agents/teamwork/spec_miner_survey_2/extracted';
const outDir = 'C:/Users/Aadityaraj/PROJECTS/RevoDigital/.agents/teamwork/spec_miner_survey_2/clean_html';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const htmlFiles = fs.readdirSync(baseDir).filter(f => f.endsWith('.html'));

for (const file of htmlFiles) {
  let content = fs.readFileSync(path.join(baseDir, file), 'utf8');
  // Strip <style>...</style>
  const cleanHtml = content.replace(/<style>[\s\S]*?<\/style>/i, '').trim();
  const cleanName = file.replace('f0cDVHCexB-k_', '').replace('.jsx.html', '.clean.html');
  fs.writeFileSync(path.join(outDir, cleanName), cleanHtml);
  console.log(`Wrote ${cleanName}: ${cleanHtml.length} chars`);
}
