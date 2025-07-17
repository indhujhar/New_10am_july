import {test, expect} from '@playwright/test'

test("Hover",async({page})=>{
    await page.goto("https://www.amazon.in/")
    let home = await page.locator("nav-link-accountList").click()
    await home.hover()

    await expect(home).toBeEnabled()
    await page.waitForTimeout(4000)
})

test("Right",async({page})=>{
    await page.goto("https://www.amazon.in/")
    let link = await page.locator("//a[text()='Click here to go to amazon.in']")
    await link.click({button:'right'})
    await page.waitForTimeout(4000)

})

test("Dblclick",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
        let double = await page.locator("//button[text()='Copy Text']")
        await double.dblclick({})

    let verify = await page.locator("#field2")
    await expect (verify).toHaveValue("Hello World!")

    
})

test.only('Drag and drop',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let Drag=await page.locator('#draggable')
    let Drop=await page.locator('#droppable')

    await Drag.dragTo(Drop)
    await page.waitForTimeout(3000)
})