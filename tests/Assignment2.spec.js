const {test,expect } = require('@playwright/test')

test('Assignment Number TWO',async({page})=>
{
await page.goto('/');
console.log("page title is"+await page.title());
await expect(page).toHaveTitle("EventHub — Discover & Book Events");
await expect(page.getByRole("heading",{name:"Sign in to EventHub"})).toBeVisible();
await expect(page.getByPlaceholder("you@email.com")).toBeVisible();
await expect(page.locator("#login-btn")).toBeVisible();
});
test('Login page Another check', async ({ browser,page }) => {
await page.goto('/');
await page.getByPlaceholder("you@email.com").fill("beginner@sample.com");
 await expect(page.getByPlaceholder("you@email.com")).toHaveValue("beginner@sample.com");
const context2=await browser.newContext();
 const page2 = await context2.newPage();
await page2.goto("https://eventhub.rahulshettyacademy.com");
await expect(page2).toHaveTitle("EventHub — Discover & Book Events");
await expect(page2.getByPlaceholder("you@email.com")).toHaveValue("");
await context2.close();
});
//Note on Page Fixture and Browser Context
// In Playwright, the page fixture provides a ready-to-use browser page that can be used directly for performing actions and 
// assertions in a test. A browser context represents a separate browser session and maintains its own cookies, local storage, 
// and session data. When a new browser context is created, it starts with isolated state, meaning that data or changes made 
// in another context do not affect it. This allows us to test different users or sessions independently and ensures that test 
// data does not leak between sessions.