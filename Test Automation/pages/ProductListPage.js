export class ProductListPage {
    constructor(page, expect) {
        this.page = page;
        this.expect = expect;
        this.cards = page.locator('.card');
    }

    // 1. Get all products count
    async getCount() {
        return await this.cards.count();
    }

    // 2. Get product name
    async getName(i) {
        const name = await this.cards.nth(i).locator('.hrefch').textContent();
        return name.trim();
    }

    // 3. Get product price
    async getPrice(i) {
        const priceText = await this.cards.nth(i).locator('h5').textContent();
        return parseInt(priceText.replace('$', '').trim());
    }

    // 4. Build full laptop data array
    async getAllLaptops() {
        const laptopData = [];

        const count = await this.getCount();

        this.expect(count).toBeGreaterThan(0);

        for (let i = 0; i < count; i++) {
            const name = await this.getName(i);
            const price = await this.getPrice(i);

            laptopData.push({
                name,
                price
            });
        }

        return laptopData;
    }

    // 5. Get prices only
    async getPricesList(laptopData) {
        return laptopData.map(item => item.price);
    }

    // 6. Calculate total
    async getTotal(prices) {
        return prices.reduce((sum, price) => sum + price, 0);
    }

    // 7. Calculate average
    async getAverage(prices) {
        const total = await this.getTotal(prices);
        return total / prices.length;
    }

    // 8. Get min price
    async getMin(prices) {
        return Math.min(...prices);
    }

    // 9. Get max price
    async getMax(prices) {
        return Math.max(...prices);
    }

    // 10. Sort laptops (high to low)
    async sortByPriceDesc(laptopData) {
        return [...laptopData].sort((a, b) => b.price - a.price);
    }

    // 11. Get second most expensive
    async getSecondMostExpensive(laptopData) {
        const sorted = await this.sortByPriceDesc(laptopData);
        return sorted[1];
    }
}
export default ProductListPage;
