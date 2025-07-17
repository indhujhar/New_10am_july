import {test,expect} from '@playwright/test';

test ("Hard assertion" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //singlecheckbox

    // await page.locator('#sunday').check();
    // await expect(await page.locator("#sunday")).toBeChecked();
    // await expect(await page.locator('#sunday').isChecked()).toBeTruthy()
    // await page.waitForTimeout(3000);


    // await page.locator('#monday').check()
    // await expect(await page.locator('#monday').isChecked()).toBeFalsy();


    //2checkbox
    // await expect(await page.locator('#monday')).toBeChecked()
    // await expect(await page.locator('#monday').isChecked()).toBeTruthy();
    // await page.waitForTimeout(3000);

    // await page.locator('#tuesday').check()
    // await expect(await page.locator('#tuesday').isChecked()).toBeTruthy()

    // await page.waitForTimeout(3000);

    const locator = ['#sunday', '#tuesday','#thursday']
    for(const result of locator){
        await page.locator(result).check()
    }
        await page.waitForTimeout(3000);

    for (const result of locator){
        await expect(await page.locator(result)).toBeChecked()
        await page.locator(result).uncheck()
        await page.waitForTimeout(5000);
    }
    
})