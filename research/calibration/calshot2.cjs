const { chromium } = require('playwright-chromium');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 810 } });
  for (const [name, base, pages] of [
    ['antfu-viteconf2025', 'https://talks.antfu.me/2025/viteconf/', [6, 12]],
    ['antfu-vite-dx', 'https://talks.antfu.me/2022/vite-on-demand-dx/', [4, 8]],
  ]) {
    for (const n of pages) {
      try {
        await page.goto(`${base}#/${n}`, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForTimeout(1200);
        await page.screenshot({ path: `../research/calibration/shots/${name}-${n}.png` });
        console.log(`ok ${name}-${n}`);
      } catch (e) { console.log(`FAIL ${name}-${n}`); }
    }
  }
  await browser.close();
})();
