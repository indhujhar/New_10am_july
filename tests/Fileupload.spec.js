import {test,expect}from '@playwright/test'

test.skip("single file",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //single file upload
    await page.waitForSelector('#singleFileInput')
    await page.locator("#singleFileInput").setInputFiles('C:/Playwright/screenshots/img1.png')
    await page.click('//button[text()="Upload Single File"]')
})
    //multiple file upload
    test.only("multipe file",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForSelector('#multipleFilesInput')
    await page.locator("#multipleFilesInput").setInputFiles(['C:/Playwright/screenshots/img1.png','C:/Users/indhu/Downloads/java certificate.pdf'])
    await page.click('//button[text()="Upload Multiple Files"]')
    await page.waitForTimeout(4000);

})