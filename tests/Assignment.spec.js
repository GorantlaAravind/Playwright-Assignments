const {test,expect}=require('@playwright/test')

//READ ME
//### Playwright vs. Playwright Test

//playwright is the core browser automation library. 
// It provides APIs for launching browsers, creating pages, interacting with elements, 
// and controlling browser sessions.

//@playwright/test is Playwright's test runner. 
// It builds on the core library and adds test-focused features such as 
// test discovery, fixtures, assertions, retries, parallel execution, and reporting. 


test('Assignment Numberone',async({page})=>
{

await page.goto("https://eventhub.rahulshettyacademy.com");
//await expect(page.locator(".text-xl")).toHaveText("Sign in to EventHub");
await expect(page.getByRole("heading",{name:"Sign in to EventHub"})).toBeVisible();
await expect(page.getByPlaceholder("you@email.com")).toBeVisible();
await expect(page.locator("#login-btn")).toBeVisible();

});
test('Login page smoke check', async ({ page }) => {

await page.goto("https://eventhub.rahulshettyacademy.com");
await expect(page).toHaveURL(/login/);
await expect(page.locator("#password")).toBeVisible();
await expect(page.getByRole("heading",{name:"Sign in to EventHub"})).toBeVisible();

});
