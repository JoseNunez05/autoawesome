describe('functional test cases', () => {

    // accessing userinfo json file to make test blocks less clogged
    let userinfo;
    before( () => {
        cy.fixture('userinfo.json').then( (info) => {
            userinfo = info
        })
    }) 

    beforeEach('login', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
        
        cy.get('#email').type(userinfo.email);
        cy.get('#password').type(userinfo.password);

        cy.get('#submit').click();

        // you should be logged in and in the homepage
        cy.url().should('include', 'https://thinking-tester-contact-list.herokuapp.com/contactList');
    })

    it('logout feature', () => {
        // logging out
        cy.wait(5000)
        cy.get('#logout').click();

        // you should be redirected to the mainpage
        cy.url().should('include', 'https://thinking-tester-contact-list.herokuapp.com/');
    })

    it('add a new contact', () => {
        // go to contact creation page
        cy.get('#add-contact').click();
        // should be in the contact creation page
        cy.url().should('include', 'https://thinking-tester-contact-list.herokuapp.com/addContact')

        // creating contact
        cy.get('#firstName').type('Random')
        cy.get('#lastName').type('User')
        cy.get('#birthdate').type('2000-01-01')

        cy.get('#email').type('randomuser@fake.com')
        cy.get('#phone').type('1234567890')

        cy.get('#street1').type('anytown')
        cy.get('#city').type('groove avenue')
        cy.get('#stateProvince').type('State')
        cy.get('#postalCode').type('12345')
        cy.get('#country').type('country')

        cy.get('#submit').click()
    })

    it('edit contact', () => {
        cy.get('div.contacts').click();

        // should be viewing contact details
        cy.url('https://thinking-tester-contact-list.herokuapp.com/contactDetails')
        cy.get('#edit-contact').click();
        // should be viewing contact editing page
        cy.url().should('include', 'https://thinking-tester-contact-list.herokuapp.com/editContact')

        // editing contact
        cy.get('#city').clear().type('Brampton');
        cy.get('#postalCode').clear().type('L4T')
        cy.wait(3000)

        cy.get('#submit').click();
    })

    it('delete contact', () => {
        cy.get('div.contacts').click();

        // should be viewing contact details
        cy.url('https://thinking-tester-contact-list.herokuapp.com/contactDetails')
        cy.get('#delete').click();

        cy.url().should('include', 'https://thinking-tester-contact-list.herokuapp.com/contactList');
    })

    it('cancel adding contact', () => {
        // go to contact creation page
        cy.get('#add-contact').click();
        // should be in the contact creation page
        cy.url().should('include', 'https://thinking-tester-contact-list.herokuapp.com/addContact')

        // creating contact
        cy.get('#firstName').type('Random')
        cy.get('#lastName').type('User')
        cy.get('#birthdate').type('2000-01-01')

        cy.get('#email').type('randomuser@fake.com')
        cy.get('#phone').type('1234567890')

        cy.get('#street1').type('anytown')
        cy.get('#city').type('groove avenue')
        cy.get('#stateProvince').type('State')
        cy.get('#postalCode').type('12345')
        cy.get('#country').type('country')

        // cancel contact creation
        cy.wait(3000)
        cy.get('#cancel').click();
    })

    it('negative test case: error when entering wrong input/input type', () => {
        // go to contact creation page
        cy.get('#add-contact').click();
        // should be in the contact creation page
        cy.url().should('include', 'https://thinking-tester-contact-list.herokuapp.com/addContact')

        // creating contact
        cy.get('#firstName').type('Random123')
        cy.get('#lastName').type('User')
        cy.get('#birthdate').type('2000-01-01')

        cy.get('#email').type('randomuser@fake.com')
        cy.get('#phone').type('1234567890')

        cy.get('#street1').type('anytown')
        cy.get('#city').type('groove avenue')
        cy.get('#stateProvince').type('State')
        cy.get('#postalCode').type('Postal code')
        cy.get('#country').type('country')

        cy.get('#submit').click()

        // error message should appear
        cy.get('#error').should('exist')
        cy.get('#error').should('be.visible')
    })

})