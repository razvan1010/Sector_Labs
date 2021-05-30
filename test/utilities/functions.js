// The class contains utility functions needed for different parts of the code

class Utilities {
    async existAndText(el, text) {
        await expect(await el).toBeExisting();
        await expect(await el).toHaveText(text);
    }

    async existClickableAndClick(el) {
        await expect(await el).toBeExisting();
        await expect(await el).toBeClickable();
        await (await el).click();
    }
}

module.exports = new Utilities();