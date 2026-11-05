const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/Aadityaraj/PROJECTS/RevoDigital/.agents/teamwork/spec_miner_survey_2/extracted';

const files = fs.readdirSync(baseDir);

for (const file of files) {
  if (file.startsWith('structure_')) {
    const content = JSON.parse(fs.readFileSync(path.join(baseDir, file), 'utf8'));
    const item = content[0].result.data.json;
    console.log(`\n======================================================`);
    console.log(`File: ${file}`);
    console.log(`ID: ${item.id}`);
    console.log(`ScreenId: ${item.screenId}`);
    console.log(`ScreenshotUrl: ${item.screenshotUrl}`);
    console.log(`ThemeId: ${item.themeId}`);
    console.log(`htmlCss length: ${item.htmlCss ? item.htmlCss.length : 0}`);
    if (item.htmlCss) {
      const outName = file.replace('structure_', '').replace('.json', '.html');
      fs.writeFileSync(path.join(baseDir, outName), item.htmlCss);
      console.log(`Saved extracted/${outName} (${item.htmlCss.length} bytes)`);
      console.log(`Preview:`, item.htmlCss.slice(0, 300).replace(/\n/g, ' '));
    }
  }
}
