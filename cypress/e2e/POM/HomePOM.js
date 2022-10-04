class homepage{


    elements = {

      https  : () => cy.url().should('have.text','https'),
      pageHeader : () => cy.title().should('eq','Qapitol QA – WooCommerce'),
      AddToCartButton  : () => cy.get("a[aria-label='Add “Lowepro Pro Roller x300 AW” to your cart']"),
      viewCart  : () => cy.get("a[aria-label='Add “Lowepro Pro Roller x300 AW” to your cart']")      ,
      username  : () => cy.get(''),
      username  : () => cy.get(''),
      username  : () => cy.get(''),
      username  : () => cy.get(''),
      username  : () => cy.get(''),
      username  : () => cy.get('')

    }



}

module.exports= new homepage()