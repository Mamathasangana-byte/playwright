import { test } from '@playwright/test';
import data from '../data/testData.json';


test('practice demo' , async({page})=>{

    await page.goto('https://opencart.abstracta.us/index.php?route=account/login');

    await page.waitForTimeout(5000);

    await page.locator('input[placeholder="E-Mail Address"]').fill(data.email);
     await page.waitForTimeout(5000);


  
    




    




})

