import {alert} from '../mutual/basepage.js';

const contactelement= {
 ContactTab : () => cy.get(':nth-child(2) > .nav-link') ,
 ContactEmail : () => cy.get('#recipient-email'),
 ContactName: () => cy.get('#recipient-name'),
 ContactMessage: () => cy.get('#message-text'),
 SendMessage: () => cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
}

export const sendContact= 
{
    contactClick () {contactelement.ContactTab().click();},
    typeContactEmail  (user) {contactelement.ContactEmail().invoke('val', user)},
    typeContactName (existingUser) {contactelement.ContactName().invoke('val', existingUser)},
    typeContactMessage (message) {contactelement.ContactMessage().invoke('val', message)},
    submitContactMessage () {contactelement.SendMessage().click();}
}
