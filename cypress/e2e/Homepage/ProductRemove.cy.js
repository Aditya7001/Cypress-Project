

describe('Remover product from cart', () => {
    
    it('Verify the original price og the project is present ', () => {

        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')

        cy.get('.summary > .price > del > .woocommerce-Price-amount > bdi').should('be.visible')

      // let act = cy.get('.summary > .price > del > .woocommerce-Price-amount > bdi')
      //  assert.equal('act', 3,999.00)
       // cy.contains("a", "Custom").realHover('mouse')
       cy.get('.single_add_to_cart_button').click()

       

       

      // cy.get('#site-header-cart').trigger('mouseover').should('be.visible')

      // cy.get('a>span.woocommerce-Price-amount').trigger('mousemove')

      // cy.get('li>a.remove_from_cart_button').invoke('show')

      cy.get('#woocommerce-product-search-field-0').trigger('mouseover').invoke('show')

           //cy.contains('li>a.remove_from_cart_button').click({force:true});

     // cy.contains('a.remove_from_cart_button').click()

       //cy.get('#site-header-cart').contains('li>a.remove_from_cart_button').click()

        
    });


});