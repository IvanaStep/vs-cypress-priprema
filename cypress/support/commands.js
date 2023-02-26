// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("loginViaBackend",() => {
    cy.request({
        method : "POST",
        url : "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
        body : {
            email : Cypress.env("validEmail"),
            password: Cypress.env("validPass"),
        }.then((response) => {
            window.localStorage.setItem("token",response.body.token);
            window.localStorage.setItem("user",JSON.stringify(response.body.user));
            window.localStorage.setItem("user_id",response.body.user.id);
        })
    })
})
Cypress.Commands.add("CreateNewOrg",() => {
    cy.request({
                method : "GET",
                url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/26350/boards-data",
                body : {
                    user_id: 3323,
                    last_route_params:{
                        name:"organization",
                        params: {organizationId:26350},
                    }
                }
            }).then((response) => {
                window.localStorage.setItem("orgId",response.body.last_route_params.params.organizationId)
            })
})

Cypress.Commands.add("MyOrganization",() => {
    cy.request({
        method: "GET",
        url : "https://cypress-api.vivifyscrum-stage.com/api/v2/my-organizations",
        body: {
            id: 26364,
            status: "active"
            }
        }).then((response) => {
            window.localStorage.setItem("myOrgId",response.body.id)
        })

    })
