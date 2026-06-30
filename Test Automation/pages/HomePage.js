import { expect } from '@playwright/test';
export class Home {
    constructor(page,expect) {
        this.page = page;
        this.logo = page.locator('#nava');
        this.laptopsTab = page.getByRole('link', { name: 'Laptops' });
        this.cards = page.locator('.card');
        this.expect=expect
    }

       async open(url) {
        await this.page.goto(url);
    }

    async verifyLogo(name) {
        await this.expect(this.logo).toHaveText(name);
    }

    async clickLaptops() {
        await this.laptopsTab.click();
    }

     async clickLaptops() {
        await this.laptopsTab.click();
    }
}

export default Home;