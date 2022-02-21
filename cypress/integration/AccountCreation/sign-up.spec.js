import {basePage} from '../mutual/basepage.js';
import { go } from '../mutual/basepage.js';
import {signUp} from './sign-up.js';

describe ('Sign up', function () {
    let credentials;

    before ('Go to the Home page', function () {
        // load credentials from credentials.json
        cy.fixture('credentials.json').then(function(cred){
            credentials = cred;
        }); 
        
        // Navigate to the site
        go.toHomePage();
        basePage.urlShouldContain('/demoblaze.com');
    });

    beforeEach ('Reload page', function(){
        basePage.reload();
    });

    it ('Display modal after clicking on sign up', function(){
        signUp.clickOnSignUp();
        
        signUp.signUpModalShouldBeVisible();
    });

    it ('Display the text "Sign Up" in the sign up modal title', function(){
        signUp.clickOnSignUp();

        signUp.modalTitleShouldHaveText('Sign up');
    });

    it ('Close modal after clicking on cross button', function() {
        signUp.clickOnSignUp();
        signUp.clickOnCrossButton();

        signUp.signUpModalShoulNotBeVisible();
    });

    it ('Display an alert asking to fill in the required data if nothing is typed', function(){
        signUp.clickOnSignUp();
        signUp.clickOnSignUpButton();

        signUp.signUpAlertShouldHaveText('Please fill out Username and Password.');
    });

    it ('Display an alert warning abut the user pre-existence if the user is duplicated', function(){
        signUp.clickOnSignUp();
        signUp.typeUser(credentials.existingUser);
        signUp.typePassword(credentials.password);
        signUp.clickOnSignUpButton();

        signUp.signUpAlertShouldHaveText('This user already exist.');
    });

    it ('Display a success alert if the user is new', function() {
        signUp.clickOnSignUp();
        signUp.typeUser(credentials.newUser);
        signUp.typePassword(credentials.password);
        signUp.clickOnSignUpButton();

        signUp.signUpAlertShouldHaveText('Sign up successful.');
    });

   
})