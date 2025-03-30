//@ts-check
import{test, expect} from '@playwright/test';
import { assert } from 'console';

test('Succesful Login', async({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();

    //Enter valid username
    await page.getByPlaceholder('Username').fill('standard_user');
    //Enter a valid password
    await page.getByPlaceholder('Password').fill('secret_sauce');
    //Click Login button
    await page.locator('[data-test="login-button"]').click();
   // await page.pause();
    //check page url and title
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('[class="app_logo"]')).toHaveText('Swag Labs');
    
    
})

test('Wrong username', async({ page }) => {
    /*
    const userName = 'standard_user';
    await page.goto('https://www.saucedemo.com/');

    //Enter an invalid username
    await page.getByPlaceholder('Username').fill(userName);
    //Enter a valid password
    const userNameInput = await page.getByPlaceholder('Username').inputValue();
    expect(userNameInput).toBe(userName)
    */

    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    //Enter wrong username
    await page.getByPlaceholder('Username').fill('Users');
    //Enter valid username
    await page.getByPlaceholder('Password').fill('secret_sauce');
    //Click login button
    await page.locator('[data-test="login-button"]').click();
    //Check error message popup
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    //await page.pause();
    //Check the exact error message displayed
    await expect(page.locator('[data-test="error"]').filter({ hasText: /^Epic sadface: Username and password do not match any user in this service$/ })).toBeVisible();
    //locator('div').filter({ hasText: /^Epic sadface: Username is required$/ })
   // await page.pause();

})

test('wrong password', async( { page }) => {
    await page.goto('https://www.saucedemo.com/');
    //await page.pause();
    //Enter valid username
    await page.getByPlaceholder('Username').fill('standard_user');
    //Enter wrong password
    await page.getByPlaceholder('Password').fill('sauce');
    //Click login button
    await page.locator('[data-test="login-button"]').click();
    //Check for error message popup
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    //Check for the exact message displayed
    await expect(page.locator('[data-test="error"]').filter({hasText: /^Epic sadface: Username and password do not match any user in this service$/})).toBeVisible();
    await page.pause();
})

test('click only login button', async( { page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();

    //Click on the login button
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toHaveText(/^Epic sadface: Username is required$/);
    await expect(page).toHaveURL('https://www.saucedemo.com/')
    await page.pause();
})
