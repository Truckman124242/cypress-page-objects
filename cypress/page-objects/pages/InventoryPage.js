/// <reference types="cypress" />
import LoginPage from "./LoginPage";
import BasePage from "./BasePage";

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

  get firstItem() {
    return cy.get("#item_0_title_link");
  }

  get URL() {
    return cy.url("");
  }

  get firstItemTitle() {
    return cy.get(".inventory_details_name");
  }

  open() {
    super.open("");
    LoginPage.login(
      userData.userNames.correctUser,
      userData.passwords.correctPassword
    );
    this.pageTitle.should("be.visible");
  }

  BurgerMenuPresence() {
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

  openFirstItemPage() {
    this.firstItem.click();
    this.URL.should("include", "id=0");
    this.firstItemTitle.should("have.text", "Sauce Labs Bike Light");
  }
}

export default new InventoryPage();
