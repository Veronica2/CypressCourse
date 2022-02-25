
describe("Browser Actions",() => {
  it('should load books website',()=> {
      cy.visit('http://books.toscrape.com/index.html',{timeout:4000})
      cy.url().should('include','index.html')
      cy.log('Before Reload')
      cy.reload()
      cy.$$('After Reload')
  })

  it('should click on Travel category', ()=> {
      cy.get('a')
        .contains('Travel')
        .click()
      cy.get('h1').contains('Travel') 
  }) 

  it('should display correct number of books', ()=>{
      cy.get('.product_pod').its('length').should('eq', 11)
  })

  it('Should click on Poetry category', ()=>{
      cy.get('a').contains('Poetry').click()
      cy.get('h1').contains('Poetry')
  })

  it('Should click on olio book', ()=>{
    {timeout:2000}
    cy.get('a').contains('Olio').click()

  })

  it('Should check the price of olio book', ()=>{
    cy.get('.price_color').contains('£23.88')

  })
})