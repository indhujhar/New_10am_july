import {test , expect} from '@playwright/test';
import { log } from 'console';

test.only("Input",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.click('//a[text()="Udemy Courses"]')
    const url = await page.url()
    console.log(url);

    await page.goBack();

    await page.goForward();

    await page.reload();

    // await page.close();

    await page.waitForTimeout(4000);
    
})