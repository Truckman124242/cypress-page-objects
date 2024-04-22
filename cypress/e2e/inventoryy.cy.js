/// <reference types="cypress" />
import inventoryPage from "../page-objects/pages/inventoryPage";
import InventoryPage from "../page-objects/pages/inventoryPage";
import itemPage from "../page-objects/pages/itemPage";

beforeEach(() => {
  InventoryPage.open();
});

describe("Presence of UI elements in inventory page test", () => {
  it("Burger menu icon is present", () => {
    InventoryPage.burgerMenuPresence();
  });

  it("Cart icon is present", () => {
    InventoryPage.cartButtonPresence();
  });

  it("Sorting dropdown is present", () => {
    InventoryPage.sortingDropdownPresence();
  });

  it("Sorting dropdown has correct options amount", () => {
    InventoryPage.sortingDropdownAmount();
  });
});

describe("Cart page test", () => {
  it("Cart page is opened", () => {
    InventoryPage.openCartButton();
  });
});

describe("Specific item page test", () => {
  it("Specific item page is opened", () => {
    InventoryPage.openItemPage(1)
  });
});
