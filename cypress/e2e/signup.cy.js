describe('signup', () => {
    it.skip('adding user', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/')

        cy.get('#signup').click();

        cy.get('#firstName').type('Paul');
        cy.get('#lastName').type('Marks');

        cy.get('#email').type('pmarks@fake.com')
        cy.get('#password').type('ilovedogs')

        cy.get('#submit').click();

        // your new account should be registered and you should be in the homepage (contact list page)
        cy.url().should('include', 'https://thinking-tester-contact-list.herokuapp.com/contactList');
    })
})