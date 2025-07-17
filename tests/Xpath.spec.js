import {test,expect} from '@playwright/test';

test("xpath",async({page})=>{
    await page.goto("https://in.linkedin.com/",{waitUntil:'domcontentloaded'});

    // await page.locator("//a[@class='nav__button-secondary btn-secondary-emphasis btn-md']")
    await page.locator("//a[@class= 'nav__button-secondary btn-secondary-emphasis btn-md']").click()
    await page.locator("//*[@id='username']").click();
    await page.waitForTimeout(5000);
})  