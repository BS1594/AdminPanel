const { test, expect } = require("@playwright/test");

test("First test case", async ({ page }) => {
  await page.goto(
    "https://devinventorymanagement.azurewebsites.net/admin/login/?next=/admin/"
  );

  await page.locator("[id = id_username]").fill("siraj.salehinbs23@gmail.com");
  await page.locator("[id = id_password]").fill("1234568Castra");
  await page.getByText("Log in").click();
  await expect(page.getByText("Django administration")).toHaveText(
    "Django administration"
  );

  await page.getByRole("link", { name: "Products" }).click();
  const itemList = await page.locator(".field-item_id");
  console.log("before loop");
  for (let i in itemList) {
    console.log("Entered in loop");
    console.log(await itemList.nth(i).textContent());
  }
  console.log("after loop");
});
