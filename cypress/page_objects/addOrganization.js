class AddOrganization{

    get addNewOrg(){
        return cy.get(".vs-c-my-organization-item-wrapper");
    };

    get newOrgWindow(){
        return cy.get(".vs-c-my-organization--add-new");
    };

    get nameInput(){
        return cy.get("input[type='text']");
    };

    get nextBtn(){
        return cy.get("button[name='next_btn']");
    };

    get createBtn(){
        return cy.get("button").last()
    }

    addNewOrg(nameInput){
        this.newOrgWindow.click();
        this.nameInput.type(nameInput);
        this.nextBtn.click();
        this.createBtn.click()
    }
}
export const addOrganization = new AddOrganization();
