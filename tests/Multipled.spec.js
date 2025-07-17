import{test,expect}from '@playwright/test'

test("Multiple",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // let Multiple = await page.locator('#colors')
    await page.selectOption('#colors',['red','blue','green','yellow'])

    await page.waitForTimeout(4000)

    //assertion

    // const option = await page.locator('#colors option')
    // expect(option).toHaveCount(7)

    const option = await page.locator('#colors option')
    console.log(option.length);
    
    await expect(option.length).toBe(7)

    await page.waitForTimeout(4000)
    
})