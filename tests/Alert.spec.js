import {test,expect} from '@playwright/test'

test('ok button',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //alert handling

    // page.on('dialog',async(dialog)=>{
    //     expect(dialog.type()).toContain('alert')
    //     expect (dialog.message()).toContain("I am an alert box!")
    //     await dialog.accept();
    // })
    // await page.getByText("Simple Alert").click();

    // page.on('dialog',async(dialog)=>{
    //     expect(dialog.type()).toContain('confirm')
    //     expect (dialog.message()).toContain("Press a button!")
    //     // await dialog.accept();
    //     await dialog.dismiss();
    // })
    // await page.getByText("Confirmation Alert").click();
    // expect(page.locator('#demo')).toHaveText('You pressed Cancel!')
    // await page.waitForTimeout(3000);

    page.on('dialog',async(dialog)=>{
        expect(dialog.type()).toContain('prompt')//promt is a default value....................
        expect (dialog.message()).toContain("Please enter your name")
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept("Indhu");
        // await dialog.dismiss();
    })
    await page.getByText('Prompt Alert').click();
    expect(await page.locator('#demo')).toHaveText("Hello Indhu! How are you today?")
    // await page.waitForTimeout(3000);

})
