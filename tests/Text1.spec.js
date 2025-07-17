import {test,expect}from '@playwright/test'

test("Key Board",async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')
    await page.locator('#text1').fill('Welcome to the class')
    //keyboard
    await page.keyboard.press('Contro+A')
    await page.keyboard.press('Control+C')

//tab


    await page.waitForTimeout(4000)
    

})