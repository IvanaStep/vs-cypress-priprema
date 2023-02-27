// <reference types = "Cypress" />

import { archiveOrganization } from "../page_objects/archiveOrganization";
import { loginPage } from "../page_objects/loginPage";
import { addOrganization} from "../page_objects/addOrganization"
import { arhiviranje } from "../page_objects/arhiviranje";



describe("archive existing organization test",() => {
        before("login to the app", () => {
            cy.visit("/login")
            loginPage.login(Cypress.env("validEmail"),Cypress.env("validPass"));
            loginPage.loginHeading.should("not.exist");
        });
        it("archive organization",() => {
            arhiviranje.arhiviranje1();
            cy.url().should("contain","/boards");
            arhiviranje.cancelBtn();
            cy.url().should("contain","/boards");
            arhiviranje.arhiviranje2();
            cy.url().should("contain","/settings")
            arhiviranje.arhiviranje3();
            arhiviranje.archiveBtn 
               .should("be.visible")
            cy.url().should("contain","/settings");
            arhiviranje.arhiviranje4();
        })       
})
