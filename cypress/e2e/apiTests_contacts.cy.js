describe('API Tests', () => {
    it.skip('POST: add contact', () => {
        cy.request({
            method: 'POST',
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
            headers:
            {
                // "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NWJhY2UyZDU1MTAwMTM1MzE1ZTUiLCJpYXQiOjE2OTgxOTMxNjZ9.sZdjLZacpaP0C1iRE0oWThxb6T4Y9G2gflnopRuOVZw",
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NWJhY2UyZDU1MTAwMTM1MzE1ZTUiLCJpYXQiOjE2OTgyNTYyNjN9.fAat2Qu1gzudKQNTHOQXiJzcWHdpAMPQ_eNMPLL-ujQ' 
            },
            body:
            {
                "firstName": "John",
                "lastName": "Cena",
                "birthdate": "1976-07-04",
                "email": "basicthugonomics@gmail.com",
                "phone": "8001234567",
                "street1": "Hall of Fame",
                "street2": "Apartment B",
                "city": "Champ town",
                "stateProvince": "MA",
                "postalCode": "12345",
                "country": "USA"
            }
        })
        // contact should be created
        .its('status').should('eq', 201)
    })

    it('GET: get contact list', () => {
        cy.request({
            method: 'GET',
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
            headers:
            {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NWJhY2UyZDU1MTAwMTM1MzE1ZTUiLCJpYXQiOjE2OTgyNTYyNjN9.fAat2Qu1gzudKQNTHOQXiJzcWHdpAMPQ_eNMPLL-ujQ"
            },
            // failOnStatusCode: false
        })
        .its('status').should('eq', 200)
    })

    it('GET: get contact', () => {
        cy.request({
            method: 'GET',
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/6538621ea748e20013f660d2',
            headers:
            {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NWJhY2UyZDU1MTAwMTM1MzE1ZTUiLCJpYXQiOjE2OTgyNTYyNjN9.fAat2Qu1gzudKQNTHOQXiJzcWHdpAMPQ_eNMPLL-ujQ"
            }
            // failOnStatusCode: false
        })
    })

    it('PUT: update contact', () => {
        cy.request({
            method: 'PUT',
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/6538621ea748e20013f660d2',
            headers:
            {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NWJhY2UyZDU1MTAwMTM1MzE1ZTUiLCJpYXQiOjE2OTgyNTYyNjN9.fAat2Qu1gzudKQNTHOQXiJzcWHdpAMPQ_eNMPLL-ujQ"
            },
            body:
            {
                "firstName": "John",
                "lastName": "Cena",
                "birthdate": "1976-07-04",
                "email": "wordlife@gmail.com",
                "phone": "8001234567",
                "street1": "Hall of Fame",
                "street2": "Apartment JC",
                "city": "Champ town",
                "stateProvince": "MA",
                "postalCode": "12345",
                "country": "USA"
            }
        })
        .its('status').should('eq', 200)
    })

    it('PATCH: update contact', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/6538621ea748e20013f660d2',
            headers:
            {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NWJhY2UyZDU1MTAwMTM1MzE1ZTUiLCJpYXQiOjE2OTgyNTYyNjN9.fAat2Qu1gzudKQNTHOQXiJzcWHdpAMPQ_eNMPLL-ujQ"
            },
            body:
            {
                "firstName": "John",
                "lastName": "Cena",
                "birthdate": "1976-07-04",
                "email": "wordlife@gmail.com",
                "phone": "8001234567",
                "street1": "Hall of Fame",
                "street2": "The Champs Block",
                "city": "Champ town",
                "stateProvince": "MA",
                "postalCode": "12345",
                "country": "USA"
            }
        })
        .its('status').should('eq', 200)
    })

    it('DELETE: delete contact', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/6538621ea748e20013f660d2',
            headers:
            {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4NWJhY2UyZDU1MTAwMTM1MzE1ZTUiLCJpYXQiOjE2OTgyNTYyNjN9.fAat2Qu1gzudKQNTHOQXiJzcWHdpAMPQ_eNMPLL-ujQ"
            },
            body:
            {
                "_id": "6538621ea748e20013f660d2",
                "firstName": "John",
                "lastName": "Cena",
                "birthdate": "1976-07-04",
                "email": "wordlife@gmail.com",
                "phone": "8001234567",
                "street1": "Hall of Fame",
                "street2": "Apartment B",
                "city": "Champ town",
                "stateProvince": "MA",
                "postalCode": "12345",
                "country": "USA",
                "owner": "65385bace2d55100135315e5",
                "__v": 0
            }
        })
        .its('status').should('eq', 200);
    })
})