const puppeteer = require('puppeteer');

const getScreenshot = async () => {
	//exécution du navigateur headless
	const browser = await puppeteer.launch({
		headless: 'new'
	});
	const page = await browser.newPage();
	await page.goto('http://localhost:3000');
	await page.screenshot({ path : "screenshot.png" });
	await browser.close();
}
getScreenshot();