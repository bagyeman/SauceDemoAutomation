import {test, expect} from '@playwright/test';

test('all items', async( { page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();

    //Fill form
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    //Click login button
    await page.locator('[data-test="login-button"]').click();

    //Click the hamburger
    await page.getByRole('button', {name: 'Open Menu'}).click();

    //Click the all items menu
    await page.locator('[data-test="inventory-sidebar-link"]').click();

    //Confirm user is on the inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.pause();
})


test('Logout', async( { page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();

    //Fill form
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    //Click login button
    await page.locator('[data-test="login-button"]').click();

     //Click the hamburger
     await page.getByRole('button', {name: 'Open Menu'}).click();

     //Click logout button
     await page.locator('[data-test="logout-sidebar-link"]').click();

     //Confirm user is redirected to login page
     await expect(page).toHaveURL('https://www.saucedemo.com/');
     await page.pause();
})