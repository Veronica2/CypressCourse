describe('Select Box' , ()=>{   

it ('should select an option from select box', ()=>{
    cy.visit('https://devexpress.github.io/testcafe/example/')
    cy.get('#preferred-interface').select('Both')
    cy.get('#preferred-interface').should('have.value','Both')
})

})
