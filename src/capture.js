const path = require('path');
const puppeteer = require('puppeteer');

module.exports = async url => {
    const browser = await puppeteer.launch({
        defaultViewport: {
            width: 1024,
            height: 768,
        }
    });
    const imagePath = path.join(__dirname, '..', 'images', `${encodeURIComponent(url)}.png`);
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({
        path: imagePath,
        fullPage: true,
    });
    await browser.close();
    return imagePath;
};
