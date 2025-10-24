describe('Purchase laptop tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successful laptop purchase after login', () => {
    cy.contains('#login2', 'Log in').click();
    cy.get('#logInModal').should('be.visible');
    cy.get('#loginusername').click().wait(500).type('yulian-test');
    cy.get('#loginpassword').click().wait(500).type('Qwerty123');

    cy.contains('button', 'Log in').click();
    cy.contains('#nameofuser', 'Welcome', { timeout: 10000 }).should('be.visible');
    cy.contains('Laptops').click();

    //wait until the laptops are filtered
    cy.wait(500);
    cy.get('.card-title a').first().click();
    cy.contains('Add to cart').should('be.visible').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Product added');
    });

    cy.contains('Cart').click();

    //verify the laptop is in the cart
    cy.contains('Delete').should('be.visible');

    cy.contains('button','Place Order').should('be.visible').click();
    cy.get('#orderModal').should('be.visible');

    cy.get('#name').type('Yulian-test');
    cy.get('#country').type('Germany');
    cy.get('#city').type('Berlin');
    cy.get('#card').type('4242424242424242');
    cy.get('#month').type('12');
    cy.get('#year').type('2030');
    cy.contains('Purchase').click();

    cy.get('.sweet-alert').should('be.visible')
      .and('contain', 'Thank you for your purchase!');

    cy.contains('button', 'OK').should('be.visible').click()
  })

  it('successful laptop purchase without login', () => {

    cy.contains('Laptops').click();

    //wait until the laptops are filtered
    cy.wait(500);
    cy.get('.card-title a').first().click();
    cy.contains('Add to cart').should('be.visible').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Product added');
    });

    cy.contains('Cart').click();

    //verify the laptop is in the cart
    cy.contains('Delete').should('be.visible');

    cy.contains('button','Place Order').should('be.visible').click();
    cy.get('#orderModal').should('be.visible');

    cy.get('#name').type('Yulian-test');
    cy.get('#country').type('Germany');
    cy.get('#city').type('Berlin');
    cy.get('#card').type('4242424242424242');
    cy.get('#month').type('12');
    cy.get('#year').type('2030');
    cy.contains('button', 'Purchase').click();

    cy.get('.sweet-alert').should('be.visible')
      .and('contain', 'Thank you for your purchase!');

    cy.contains('button', 'OK').should('be.visible').click()

  })

  it.skip('purchase with empty cart (known bug)', () => {
    cy.get('#login2').click();
    cy.get('#logInModal').should('be.visible');
    cy.get('#loginusername').click().wait(500).type('yulian-test');
    cy.get('#loginpassword').click().wait(500).type('Qwerty123');

    cy.contains('button', 'Log in').click();
    cy.contains('#nameofuser', 'Welcome', { timeout: 10000 }).should('be.visible');

    cy.contains('Cart').click();

    // this button shouldn't be visible/active
    cy.contains('button','Place Order').should('be.disabled');

  })

  it.skip('purchase after removing the laptop from cart (known bug)', () => {
    cy.get('#login2').click();
    cy.get('#logInModal').should('be.visible');
    cy.get('#loginusername').click().wait(500).type('yulian-test');
    cy.get('#loginpassword').click().wait(500).type('Qwerty123');

    cy.contains('button', 'Log in').click();
    cy.contains('#nameofuser', 'Welcome', { timeout: 10000 }).should('be.visible');

    cy.contains('Laptops').click();
    //wait until the laptops are filtered
    cy.wait(500);
    cy.get('.card-title a').first().click();
    cy.contains('Add to cart').should('be.visible').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Product added');
    });

    cy.contains('Cart').click();

    //verify the laptop is in the cart
    cy.contains('Delete').should('be.visible').click();

    //verify the laptop is deleted from the cart
    cy.contains('Delete').should('not.exist');
    
    // this button shouldn't be visible/active
    cy.contains('button','Place Order').should('be.disabled');

  })

  it.skip('laptop purchase with invalid card (known bug)', () => {
    cy.get('#login2').click();
    cy.get('#logInModal').should('be.visible');
    cy.get('#loginusername').click().wait(500).type('yulian-test');
    cy.get('#loginpassword').click().wait(500).type('Qwerty123');

    cy.contains('button', 'Log in').click();
    cy.contains('#nameofuser', 'Welcome', { timeout: 10000 }).should('be.visible');
    cy.contains('Laptops').click();
    //wait until the laptops are filtered
    cy.wait(500);
    cy.get('.card-title a').first().click();
    cy.contains('Add to cart').should('be.visible').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Product added');
    });

    cy.contains('Cart').click();

    //verify the laptop is in the cart
    cy.contains('Delete').should('be.visible');

    cy.contains('button','Place Order').should('be.visible').click();
    cy.get('#orderModal').should('be.visible');

    cy.get('#name').type('Yulian-test');
    cy.get('#country').type('Germany');
    cy.get('#city').type('Berlin');
    cy.get('#card').type('test');
    cy.get('#month').type('12');
    cy.get('#year').type('2030');
    cy.contains('Purchase').click();

    // user should get an error notification to use a valid card
    cy.get('.sweet-alert').should('contain', 'Error');
  })

  it.skip('laptop purchase without address (known bug)', () => {
    cy.get('#login2').click();
    cy.get('#logInModal').should('be.visible');
    cy.get('#loginusername').click().wait(500).type('yulian-test');
    cy.get('#loginpassword').click().wait(500).type('Qwerty123');

    cy.contains('button', 'Log in').click();
    cy.contains('#nameofuser', 'Welcome', { timeout: 10000 }).should('be.visible');
    cy.contains('Laptops').click();
    //wait until the laptops are filtered
    cy.wait(500);
    cy.get('.card-title a').first().click();
    cy.contains('Add to cart').should('be.visible').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Product added');
    });

    cy.contains('Cart').click();

    //verify the laptop is in the cart
    cy.contains('Delete').should('be.visible');

    cy.contains('button','Place Order').should('be.visible').click();
    cy.get('#orderModal').should('be.visible');

    cy.get('#name').type('Yulian-test');
    cy.get('#country').type(' ');
    cy.get('#city').type(' ');
    cy.get('#card').type('4242424242424242');
    cy.get('#month').type('12');
    cy.get('#year').type('2030');
    cy.contains('Purchase').click();

    // user should get an error notification to fill in the address
    cy.get('.sweet-alert').should('contain', 'Error');
  })

  
})