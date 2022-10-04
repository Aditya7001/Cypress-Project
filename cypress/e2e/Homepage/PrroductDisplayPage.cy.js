/// <reference types="cypress" />
describe('Product display page', () => {

    it('Get title of the page', () => {
        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')
        cy.title().should('eq',"Lowepro Pro Roller x300 AW – Qapitol QA")
    });

    it('Verify the product name ', () => {
        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')
        cy.get('.product_title').should('have.text','Lowepro Pro Roller x300 AW')
    });

    it('Verify the url has product name', () => {
        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')
        cy.url().should('contain','lowepro-pro-roller-x300')
    });

    it('available option', () => {
        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')
        cy.get('.stock.in-stock').should('be.visible')
    });

    it('Null or zero value should not accept', () => {
        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')
        cy.get('input.input-text.qty.text').type(12)
        cy.get('.single_add_to_cart_button').click()
    });

    it('Verify the review tab is prsent', () => {
        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')
        cy.get("a[href='#tab-reviews']").should('be.visible')
    });

    it('Write a review with one star', () => {
        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')
        cy.get("a[href='#tab-reviews']").should('be.visible').click()
        cy.get('.star-3').click()
        cy.get('#comment').type('Nice!')
        cy.get('#author').type('Tom')
        cy.get('#email').type('tom@gamil.com')
        cy.get('#submit').click() 
    });

    it('Verify the duplicate comment message should display', () => {
        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')
        cy.get("a[href='#tab-reviews']").should('be.visible').click()
        cy.get('.star-3').click()
        cy.get('#comment').type('Nice!')
        cy.get('#author').type('Tom')
        cy.get('#email').type('tom@gamil.com')
        cy.get('#submit').click()
        cy.get('.wp-die-message > p').should('be.visible')
    });

    it('Verify the error message for review tab ', () => {
        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')
        cy.get("a[href='#tab-reviews']").should('be.visible').click()
        cy.get('.star-3').click()
        cy.get('#submit').click()
        cy.get('.wp-die-message > p').should('have.text','Error: Please fill the required fields.')
    });

    it('verify error message for invalid email id', () => {
        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')
        cy.get("a[href='#tab-reviews']").should('be.visible').click()
        cy.get('.star-3').click()
        cy.get('#comment').type('Nice!')
        cy.get('#author').type('Tom')
        cy.get('#email').type('tomgamil.con')
        cy.get('#submit').click()
        cy.get('.wp-die-message > p').should('be.visible')
        cy.get('.wp-die-message > p').should('have.text','Error: Please enter a valid email address.')
    });

    it('Verify the related product shown or not', () => {
        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')
        cy.get('.related > :nth-child(1)').should('be.visible')

    });

    it('Verify the copyright and site info is present', () => {
        cy.get('.site-info').should('be.visible')
        //© Qapitol QA 2022
    });

    it('Verify the user can write a review without filling the mandatory fields ', () => {
        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')
        cy.get('#tab-title-reviews > a').click()
        cy.get('#submit').click()
       
        if ( cy.get('.woocommerce-review__awaiting-approval').should('be.visible')) {
            console.log('User can write a review without enter any details')
        }
        else{
            console.log('User can not write a review without filling mandatory fields')
        }
    });

    
    
   

    
    
   

    


   

    
    

    
    

    

   

    
});