
describe('Search Result Page Test Cases', () => {
    
it.skip('Verify the page title', () => {

    cy.visit('http://165.232.180.98/?s=lowepro&post_type=product')
    cy.title().should('eq','Search Results for “lowepro” – Qapitol QA')
    cy.get('.woocommerce-products-header__title').should('have.text','Search results: “lowepro”')
    cy.url().should('contain','lowepro')
    


});

it('Test viewport for samsung-s10	', () => {
    
cy.visit('http://165.232.180.98/')
cy.viewport('samsung-s10')

});

it('ViewPort for ipad-mini', () => {

    cy.visit('http://165.232.180.98/')
    cy.viewport('samsung-s10')
    
});


it('Storefront product pagination', () => {

    cy.visit('http://165.232.180.98/')
   
    cy.get('#woocommerce-product-search-field-0').type('Lowepro ProTactic 350 AW').type('{enter}') 

    cy.get('//*[@id="product-16"]/nav/a[1]').click()
    
});

});