//@ts-check
import{test, expect} from '@playwright/test';

test('Succesful Login', async({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    //Enter valid username
    await page.getByPlaceholder('Username').fill('standard_user');
    //Enter a valid password
    await page.getByPlaceholder('Password').fill('secret_sauce');
    //Click Login button
    await page.locator('[data-test="login-button"]').click();
    //await page.pause();
    
}) 