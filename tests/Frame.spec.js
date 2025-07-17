import {test,expect} from '@playwright/test'

test.skip("Frame1",async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const allframes = await page.frames()
    console.log(allframes.length);
    
    // let frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // alter method
    
    let frame1=await page.frameLocator('{[src="frame_1.html"]}').locator('[name="text1"]')
    await frame1.locator('[name="mytext1"]').fill("playwright")
    await page.waitForTimeout(4000);

})

test("Iframe",async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    let parent = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await parent.fill('[name="mytext3"]',"Git")

    let child = await parent.childFrames();
    await child[0].locator('//div[@id="i9"]//div[@class="AB7Lab Id5V1"]').click();
    await child[0].locator('//div[@id ="i24"]//div[@class="uHMk6b fsHoPb"]').check();
    await page.waitForTimeout(4000);


})