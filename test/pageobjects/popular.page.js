// The class contains get functions for obtaining the elements from page and functions that apply to the popular page

const MainPage = require('../pageobjects/main.page');
const Utilities = require('../utilities/functions');

class PopularPage {
    get popularHeader() { return $('h1._2aa3d08d') }

    async validate() {
        const lengthList = await (await MainPage.listApart).length;
        let idx = 0;
        while (idx < lengthList && lengthList != 0) {
            await (await MainPage.listApart)[idx].click();
            await expect(browser).toHaveUrlContaining('https://www.bayut.com/to-rent/apartments/dubai/');
            await expect(await this.popularHeader).toHaveTextContaining('Apartments for rent in');
            if (idx < lengthList - 1) {
                await browser.back();
                await (await MainPage.popularSearch).scrollIntoView();
                await Utilities.existClickableAndClick(MainPage.toRentBtn);
                await (await MainPage.viewAllBtn)[0].click();
            }
            idx++;
        }
    }
}

module.exports = new PopularPage();