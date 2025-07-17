import {test,expect} from '@playwright/test'

test.skip("Dropdown",async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("#country").selectOption('India')  //visible text
    await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({index:4})//index
    await page.waitForTimeout(2000);
    await page.locator("#country").selectOption({value:"germany"})//value
    await page.waitForTimeout(2000);
    await page.locator("#country").selectOption({label:"United Kingdom"})//label
    await page.waitForTimeout(4000);
})

test.only("Assertion",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    let value = await page.$$('#country option')
    console.log(value);
    expect(value).toHaveLength(10)
    await page.waitForTimeout(4000);
})