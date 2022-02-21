import {basePage} from '../mutual/basepage.js';
import { go } from '../mutual/basepage.js';
import { sendContact} from './sendMessageContact.js';

describe ('Sign up',  () => {
    let credentials;

    before ('Go to the Home page',  () => {
        // load credentials from credentials.json
        cy.fixture('credentials.json').then(function(cred){
            credentials = cred;
        }); 
        
        // Navigate to the site
        go.toHomePage();
        basePage.urlShouldContain('/demoblaze.com');
    });

    beforeEach ('Reload page', () => {
        basePage.reload();
    });

    it ('Click Contact tab', () => {
        sendContact.contactClick();
        sendContact.typeContactEmail(credentials.user);
        sendContact.typeContactName(credentials.existingUser);
        sendContact.typeContactMessage(credentials.message);
        cy.wait(100);
        sendContact.submitContactMessage();
    });

   
})