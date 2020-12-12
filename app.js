const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const config = require('./src/config/browser');
const target = require('./src/config/target');

// Time
const Timer = require('./src/time/timer');

// Cart
const Check = require('./src/cart/check');
const Atc = require('./src/cart/atc');

const App = async () => {
    const _BROWSER = await puppeteer.launch(config);

    _BROWSER.on('targetcreated', async function f() {
        let pages = await _BROWSER.pages();
        if (pages.length > 1) {
            await pages[0].close();
            _BROWSER.off('targetcreated', f);
        }
    });

    const page = await _BROWSER.newPage();
    page.on('console', message => console.log(`${message.type().substr(0, 3).toUpperCase()} ${message.text()}`))
    await page.goto(target.cart, {waitUntil: 'networkidle2'});



    await Timer('34:59')

    console.time('Atc')
    await Check(page, target.link);
    console.timeEnd('Atc')

    return
    console.time('Atc')
    await Atc(page, target.link);
    console.timeEnd('Atc')

    await _BROWSER.close();
}

App();
