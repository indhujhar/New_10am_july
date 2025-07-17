import {test,expect} from '@playwright/test'

test("screen shot",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.screenshot({path:'screenshots/'+ Date.now() + "Fullpage.png" , fullPage:true})

    
})