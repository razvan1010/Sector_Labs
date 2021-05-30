// The class contains get functions for obtaining the elements from properties page

class PropertiesPage {
    get infoHeader() { return $('h1._2aa3d08d') }

    get searchList() { return $$('li.ef447dde ._7afabd84') }
}

module.exports = new PropertiesPage();