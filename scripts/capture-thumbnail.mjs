import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../src/assets/hourly-sales-thumb.png");

const url =
  "https://app.powerbi.com/view?r=eyJrIjoiOWJkN2UzOTYtNjYyNi00NWI3LTlmNzctMzU1ODE2OTBhNDI4IiwidCI6IjVlMmVmZDkwLTZjMjgtNGQyMC05ZmYxLTNlZDlmZGZhOWVjYyJ9";

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1920, height: 1200 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
// Power BI keeps animating after networkidle; give it extra time to paint.
await page.waitForTimeout(10_000);
// Capture a 16:9 region from the top, skipping Power BI's footer bar.
await page.screenshot({
  path: outPath,
  clip: { x: 0, y: 0, width: 1920, height: 1080 },
});
await browser.close();
console.log("Wrote", outPath);
