class BasePage{
    static loadHomePage(){
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number){
        cy.visit(number)
    }
}

class HomePage extends BasePage{
    static scrollToBottom(){
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop(){
        cy.get('header').scrollIntoView()
    }
}

describe('Abstraction with clases', ()=> {
    it('should scroll down and up on the page',()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
       
       
    })
})