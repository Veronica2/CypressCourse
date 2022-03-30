const { includes } = require("cypress/types/lodash")

describe('Working with inputs', () =>{

    it('should override the current time',()=>{
        const date = new Date (2020,3,10).getTime() //return a timestamp
        cy.clock(date)
        cy.log(date)
    })

    it('Should load login page', ()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.clearCookies({log:true})
        cy.clearLocalStorage('your item', {log:true})
        cy.title().should('include','Zero - Log in')
    })
    it('should fill username', () =>{
        cy.get('#user_login').as('username')
        cy.get('#username').clear()
        cy.get('#username').type('Some Invalid Name',{delay:50})

    })

    it('should fill password', () =>{
        cy.get('#password').as('password')
        cy.get('#password').clear()
        cy.get('#password').type('Some Invalid Password')
    })

    it('should mark checkbox',()=>{
        cy.get('input[type="checkbox"]').click()
    })

    it('should sumit login form', () =>{
        cy.contains('Sign in').click()
    })

    it('should display error message', () =>{
        cy.get('.alert-error')
        .should('be.visible')
        .and('contain','Login and/or password are wrong.')
    })
})