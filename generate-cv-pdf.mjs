import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('http://localhost:4321/cv-print', { waitUntil: 'networkidle0' });
await page.pdf({
  path: 'Jean_Jinzi_Niu_CV.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: '10mm', bottom: '10mm', left: '12mm', right: '12mm' },
});
await browser.close();
console.log('PDF saved: Jean_Jinzi_Niu_CV.pdf');
