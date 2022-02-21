import {basePage} from '../mutual/basepage.js';
import {logIn} from '../logindemoblaze/logindemoblaze.js';
import { go } from '../mutual/basepage.js';
import { italic } from 'colorette';
import {video, playVideo} from './Playvideo.js';
 

describe ('Play About Us video' , () => {


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
    it ('Check the Video play', () => {
    
        playVideo.aboutUsClick(); 
        playVideo.videoPaused();
        playVideo.videoPlay();
})

})