// import {test,expect} from '@playwright/test';

// test("Locators",async({page})=>{
//     await page.goto("https://www.facebook.com/");
//     await page.waitForTimeout(3000);
// })

//import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.amazon.in/');
// //   await page.getByRole('link', { name: 'Mobiles' }).click();
//   await page.getByText('Mobiles').click();
//   await page.getByRole('link', { name: 'Samsung Samsung' }).click();
//   await page.getByRole('link', { name: 'Samsung Galaxy M05 (Mint' }).click();
//   await page.getByRole('button', { name: 'Add to Cart', exact: true }).click();

// });

import { test, expect } from '@playwright/test';

test ('locators',async ({page})=>{
  await page.goto('https://www.facebook.com/');
  //css
  await page.locator('#email').fill("Indhu")
  // await page.locator('#pass').fill("123456")
  // await page.locator('button[name="login"]').click()
  // // await page.getByRole({name:"login"}).click()

//inbuild locators

// await page.getByTestId("royal-pass").fill("142203");
await page.getByPlaceholder("Password").fill("142203")
await page.getByLabel("Email address or phone number").fill("Indhu")
await page.getByAltText("Facebook")

  await page.waitForTimeout(4000)
})


