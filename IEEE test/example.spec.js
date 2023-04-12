// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://ieeexplore.ieee.org/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/IEEE Xplore/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://ieeexplore.ieee.org/');

  // Click the advanced search button.
  await page.getByRole('link', { name: 'ADVANCED SEARCH' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*advanced/);
});

/*test.only('focus this test', async ({ page }) => {
  await page.goto('https://ieeexplore.ieee.org/');
  await page.locator('select').selectOption('Books');
  await page.locator('input[aria-label="Enter search text"]').fill('Quality Assurance');
  await page.locator('.stats-Global_Search_Icon').click();
  //setTimeout(()=> {}, 2000);
  await expect(page).toHaveURL(/.*searchresult.jsp?newsearch=true&contentType=books&queryText=quality%20assurance/);
}); */



test('Search for Books', async ({ page }) => {
  await page.goto('https://ieeexplore.ieee.org/');
  await page.locator('select').selectOption('Books');
  await page.locator('input[aria-label="Enter search text"]').fill('Quality Assurance');
  await page.locator('button[aria-label]').click();
  
  await expect(page).toHaveURL(/.*searchresult.jsp?newsearch=true&contentType=books&queryText=Quality%20Assurance/);
});
/*
test('Search for Conferences', async ({ page }) => {
  await page.goto('https://ieeexplore.ieee.org/');
  await page.locator('select').selectOption('Conferences');
  await page.locator('input[aria-label="Enter search text"]').fill('Quality Assurance');
  await page.locator('button[aria-label]').click();
  
  await expect(page).toHaveURL(/.*searchresult.jsp?newsearch=true&contentType=conferences&queryText=Quality%20Assurance/);
});*/

/*test('Search for Cources', async ({ page }) => {
  await page.goto('https://ieeexplore.ieee.org/');
  await page.locator('select').selectOption('Courses');
  await page.locator('input[aria-label="Enter search text"]').fill('Quality Assurance');
  await page.locator('button[aria-label]').click();
  
  await expect(page).toHaveURL(/.*searchresult.jsp?newsearch=true&contentType=courses&queryText=Quality%20Assurance/);
});*/

/*test.only('Search for Journals & Magazines', async ({ page }) => {
  await page.goto('https://ieeexplore.ieee.org/');
  await page.locator('select').selectOption('Journals & Magazines');
  await page.locator('input[aria-label="Enter search text"]').fill('Quality Assurance');
  await page.locator('button[aria-label]').click();
  
  await expect(page).toHaveURL(/.*searchresult.jsp?newsearch=true&contentType=periodicals&queryText=Quality%20Assurance/);
});*/

/*test.only('Search for Standards', async ({ page }) => {
  await page.goto('https://ieeexplore.ieee.org/');
  await page.locator('select').selectOption('Standards');
  await page.locator('input[aria-label="Enter search text"]').fill('Quality Assurance');
  await page.locator('button[aria-label]').click();
  
  await expect(page).toHaveURL(/.*searchresult.jsp?newsearch=true&contentType=standards&queryText=Quality%20Assurance%27/);
}); */

