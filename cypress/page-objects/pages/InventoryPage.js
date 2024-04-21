/// <reference types="cypress" />
import LoginPage from "./loginPage";
import BasePage from "./basePage";

import userData from "../../fixtures/userData.json";

class InventoryPage extends BasePage {
  get burgerMenuButton() {
    return cy.get("#react-burger-menu-btn");
  }

  get sortingDropdown() {
    return cy.get(".product_sort_container");
  }

  get sortingDropdownOption() {
    return cy.get(".product_sort_container option");
  }

  get pageTitle() {
    return cy.get('[data-test="title"]').contains("Products");
  }

  get cartButton() {
    return cy.get(".shopping_cart_link");
  }

  get URL() {
    return cy.url("");
  }

  open() {
    super.open("");
    LoginPage.login(
      userData.userNames.correctUser,
      userData.passwords.correctPassword
    );
    this.pageTitle.should("be.visible");
  }

  burgerMenuPresence() {
    this.burgerMenuButton.should("be.visible");
  }

  cartButtonPresence() {
    this.cartButton.should("be.visible");
  }

  sortingDropdownPresence() {
    this.sortingDropdown.should("be.visible");
  }

  sortingDropdownAmount() {
    this.sortingDropdownOption.should("have.length", 4);
  }

  openCartButton() {
    this.cartButton.click();
    this.URL.should("eq", "https://www.saucedemo.com/cart.html");
  }
}

export default new InventoryPage();
