const fs = require('fs');
const path = require('path');

async function fetchScreens() {
  const flowId = 'f0cDVHCexB-k';
  const url = `https://app.banani.co/api/trpc/screens.getFlowScreens?batch=1&input=${encodeURIComponent(JSON.stringify({"0":{"json":{"flowId":flowId}}}))}`;
  console.log('Fetching screens:', url);
  const res = await fetch(url);
  const text = await res.text();
  const data = JSON.parse(text);
  fs.writeFileSync('C:/Users/Aadityaraj/PROJECTS/RevoDigital/.agents/teamwork/spec_miner_survey_2/screens_response.json', JSON.stringify(data, null, 2));

  const items = data[0].result.data.json;
  console.log(`Found ${items.length} items (screens/components):`);
  items.forEach((item, i) => console.log(`${i+1}. [${item.type}] ${item.id}`));

  const baseDir = 'C:/Users/Aadityaraj/PROJECTS/RevoDigital/.agents/teamwork/spec_miner_survey_2/extracted';
  if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });

  for (const item of items) {
    const safeName = item.id.replace(/[\/\\]/g, '_');
    console.log(`\nFetching details for ${item.id}...`);
    
    // getScreen
    const sUrl = `https://app.banani.co/api/trpc/screens.getScreen?batch=1&input=${encodeURIComponent(JSON.stringify({"0":{"json":{"screenId":item.id}}}))}`;
    const sRes = await fetch(sUrl);
    const sText = await sRes.text();
    fs.writeFileSync(path.join(baseDir, `screen_${safeName}.json`), sText);

    // getActiveStructure
    const structUrl = `https://app.banani.co/api/trpc/screens.getActiveStructure?batch=1&input=${encodeURIComponent(JSON.stringify({"0":{"json":{"screenId":item.id}}}))}`;
    const structRes = await fetch(structUrl);
    const structText = await structRes.text();
    fs.writeFileSync(path.join(baseDir, `structure_${safeName}.json`), structText);
    
    console.log(`Done ${item.id}: screen size ${sText.length}, struct size ${structText.length}`);
  }

  // Also fetch theme
  const flowData = JSON.parse(fs.readFileSync('C:/Users/Aadityaraj/PROJECTS/RevoDigital/.agents/teamwork/spec_miner_survey_2/flow_response.json', 'utf8'));
  const themeId = flowData[0].result.data.json.themeId;
  if (themeId) {
    console.log(`\nFetching theme ${themeId}...`);
    const themeUrl = `https://app.banani.co/api/trpc/themes.getTheme?batch=1&input=${encodeURIComponent(JSON.stringify({"0":{"json":{"themeId":themeId}}}))}`;
    const tRes = await fetch(themeUrl);
    const tText = await tRes.text();
    fs.writeFileSync(path.join(baseDir, `theme_${themeId}.json`), tText);
  }

  // Also componentFlowTokens
  const tokenUrl = `https://app.banani.co/api/trpc/themes.getComponentFlowTokens?batch=1&input=${encodeURIComponent(JSON.stringify({"0":{"json":{"flowId":flowId}}}))}`;
  const tokRes = await fetch(tokenUrl);
  const tokText = await tokRes.text();
  fs.writeFileSync(path.join(baseDir, `flow_tokens.json`), tokText);
  console.log(`Done fetching all!`);
}

fetchScreens().catch(console.error);







