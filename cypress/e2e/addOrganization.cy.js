/// reference types = "Cypress" />

import { loginPage } from "../page_objects/loginPage";
import { addOrganization } from "../page_objects/addOrganization";
import { faker } from "@faker-js/faker";

describe("create organization test", () => {
    before("login to the app", () => {
        cy.visit("/login")
        loginPage.login(Cypress.env("validEmail"), Cypress.env("validPass"));
        cy.url().should("contain","/login");
        cy.url().should("include", "my-organizations");
    })

        it("create new organization with valid data", () => {
            cy.intercept({
                method: "POST",
                url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations",
            }).as("createOrg");

            cy.intercept({
                method:"GET",
                url: "https://cypress-api.vivifyscrum-stage.com/api/v2/my-organizations"
            }).as("getOrg")
            
            let orgId;
            let orgRandomName = faker.company.name();
            addOrganization.addNewOrg(orgRandomName);
            
            cy.wait("@createOrg").then((interception) => {
                expect(interception.response.statusCode).eq(201);
                expect(interception.response.body.name).eq(orgRandomName);
            });
            cy.visit("/my-organizations")
            cy.url()
              .should("include", "/my-organizations")
              .and("not.include",`${orgId}/boards`)
            cy.wait("@getOrg").then((interception) => {
                orgId = interception.response.body.id;
                expect(interception.response.statusCode).eq(200);
                
            })  

        })
})
