/// <reference types = "Cypress" />
import { loginPage } from "../page_objects/loginPage";
 

describe("login test",() => {
    before("visit login page", () => {
        cy.visit("/login");
        cy.url().should("include","/login");
        loginPage.loginHeading
        .should("be.visible")
        .and("have.text","Log in with your existing account")
        loginPage.loginButton.should("be.visible").and("have.css","background-color","rgb(78, 174, 147)")

    });
    it("login with valid credentials", () => {
        cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
        }).as("successfulLogin");
        
        loginPage.login(Cypress.env("validEmail"),Cypress.env("validPass"));

        cy.wait("@successfulLogin").then((interception) => {
            expect(interception.response.statusCode).eq(200)
        
        });
        cy.url().should("contain","/login")
    });
})
