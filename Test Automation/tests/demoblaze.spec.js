import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import { Home } from '../pages/HomePage.js';
import { OrderPage } from '../pages/OrderPage.js';
dotenv.config();
import data from '../data/testData.json';


test('dempblaze Application', async ({ page }) => {

     let navigation = new Home(page,expect);
     await navigation.open(process.env.URL);
   await  navigation.verifyLogo(data.title);
   await  navigation.clickLaptops();
// await page.waitForTimeout(5000);
// let card =await page.locator('.card ');

// const laptopData = [];

//     const count = await card.count();
//       console.log("count:",count);
//      expect(count).toBeGreaterThan(0);


//     for (let i = 0; i < count; i++) {

//         const name = await cards.nth(i)
//             .locator('.hrefch')
//             .textContent();

//         const priceText = await cards.nth(i)
//             .locator('h5')
//             .textContent();

//         const price = parseInt(priceText.replace('$', '').trim());

//         laptopData.push({
//             name: name.trim(),
//             price: price
//         });
//     }

//     console.log("Laptop Details:");
//     console.log(laptopData);

//     // 5. Store prices in integer list
//     const prices = laptopData.map(item => item.price);

//     // 6. Calculate Total, Average, Min, Max
//     const total = prices.reduce((sum, price) => sum + price, 0);

//     const average = total / prices.length;

//     const minimum = Math.min(...prices);

//     const maximum = Math.max(...prices);

//      console.log("Total Price:", total);
//     console.log("Average Price:", average);
//      console.log("Minimum Price:", minimum);
//      console.log("Maximum Price:", maximum);
//    console.log("Maximum Price:", maximum);
//    const sortedLaptops = [...laptopData].sort(
//     (a, b) => b.price - a.price
// );

//  console.log("Top 2 Most Expensive Laptops:");

//  console.log(
//      `1. ${sortedLaptops[0].name} - $${sortedLaptops[0].price}`
//  );

// // console.log(
// //     `2. ${sortedLaptops[1].name} - $${sortedLaptops[1].price}`
// // );
// const secondMostExpensiveLaptop = sortedLaptops[1];


// // console.log(
// //     "Selecting Laptop:",
// //     secondMostExpensiveLaptop.name
// // );

// await page.locator('.hrefch')
//     .filter({ hasText: secondMostExpensiveLaptop.name })
//     .click();
//     await expect(page.locator('.name')).toContainText(
//     secondMostExpensiveLaptop.name
// );

// await page.getByRole('Link',{name:"Add to cart"}).click();
// await page.waitForTimeout(2000);
// await page.locator('a[id="cartur"]').click();
// await expect(
//     page.locator('.success td:nth-child(2)')
// ).toContainText('Sony vaio i5');

// await page.getByRole('Link',{name:"Home"}).click();
// const phoneCard = page.locator('.card').first();

// const phoneName = await phoneCard.locator('.hrefch').textContent();

// const phonePrice = parseInt(
//     (await phoneCard.locator('h5').textContent())
//     .replace('$','')
//     .trim()
// );

// await phoneCard.locator('.hrefch').click();

// page.once('dialog', async dialog => {
//     await dialog.accept();
// });

// await page.getByText('Add to cart').click();
// await page.locator('#cartur').click();

// await page.locator('.success td:nth-child(2)').first().waitFor();
// const allNames = await page.locator('.success td:nth-child(2)').allTextContents();

// const allPricesText = await page.locator('.success td:nth-child(3)').allTextContents();

// const allPrices = allPricesText.map(p => parseInt(p));
// const calculatedTotal = allPrices.reduce((sum, val) => sum + val, 0);

// const uiTotal = parseInt(await page.locator('#totalp').textContent());

// expect(uiTotal).toBe(calculatedTotal);

//  const order = new OrderPage(page, expect);
//   await order.openOrderForm();
//   await order.fillOrderForm();
//    await order.purchase();
//    const confirmation = await order.getConfirmation();
//    console.log(confirmation);
//     expect(confirmation).toContain('Thank you');



 });