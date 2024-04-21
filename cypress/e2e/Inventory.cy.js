/// <reference types="cypress" />
import InventoryPage from "../page-objects/pages/InventoryPage";

beforeEach(() => {
  InventoryPage.open();
});

describe("Presence of UI elements in inventory page test", () => {
  it("Burger menu icon is present", () => {
    InventoryPage.BurgerMenuPresence();
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
  it("Item page for first item is opened", () => {
    InventoryPage.openFirstItemPage();
  });
});
