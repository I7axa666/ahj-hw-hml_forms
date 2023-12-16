import puppeteer from 'puppeteer';

describe('Page start', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('page should render on page', async () => {
    await page.goto('http://localhost:9000/');

    await page.waitForSelector('.btn');
  });

  test('after click should add popover', async () => {
    await page.goto('http://localhost:9000/');

    const button = await page.$('.btn');

    await button.click();

    await page.waitForSelector('.popover-body');
  });

  afterEach(async () => {
    await browser.close();
  });
});
