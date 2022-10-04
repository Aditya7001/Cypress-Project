/// <reference types="cypress" />


describe('HomePageTest', () => {

    // this function will verify the url is secure or not.
    it('Verify the url has https ', () => {
        cy.visit('http://165.232.180.98/')
        cy.url().should('have.text','https')
    });

    // this function will verify the the homepage title
    it('Verify the header', () => {
        cy.visit('http://165.232.180.98/')
        cy.title().should('be.equal','Qapitol QA – WooCommerce')
          
    });


    // this function will verify the hyperlink is visible 
    it('Verify title hyperlink is visible', () => {
        cy.visit('http://165.232.180.98/')
        cy.get('.beta > a').should('be.visible')

    });

    //this function will verify the cart button is working or not.
    it('Verify the cart button is working or not', () => {   
        cy.visit('http://165.232.180.98/')
        cy.get("a[aria-label='Add “Lowepro Pro Roller x300 AW” to your cart']").click()
        cy.get("a[title='View cart']").click()
    });

    //this function will verify the viewcart button is working or not.
    it('Verify_ViewCart_Button', () => {
        cy.visit('http://165.232.180.98/')
        cy.get("a[aria-label='Add “Lowepro Pro Roller x300 AW” to your cart']").click()
        cy.get("a[title='View cart']").click()
    });


    
    it('Verify_Checkout_Button', () => {
        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')
        cy.get("button[value='14']").click()
        cy.get('.woocommerce-message > .button').click()
        let act = "cy.get('.page-title')"
        expect("act").to.eql("Cart page");;
    });

    it('Verify the cross button', () => {
        cy.visit('http://165.232.180.98/product/lowepro-pro-roller-x300-aw/')
        cy.get('.single_add_to_cart_button').click()
        cy.get("a[title='View your shopping cart']").should('be.visible')
        cy.get("a[title='View your shopping cart']").trigger('mouseover')
        cy.get('a.remove.remove_from_cart_button').invoke('show').click()
    });


   

});

describe('Search Functionality', () => {
    
    it('Verify the search field is visible or not', () => {
        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').should('be.visible')
    });

    it('Verify the enter key is working or not inside the search box', () => {

        cy.visit('http://165.232.180.98/')
    
            cy.get('#woocommerce-product-search-field-0').type('nikon').type('{enter}')
        
    });

    it('Verify search field is generating the correct result for correct keywords', () => {
        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('Lowepro Pro Roller x300 AW').type('{enter}')
        cy.title().should('eq','Lowepro Pro Roller x300 AW – Qapitol QA')
    });


    it('Verify search that it generating the result for wrong keywords', () => {
        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('i phone').type('{enter}')
        cy.get('.woocommerce-info').should('be.visible')
    });

    it('Verify the product count is present or not ', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('nikon').type('{enter}')
        cy.get(':nth-child(2) > .woocommerce-result-count').should('be.visible')
        
    });

    it('Verify the error message for the wrong input', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('Car').type('{enter}')

        cy.get('.woocommerce-info').should('be.visible')
        
    });

    it('Verify the error message for the wrong input', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('Car').type('{enter}')
        cy.get('.woocommerce-info').should('have.text','No products were found matching your selection.')
        
    });

    it('Without enter anything inside the search box press enter', () => {
        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('{enter}')
        cy.title().should('eq','Qapitol QA – WooCommerce')
    });

    it('Verify the search field accept any special char or not', () => {
        
        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('*%$').type('{enter}')
        

    });

    it('Verify the search field accept space at the beginning ', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('   LoweproProTactic350 AW').type('{enter}')
        cy.title().should('eq','Lowepro ProTactic 350 AW – Qapitol QA')
        
    });

    it('Verify the search field accept space at the end ', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('LoweproProTactic350 AW     ').type('{enter}')
        cy.title().should('eq','Lowepro ProTactic 350 AW – Qapitol QA')
        
    });
    it('Verify the search field accept space at the middle ', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('Lowepro     Pro    Tactic 350 AW').type('{enter}')
        cy.title().should('eq','Lowepro ProTactic 350 AW – Qapitol QA')

    });

    it('Search product with category', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('bag').type('{enter}')
        cy.get('.woocommerce-info')
        // Element should not be visible
        
    });

    it('Verify the mouse click is working or not inside the search field ', () => {

        cy.visit('http://165.232.180.98/')

        cy.get('#woocommerce-product-search-field-0').type('nikon')
        cy.get(':nth-child(1) > .site-search > .widget > .woocommerce-product-search').trigger('mousedown')
        cy.title().should('eq','Search Results for “nikon” – Qapitol QA')     
 
    });
});


describe('Cart button', () => {
    

    
    describe('Dropdown', () => {
        
        it('Verify the dropdown is select valur or not', () => {

            cy.visit('http://165.232.180.98/')

            cy.get(':nth-child(2) > .woocommerce-ordering > .orderby').select("Sort by popularity")
            cy.get(':nth-child(2) > .woocommerce-ordering > .orderby').select("Sort by average rating")

            cy.get(':nth-child(2) > .woocommerce-ordering > .orderby').select("Sort by latest")

            cy.get(':nth-child(2) > .woocommerce-ordering > .orderby').select("Sort by price: low to high")

            cy.get(':nth-child(2) > .woocommerce-ordering > .orderby').select("Sort by price: high to low")

            

            
        });

        it('Verify the seleted value should display in the dropdown', () => {

            cy.get(':nth-child(2) > .woocommerce-ordering > .orderby').select("Sort by popularity").should("have.value", "popularity")
            cy.get(':nth-child(2) > .woocommerce-ordering > .orderby').select("Sort by average rating").should("have.value", "rating")

          //  cy.get(':nth-child(2) > .woocommerce-ordering > .orderby').select("Sort by latest").should("have.value", "date")

           // cy.get(':nth-child(2) > .woocommerce-ordering > .orderby').select("Sort by price: low to high").should("have.value", "price")

            //cy.get(':nth-child(2) > .woocommerce-ordering > .orderby').select("Sort by price: high to low").should("have.value", "price-desc")
            
        });
    });

});

describe('Verify the page has hyperlink', () => {
    
    it('Verify the page has shopHyperlink', () => {
    
        cy.visit('http://165.232.180.98/')
        cy.get('#menu-item-75 > a').click()
        
    });
    
    it('Verify the cart hyperLink', () => {
     //   
    
        cy.visit('http://165.232.180.98/')
    
        cy.get('#menu-item-76 > a').click()
        cy.title().should('eq','cart – Qapitol QA')
    
    
    
    });
    
    it('Verify the search field accept space at the middle ', () => {
    
        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('Lowepro ProTactic 350 AW').type('{enter}')
    
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('be.visible')
    });
    
    it('Verify the copyright is present ', () => {
        cy.visit('http://165.232.180.98/')
    
        cy.get('.site-info').should('be.visible')
    
        
    });
    
    });