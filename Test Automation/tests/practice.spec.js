import { test } from '@playwright/test';
import data from '../data/testData.json';


const today = new Date().toISOString().split('T')[0];

test('practice demo' , async({page})=>{
     await test.step('Open Login Page', async () => {
        await page.goto('https://opencart.abstracta.us/index.php?route=account/login');
    });




    
    

    await page.waitForTimeout(5000);

    await page.locator('input[placeholder="E-Mail Address"]').fill(data.email);
     await page.waitForTimeout(5000);

     await page.screenshot({path:`utils/screenshots/homepage_${today}.png`});


  
    




    




})

