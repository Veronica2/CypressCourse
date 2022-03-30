import {cyan} from "color-name"

describe('Keyboard press simulation',()=>{
    it('should submit searchbox pressing enter',()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('Some Text {enter}')
    })
})