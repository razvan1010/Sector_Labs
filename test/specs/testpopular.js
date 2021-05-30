const MainPage = require('../pageobjects/main.page');
const PopularPage = require('../pageobjects/popular.page');
const Utilities = require('../utilities/functions');

describe('Verify Popular Searches links work correctly', () => {
    it('should check url and verify tittle of page', async () => {
        MainPage.open();

        await expect(browser).toHaveUrl('https://www.bayut.com/');
        await expect(browser).toHaveTitle("Bayut: UAE's Largest Real Estate Portal");
    });

    it('should scroll down on popular searches section', async () => {
        await (await MainPage.popularSearch).scrollIntoView();
    });

    it('should open the To rent tab and viewAll', async () => {
        await Utilities.existClickableAndClick(MainPage.toRentBtn);

        await (await MainPage.viewAllBtn)[0].click();
    });

    it('should validate links are functioning correctly', async () => {
        await expect(await MainPage.listApart).toBeElementsArrayOfSize({ gte: 13 });
        await PopularPage.validate();
    });
});