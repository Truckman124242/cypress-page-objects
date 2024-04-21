/// <reference types="cypress" />
import LoginPage from "./loginPage";
import BasePage from "./basePage";
import InventoryPage from "./inventoryPage";
import userData from "../../fixtures/userData.json";

class ItemPage extends BasePage {
    
  get itemPicture() {
    return cy.get(".inventory_details_img");
  }

  get itemDescription() {
    return cy.get(".inventory_details_desc");
  }

  get itemPrice() {
    return cy.get(".inventory_details_price");
  }

  get itemTitle() {
    return cy.get(".inventory_details_name");
  }

  get allItems() {
    return cy.get(".inventory_item");
  }

  get addToCartButton() {
    return cy.get("#add-to-cart");
  }

  get removeButton() {
    return cy.get("#remove");
  }

  open() {
    super.open("");
    LoginPage.login(
      userData.userNames.correctUser,
      userData.passwords.correctPassword
    );
    InventoryPage.pageTitle.should("be.visible");
    this.openItemPage(0);
    cy.url().should("include", "/inventory-item.html");
  }

  openItemPage(itemIndex) {
    this.allItems.eq(itemIndex).find(".inventory_item_name").click();
  }

  verifyItemDescription() {
    this.itemDescription.should("be.visible");
  }

  verifyItemPicture() {
    this.itemPicture.should("be.visible");
  }

  verifyItemPrice() {
    this.itemPrice.should("be.visible");
  }

  verifyItemTitle() {
    this.itemTitle.should("be.visible");
  }

  addItemToCart() {
    this.addToCartButton.should("be.visible");
    this.addToCartButton.click();
    this.removeButton.should("be.visible");
  }

  removeItemFromCart() {
    this.removeButton.should("be.visible");
    this.removeButton.click();
    this.addToCartButton.should("be.visible");
  }
}

export default new ItemPage();
