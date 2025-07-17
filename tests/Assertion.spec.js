// import {test,expect} from '@playwright/test';

// test ("Hard assertion" ,async({page})=>{
//     await page.goto("https://www.nopcommerce.com/en");

//     let logo = await page.getByAltText("nopCommerce")
//     await expect(logo).toBeVisible()

//     // await expect (page).toHaveURL("https://www.nopcommerce.com/en");

//     // await expect(page).toHaveTitle("Register");
//     // const title = await page.title();
//     // console.log('Page Title:', title);
//     // await expect(page).toHaveTitle(/Register/i);
//     // await expect(page).toHaveTitle('Register - nopCommerce')
//     await page.getByText("My account").click()
//     await page.getByText("Register").click()

//     // await page.getByText("Your Personal Details").isVisible();
//     await page.locator("//input[@data-val-required='First name is required.']").fill("Indhu");
//     await page.waitForTimeout(3000);

// })

import {test,expect} from '@playwright/test';

test ("Hard assertion" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect (page).toHaveURL("https://testautomationpractice.blogspot.com/");

    await expect(page).toHaveTitle("Automation Testing Practice");

    let logo = await page.getByText('Automation Testing Practice')
    await expect(logo).toBeVisible()

    await page.getByPlaceholder("Enter Name").fill("Indhujha");
    await page.locator("#email").fill("indhu@gmail.com");
    await page.locator('//input[@id="phone"]').fill("9876543210");
    await page.locator('//textarea[@class="form-control"]').fill("Anna nagar,chennai,600020");
    //radio button
    let radio = await page.locator('//input[@id="female"]')
    await radio.click()
    expect(radio).toBeEnabled();

    //checkbox
    let checkbox = await page.locator('//input[@id="wednesday"]','//input[@id="thursday"]')
    await checkbox.click()
    expect (checkbox).toBeChecked();

    //text
    

    await page.waitForTimeout(3000)

    


})