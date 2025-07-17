import {test,expect} from '@playwright/test'
test("Multiples",async({page})=>{
    await page.goto("https://www.facebook.com/r.php?entry_point=login");

    const link = await page.$$("a");

    for (const links of link){
        const test = await links.textContent()
        console.log(test);
        
    }
} )