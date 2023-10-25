describe('API Tests', () => {

    // beforeEach('visit page', () => {
    //     cy.visit('/')
    // })

    it('POST: add user', () => {
        cy.log('hello world!')

        cy.get('#signup').click();

        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Cena');

        cy.get('#email').type('wordlife@gmail.com')
        cy.get('#password').type('basicthugonomics')

        cy.get('#submit').click();

        // your new account should be registered and you should be in the homepage (contact list page)
        // cy.url().should('include', 'https://thinking-tester-contact-list.herokuapp.com/contactList');
    })

    it.only('GET: get user profile', () => {
        cy.visit('/')
    })

    it('PATCH: update user', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://thinking-tester-contact-list.herokuapp.com/users',
            Headers:
            {
                "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NWJhY2UyZDU1MTAwMTM1MzE1ZTUiLCJpYXQiOjE2OTgxOTMxNjZ9.sZdjLZacpaP0C1iRE0oWThxb6T4Y9G2gflnopRuOVZw",
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NWJhY2UyZDU1MTAwMTM1MzE1ZTUiLCJpYXQiOjE2OTgxOTMxNjZ9.sZdjLZacpaP0C1iRE0oWThxb6T4Y9G2gflnopRuOVZw',
                "Content-Type": "application/json"
            },
            body: 
            {
                "firstName": 'Dwayne',
                "lastName": 'Johnson',
                "email": 'therockcooks@gmail.com',
                "password": 'canyousmell'
            }
        })
        .its('status').should('eq', 200);
    })

    it('POST: logout user', () => {
        cy.request({
            method: 'POST',
            url: 'https://thinking-tester-contact-list.herokuapp.com/users',
            headers:
            {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NWJhY2UyZDU1MTAwMTM1MzE1ZTUiLCJpYXQiOjE2OTgxOTIzMzV9.lpstARRka3jQtHeKA_PYFqUZKWddpTAi1m7SP85PHSI'
            },
            failOnStatusCode: false
        })
    })

    it('POST: login user', () => {
        cy.request({
            method: 'POST',
            url: 'https://thinking-tester-contact-list.herokuapp.com/users',
            body:
            {
                "email": "therock@gmail.com",
                "password": "canyousmell"
            },
            failOnStatusCode: false
        })
        // .its('status').should('eq', 200)
    })

    it('DELETE: delete user', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://thinking-tester-contact-list.herokuapp.com/users',
            headers:
            {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NWJhY2UyZDU1MTAwMTM1MzE1ZTUiLCJpYXQiOjE2OTgxOTMxNjZ9.sZdjLZacpaP0C1iRE0oWThxb6T4Y9G2gflnopRuOVZw'
            }
        })
        // .its('status').should('eq', 200);
    })


})