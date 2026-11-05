const fs = require('fs');
const path = require('path');

const flowId = 'f0cDVHCexB-k';
const baseUrl = 'https://app.banani.co/api/trpc';

async function trpcQuery(proc, input) {
  const inputParam = encodeURIComponent(JSON.stringify({ "0": { json: input } }));
  const url = `${baseUrl}/${proc}?batch=1&input=${inputParam}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data[0] && data[0].result && data[0].result.data) {
    return data[0].result.data.json;
  }
  return data;
}

async function run() {
  console.log('Fetching flow data...');
  const flow = await trpcQuery('flow.getFlow', { flowId });
  fs.writeFileSync(path.join(__dirname, 'flow.json'), JSON.stringify(flow, null, 2));

  console.log('Fetching flow screens...');
  const screens = await trpcQuery('screens.getFlowScreens', { flowId });
  fs.writeFileSync(path.join(__dirname, 'screens.json'), JSON.stringify(screens, null, 2));

  console.log('Fetching theme tokens...');
  const tokens = await trpcQuery('themes.getComponentFlowTokens', { flowId });
  fs.writeFileSync(path.join(__dirname, 'tokens.json'), JSON.stringify(tokens, null, 2));

  for (const s of screens) {
    console.log(`Fetching active structure for ${s.id}...`);
    try {
      const struct = await trpcQuery('screens.getActiveStructure', { screenId: s.id });
      const safeName = s.id.replace(/\//g, '_');
      fs.writeFileSync(path.join(__dirname, `struct_${safeName}.json`), JSON.stringify(struct, null, 2));
      if (struct.htmlCss) {
        fs.writeFileSync(path.join(__dirname, `rendered_${safeName}.html`), struct.htmlCss);
      }
    } catch (err) {
      console.error(`Error for ${s.id}:`, err);
    }
  }

  console.log('Done!');
}

run();
