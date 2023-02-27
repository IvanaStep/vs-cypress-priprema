class Arhiviranje{

    get orgBoard(){
        return cy.get(".vs-c-list__btn").eq(-2)
    }
    get boardCancelBtn(){
        return cy.get(".vs-c-modal__body > .el-button > .el-icon-close").first();
    }
    get settingsBtn(){
        return cy.get(".vs-c-site-logo").last()
    }
    get archiveBtn(){
        return cy.get("button").eq(-2)
    }
    get yesBtn(){
        return cy.get(".el-button--success")
    }

    arhiviranje1(){
        this.orgBoard.click()
    };
    arhiviranje2(){
        this.settingsBtn.click()
    }
     arhiviranje3(){
        this.archiveBtn.click()
     }  
    arhiviranje4(){
        this.yesBtn.click()
    }
    cancelBtn(){
        this.boardCancelBtn.click()
    }
}
export const arhiviranje = new Arhiviranje();