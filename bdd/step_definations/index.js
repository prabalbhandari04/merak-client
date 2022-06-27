const { expect, assert } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

let username =
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
username=  username.substring(0,9)
const email = `${username}@example.com`;

let search = 
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    search =  search.substring(0,9)

Given("Test registration functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/");
  await driver.findElement(By.name("name")).sendKeys("`testname");
  await driver.findElement(By.name("username")).sendKeys(username);
  await driver.findElement(By.name("email")).sendKeys(email);
  await driver.findElement(By.name("password")).sendKeys("test123@gmail.com");
  await driver.sleep(delay);
  await driver.findElement(By.css('button[type="submit"]')).click();

  await driver.wait(until.elementLocated(By.name("emailOrUsername")), 30000);
  expect(await driver.wait(until.elementLocated(By.name("emailOrUsername"))));
  await driver.quit();
});

Given("Test login functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/");
  await driver.findElement(By.name("emailOrUsername")).sendKeys(username);
  await driver.findElement(By.name("password")).sendKeys("test123@gmail.com");
  await driver.sleep(delay);
  await driver.findElement(By.css('button[type="submit"]')).click();
  await driver.sleep(delay);

  const url = await driver.getCurrentUrl();
  assert.strictEqual(url,"http://localhost:3000/")

  // await driver.wait(until.elementLocated(By.id("registerForm")), 30000);
  // expect(await driver.wait(until.elementLocated(By.id("registerForm"))));
  // await driver.quit();
});

Given("Test search product", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/inventory/");
  await driver.findElement(By.name("search")).sendKeys("ice cream");
  await driver.sleep(delay);
  await driver.findElement(By.css('button[type="submit"]')).click();

  await driver.wait(until.elementLocated(By.name("search")), 30000);
  expect(await driver.wait(until.elementLocated(By.name("search"))));
  await driver.quit();
});
