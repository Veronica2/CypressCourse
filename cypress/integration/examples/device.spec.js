describe('Device Test',()=>{
    it('720p',()=>{
       cy.viewport(1280,720)
       cy.visit('http://zero.webappsecurity.com')
       cy.wait(3000)
    })

    it('1080p',()=>{
        cy.viewport(1980,1080)
        cy.visit('http://zero.webappsecurity.com')
        cy.wait(3000)
     })

     it('iPhone X',()=>{
        cy.viewport('iphone-x')
        cy.visit('http://zero.webappsecurity.com')
        cy.wait(3000)
     })

     it('iPad Mini',()=>{
        cy.viewport('ipad-mini')
        cy.visit('http://zero.webappsecurity.com')
        cy.wait(3000)
     })
 

})