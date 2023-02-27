class ArchiveOrganization{

    get myOrganizationsHeader(){
        return cy.get(".vs-c-my-organization__header")
    }
    get arcOrgTitle(){
        return cy.get("span [class = 'vs-c-icon--archive']")
    }
    get getHiddenBtn(){
        return cy.get(".vs-c-icon--archive").invoke("show")
    };
    get hidenBtnClick(){
        return this.getHiddenBtn().first().click()
    }
    
   
    get yesBtn(){
        return cy.get("button").last();
    };
    fuckingBtn(){
        this.getHiddenBtn.click(),
        this.hidenBtnClick.click()
    }
}
export const archiveOrganization = new ArchiveOrganization()