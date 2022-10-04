describe('Cart', () => {
    

    it('Verify the cart button is visible or not', () => {
        cy.visit('http://165.232.180.98/')
        cy.get('.cart-contents').should('be.visible')

    });

    it('Verify the cart button is ', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('Lowepro Pro Roller x300 AW').type('{enter}')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        //.should('eq','')
       assert.equal(cy.title(), expected, "Lowepro Pro Roller x300 AW – Qapitol QA");
    });
   

});