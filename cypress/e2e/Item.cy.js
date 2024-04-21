/// <reference types="cypress" />
import ItemPage from "../page-objects/pages/ItemPage";

beforeEach(() => {
  ItemPage.open();
});

describe("Presence of UI elements in item page test", () => {
  it("Item has image", () => {
    ItemPage.verifyItemPicture();
  });

  it("Item has description", () => {
    ItemPage.verifyItemDescription();
  });

  it("Item has a price", () => {
    ItemPage.verifyItemPrice();
  });

  it("Item has a title", () => {
    ItemPage.verifyItemTitle();
  });
});

describe("Item can be added and removed from cart", () => {
  it("Item is added to cart", () => {
    ItemPage.addItemToCart();
  });
  it("Item is removed from cart", () => {
    ItemPage.addItemToCart();
    ItemPage.removeItemFromCart();
  });
});
