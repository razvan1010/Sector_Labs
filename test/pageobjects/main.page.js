// The class contains get functions for obtaining the elements from page and functions that apply to the main page

class MainPage {
    get pageHeader() { return $('.c68284fb h1') }

    get searchBar() { return $('.a41c4dcc._6a3a3de9') }
    get valueEntered() { return $('span._0ab46ba6') }

    get forSaleBtn() { return $('button.b7afbb84=For Sale') }
    get findBtn() { return $('.c3901770._8c8f02f5') }

    get popularSearch() { return $('div.fa2044b7') }

    get toRentBtn() { return $('div.d8530318:nth-child(2)') }

    get listApart() { return $$('li a[href*="/to-rent/apartments/dubai/"]') }

    get viewAllBtn() { return $$('.fc910dcd ._2f838ff4'); }

    async search(location) {
        await (await this.searchBar).addValue(location);
    }

    open() {
        browser.url('/');
    }
}

module.exports = new MainPage();