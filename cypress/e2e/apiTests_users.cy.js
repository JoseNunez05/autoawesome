describe('API Tests', () => {

    it.skip('POST: add user', () => {
        cy.request({
            method: 'POST',
            url: 'https://thinking-tester-contact-list.herokuapp.com/users',
            body:   
            {
                "firstName": "Mike",
                "lastName": "Pac",
                "email": "pacman@gmail.com",
                "password": "mikeypacks"
            }
        })

        // new user should be created
        .its('status').should('eq', 201);
    })

    it.only('GET: get user profile', () => {
        cy.request({
            method: 'GET',
            url: 'https://thinking-tester-contact-list.herokuapp.com/users',

            Headers:
            {
                // "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NWJhY2UyZDU1MTAwMTM1MzE1ZTUiLCJpYXQiOjE2OTgxOTMxNjZ9.sZdjLZacpaP0C1iRE0oWThxb6T4Y9G2gflnopRuOVZw",
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM5NTIzZTQ2NmM0YTAwMTMyM2M1N2QiLCJpYXQiOjE2OTgyNTU2MDR9.WX1dQ6SEvEBBCAP1-jg2MeVwZqNv0YRxSGVWRobdemk' 
            }  
        })
        .its('status').should('eq', 200);
    })

    it.skip('PATCH: update user', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
            headers:
            {
                // "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NWJhY2UyZDU1MTAwMTM1MzE1ZTUiLCJpYXQiOjE2OTgxOTMxNjZ9.sZdjLZacpaP0C1iRE0oWThxb6T4Y9G2gflnopRuOVZw",
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM5NTIzZTQ2NmM0YTAwMTMyM2M1N2QiLCJpYXQiOjE2OTgyNTU0NjZ9.EUo_N-UkRpavpxsslMlN21Hiff0xZNqhfZRBt1xYWAo' 
            },
            body: 
            {
                "firstName": 'Mike',
                "lastName": 'Pac',
                "email": 'pacmanmike@gmail.com',
                "password": 'mikeypacks'
            }
        })
        .its('status').should('eq', 200);
    })

    // will not work once we have logged in again since token is renewed.
    it.skip('POST: logout user', () => {
        cy.request({
            method: 'POST',
            url: 'https://thinking-tester-contact-list.herokuapp.com/users/logout',
            headers:
            {
                // "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NWJhY2UyZDU1MTAwMTM1MzE1ZTUiLCJpYXQiOjE2OTgxOTMxNjZ9.sZdjLZacpaP0C1iRE0oWThxb6T4Y9G2gflnopRuOVZw",
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM5NTIzZTQ2NmM0YTAwMTMyM2M1N2QiLCJpYXQiOjE2OTgyNTU2MDR9.WX1dQ6SEvEBBCAP1-jg2MeVwZqNv0YRxSGVWRobdemk' 
            }
            
        })
        // .its('status').should('eq', 200);
    })

    it.skip('POST: login user', () => {
        cy.request({
            method: 'POST',
            url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
            body:
            {
                "email": "therock@gmail.com",
                "password": "canyousmell"
            },
            // failOnStatusCode: false
        })
        .its('status').should('eq', 200)
    })

    it.skip('DELETE: delete user', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
            headers:
            {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM1NGE3OTRmZDI2ZjAwMTNhNTY0MmUiLCJpYXQiOjE2OTgyNTM2NTV9.2ITIRTb3YGfU-5KSAweBkR83QT0r3F0KRimPCH2JGSE'
            }
        })
        .its('status').should('eq', 200);
    })


})