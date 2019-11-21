const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Alex", 30);
  expect(text).toBe("Alex (30 years old)");
});

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Alex", 30);
  expect(text).toBe("Alex (30 years old)");
});

test("should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: true
    // slowMo: 80,
    // args: ["--window-size=1600,900"]
  });
  const page = await browser.newPage();

  await page.goto(
    "file:///F:/code/udemy-javascript-complete-max/12-testing/index.html"
  );

  await page.click("input#name");
  await page.type("input#name", "Anna");
  await page.click("input#age");
  await page.type("input#age", "33");
  await page.click("#btnAddUser");

  const finalText = await page.$eval(".user-item", el => el.textContent);
  expect(finalText).toBe("Anna (33 years old)");
}, 10000);
