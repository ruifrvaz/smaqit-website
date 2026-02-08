const { test, expect } = require('@playwright/test');

test('check baseURL navigation', async ({ page, baseURL }) => {
  console.log('baseURL:', baseURL);
  
  const response = await page.goto('/');
  console.log('Response status:', response.status());
  console.log('Response URL:', response.url());
  
  const title = await page.title();
  console.log('Page title:', title);
  
  const heroCount = await page.locator('#hero').count();
  console.log('Hero elements:', heroCount);
});
