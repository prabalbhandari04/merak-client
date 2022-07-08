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
  await driver.get("http://localhost:3000/auth/register/");
  await driver.findElement(By.name("firs_tname")).sendKeys(username);
  await driver.findElement(By.name("last_name")).sendKeys("lastname");
  await driver.findElement(By.css("input[type='email']")).sendKeys(email);
  await driver.findElement(By.css("input[type='password']")).sendKeys("test123@gmail.com");
  await driver.sleep(delay);
  await driver.findElement(By.css('button[type="submit"]')).click();
  await driver.sleep(delay);
  await driver.quit();
});

Given("Test login functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/auth/login/");
  await driver.findElement(By.css("input[type='email']")).sendKeys(email);
  await driver.findElement(By.css("input[type='password']")).sendKeys("test123@gmail.com");
  await driver.sleep(delay);
  await driver.findElement(By.css('button[type="submit"]')).click();
  await driver.sleep(delay);
  const url = await driver.getCurrentUrl();
  await driver.quit();
});

Given("Test Search functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/dashboard/inventory/");
  await driver.findElement(By.css("input[type='email']")).sendKeys('admin@admin.com');
  await driver.findElement(By.css("input[type='password']")).sendKeys("root");
  await driver.sleep(delay);
  await driver.findElement(By.css('button[type="submit"]')).click();
  await driver.sleep(delay);
  await driver.get("http://localhost:3000/dashboard/order/");
  await driver.findElement(By.id("search")).click();
  await driver.sleep(delay);
  await driver.findElement(By.css("input[type='text']")).sendKeys("Blaze");
  await driver.sleep(delay);
  await driver.quit();
});

Given("Test create organisation", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/new/get-started");
  await driver.findElement(By.css("input[type='email']")).sendKeys('admin@admin.com');
  await driver.findElement(By.css("input[type='password']")).sendKeys("root");
  await driver.sleep(delay);
  await driver.findElement(By.css('button[type="submit"]')).click();
  await driver.sleep(delay);
  await driver.get("http://localhost:3000/new/get-started")
  await driver.findElement(By.id("create")).click();
  await driver.findElement(By.name("name")).sendKeys('admin@admin.com');
  await driver.findElement(By.id("desc")).sendKeys('hello world');
  await driver.findElement(By.css('button[type="submit"]')).click();
  await driver.sleep(delay);
  await driver.quit();
});

Given("Test add product", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/dashboard/inventory/");
  await driver.findElement(By.css("input[type='email']")).sendKeys('admin@admin.com');
  await driver.findElement(By.css("input[type='password']")).sendKeys("root");
  await driver.sleep(delay);
  await driver.findElement(By.css('button[type="submit"]')).click();
  await driver.sleep(delay);
  await driver.findElement(By.className("rtf--mb")).click();
  await driver.findElement(By.id("add_product")).click();
  await driver.findElement(By.name("name")).sendKeys('admin@admin.com');
  await driver.findElement(By.id("desc")).sendKeys('hello world');
  await driver.sleep(delay);
  await driver.findElement(By.id("add")).click();
  await driver.findElement(By.id("cancel")).click();
  await driver.quit();
});

Given("Test for user logout", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/dashboard/inventory/");
  await driver.findElement(By.css("input[type='email']")).sendKeys('admin@admin.com');
  await driver.findElement(By.css("input[type='password']")).sendKeys("root");
  await driver.sleep(delay);
  await driver.findElement(By.css('button[type="submit"]')).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("account")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("logout")).click();
  await driver.quit();
});