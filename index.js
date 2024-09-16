const { chromium } = require("playwright");

(async () => {
  // Launch a new browser instance
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to Stack Overflow's questions page 
  console.log("Navigating to Stack Overflow...");
  await page.goto("https://stackoverflow.com/questions", {
    waitUntil: "domcontentloaded", 
    timeout: 120000, 
  });
  // Close the browser
  await browser.close();
})();
