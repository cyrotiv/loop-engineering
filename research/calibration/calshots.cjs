const { chromium } = require('playwright-chromium');

const decks = [
  ['evals101', 'https://leelim81.github.io/Evals-101/slides/'],
  ['antfu-viteconf2025', 'https://talks.antfu.me/2025/viteconf/'],
  ['antfu-vite-dx', 'https://talks.antfu.me/2022/vite-on-demand-dx/'],
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 810 } });
  for (const [name, base] of decks) {
    for (const n of [1, 2, 3]) {
      try {
        await page.goto(`${base}#/${n}`, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForTimeout(1200);
        await page.screenshot({ path: `../research/calibration/shots/${name}-${n}.png` });
        console.log(`ok ${name}-${n}`);
      } catch (e) {
        console.log(`FAIL ${name}-${n}: ${e.message.split('\n')[0]}`);
      }
    }
  }
  await browser.close();
})();
