export class OrderPage {
    constructor(page, expect) {
        this.page = page;
        this.expect = expect;

        this.placeOrderBtn = page.getByRole('button', { name: 'Place Order' });

        this.name = page.locator('#name');
        this.country = page.locator('#country');
        this.city = page.locator('#city');
        this.card = page.locator('#card');
        this.month = page.locator('#month');
        this.year = page.locator('#year');

        this.purchaseBtn = page.getByText('Purchase');
        this.confirmation = page.locator('.sweet-alert');
    }

    // 🔹 random generator
    random() {
        return Math.random().toString(36).substring(2, 8);
    }

    // 🔹 click place order
    async openOrderForm() {
        await this.placeOrderBtn.click();
    }

    // 🔹 fill form with random data
    async fillOrderForm() {
        await this.name.fill('User' + this.random());
        await this.country.fill('India');
        await this.city.fill('Hyd');
        await this.card.fill('4111111111111111');
        await this.month.fill('12');
        await this.year.fill('2026');
    }

    // 🔹 click purchase
    async purchase() {
        await this.purchaseBtn.click();
    }

    // 🔹 get confirmation text
    async getConfirmation() {
        return await this.confirmation.textContent();
    }

    // 🔹 full flow (optional shortcut method)
    async completeOrder() {
        await this.openOrderForm();
        await this.fillOrderForm();
        await this.purchase();
        return await this.getConfirmation();
    }
}
export default OrderPage;