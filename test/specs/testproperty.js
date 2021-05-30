const MainPage = require('../pageobjects/main.page');
const PropertiesPage = require('../pageobjects/properties.page');
const Utilities = require('../utilities/functions');

describe('Verify results match the search criteria', () => {
    it('should open and verify main url', async () => {
        MainPage.open();

        await expect(browser).toHaveUrl('https://www.bayut.com/')
    });

    it('should verify the title of main page and header displayed', async () => {
        await expect(browser).toHaveTitle("Bayut: UAE's Largest Real Estate Portal");

        await Utilities.existAndText(MainPage.pageHeader, "Search properties for sale and to rent in the UAE");
    });

    it('should add value on search and verify the value', async () => {
        await expect(await MainPage.searchBar).toBeExisting();
        await MainPage.search("Dubai Marina");

        await browser.pause(1000);
        browser.keys("\uE007");

        await Utilities.existAndText(MainPage.valueEntered, 'Dubai Marina');
    });

    it('should click on sale and find (search) buttons', async () => {
        await Utilities.existClickableAndClick(MainPage.forSaleBtn);
        await expect(await MainPage.findBtn).toHaveHrefContaining('https://www.bayut.com/for-sale/property/dubai/dubai-marina/');
        await Utilities.existClickableAndClick(MainPage.findBtn);
    });

    it('should verify new url and show new title', async () => {
        await expect(browser).toHaveUrl('https://www.bayut.com/for-sale/property/dubai/dubai-marina/');
        await expect(await PropertiesPage.infoHeader).toBeExisting();
        await expect(await PropertiesPage.infoHeader).toHaveTextContaining('Properties for sale in');
    });

    it('should verify if properties contain the selected location', async () => {
        await expect(await PropertiesPage.searchList).toBeElementsArrayOfSize({ gte: 1 }); // Check if the result obtained from the search contain at least one answer
        await (await PropertiesPage.searchList).forEach(async element => {
            await expect(await element).toHaveTextContaining('Dubai Marina');
        });
    });
});