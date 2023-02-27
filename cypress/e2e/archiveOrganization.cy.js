/// <reference types = "Cypress" />

import { archiveOrganization } from "../page_objects/archiveOrganization";
import { loginPage } from "../page_objects/loginPage";
import { addOrganization} from "../page_objects/addOrganization"

describe("archive existing organization test",() => {
        before("login to the app", () => {
            cy.intercept({
                method: "GET",
                url: "https://cypress-api.vivifyscrum-stage.com/api/v2/my-organizations",
            }).as("getMyOrganizations");
            cy.visit("/login")
            loginPage.login(Cypress.env("validEmail"), Cypress.env("validPass"));
            cy.url().should("include", "/my-organizations")
            cy.visit("/my-organization");
            cy.wait("@getMyOrganizations").then((interception) => {
                expect(interception.response.statusCode).eq(200);
                expect(window.localStorage.getItem("token")).to.exist;
              });
          
            //cy.url().should("include", "my-organizations");
             //addOrganization.myOrganizationsTitle
             //   .should("be.visible")
               // .and("have.text", "My Organizations");
        });
        it("archive organization",() => {
            cy.intercept({
                method: "GET",
                url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/my_users",
            }).as("archive")
            cy.visit("/my-organizations")
            //archiveOrganization.getHiddenBtn;
            //.archiveOrganization.hidenBtnClick;
            archiveOrganization.fuckingBtn();
            
            cy.url().should("be.visible").and("include","/my-organizations")
            archiveOrganization.yesBtn
               .should("be.visible")
               .and("have.css","background-color","rgb (78,174,147)")

            cy.wait("@archive").then((interception) => {
                expect(interception.response.statusCode).eq(200);
            })


    });
})
   
