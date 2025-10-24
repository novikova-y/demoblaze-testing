describe('login tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('#login2', 'Log in').click();
    cy.get('#logInModal').should('be.visible');
  });

  it('successful login with valid credentials', () => {

    cy.get('#loginusername').click().wait(500).type('yulian-test');
    cy.get('#loginpassword').click().wait(500).type('Qwerty123');
    cy.contains('button', 'Log in').click();

    //verify the user is logged in
    cy.contains('#nameofuser', 'Welcome', { timeout: 10000 }).should('be.visible');

  })

  it('login with invalid password', () => {

    cy.get('#loginusername').click().wait(200).type('yulian-test');
    cy.get('#loginpassword').click().wait(200).type('Qwerty');
    cy.contains('button', 'Log in').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Wrong password.');
  });

  })

  it('login with invalid username', () => {

    cy.get('#loginusername').click().wait(200).type('yulian-tes');
    cy.get('#loginpassword').click().wait(200).type('Qwerty123');
    cy.contains('button', 'Log in').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('User does not exist.');
  });

  })

  it('login with empty password', () => {

    cy.get('#loginusername').click().wait(200).type('yulian-test');
    cy.contains('button', 'Log in').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Please fill out Username and Password.');
  });

  })

  it('login with empty username', () => {

    cy.get('#loginpassword').click().wait(200).type('Qwerty123');
    cy.contains('button', 'Log in').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Please fill out Username and Password.');
  });

  })

  it('login with empty credentials', () => {

    cy.contains('button', 'Log in').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Please fill out Username and Password.');
  });

  })

  it('successful logout', () => {

    cy.get('#loginusername').click().wait(500).type('yulian-test');
    cy.get('#loginpassword').click().wait(500).type('Qwerty123');
    cy.contains('button', 'Log in').click();
    cy.contains('#nameofuser', 'Welcome', { timeout: 10000 }).should('be.visible');
    cy.contains('#logout2', 'Log out').click();

    //verify the user is not logged in
    cy.contains('#nameofuser', 'Welcome', { timeout: 10000 }).should('not.exist');

  })


})