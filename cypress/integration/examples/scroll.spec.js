describe('Scroll the page', ()=>{
    it('should scroll down and up on the page',()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.wait(500)
        cy.get('#submit-button').scrollIntoView()
        cy.wait(500)
        cy.get('header').scrollIntoView()
    })
})