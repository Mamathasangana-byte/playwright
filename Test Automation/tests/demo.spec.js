
import { test, expect } from '@playwright/test';
import {Home} from '../pages/HomePage.js';
import data from '../data/testData.json';



test('practice', async ({ page }) => {


    await page.waitForTimeout(5000);

    const cards =await page.locator('.card');
    const count = await cards.count();

    expect(count).toBeGreaterThan(0);
    let laptopData=[];
    for(let i=0;i<count; i++){
       let names = await cards.nth(i).locator('.hrefch').textContent();
        let prices= await cards.nth(i).locator('h5').textContent();
         let price=parseInt(prices.replace('$','').trim());
         console.log(names);
         console.log(price);

       laptopData.push({
        names:names ,
        price:price
       });
      
       

        }
         console.log(laptopData);

         let priceList=laptopData.map(p=>p.price);
         console.log(priceList);

         let total= priceList.reduce((sum, price)=> sum+price ,0);

         console.log(total);

         let avg= total/priceList.length;
         let max=Math.max(...priceList);
         console.log(max);





});

//     const laptopData = [];

//     for (let i = 0; i < count; i++) {

//         const name = await cards.nth(i).locator('.hrefch').textContent();

//         const priceText = await cards.nth(i).locator('h5').textContent();

//         const price = parseInt(priceText.replace('$', '').trim());

//         laptopData.push({
//             name: name.trim(),
//             price: price
//         });
//     }

//     console.log(laptopData);
//     const prices = laptopData.map(item => item.price);
//     console.log(prices);
//     const total = prices.reduce((sum, price) => sum + price, 0);
//     console.log(total);
//     let avg= total/prices.length;
//       console.log(avg);
//    let max= Math.max(...prices);
//      console.log(max);
//    let min= Math.min(...prices);
//      console.log(min);

//      const sorted =prices.sort((a, b) => b - a);

// // Step 2: take first 2
// const top2 = sorted.slice(0, 2);
// console.log(top2);
// });

