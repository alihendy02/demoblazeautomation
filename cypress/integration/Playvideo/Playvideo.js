import {alert} from '../mutual/basepage.js';

const videoelement =  {
aboutUs: () => cy.get(':nth-child(3) > .nav-link'),
videoPlayer: () => cy.get('#example-video_html5_api'),


}


export const playVideo = {
    aboutUsClick () {videoelement.aboutUs().click();},
    videoPaused () {videoelement.videoPlayer().its('0.paused').should('equal', true);},
    videoPlay () {videoelement.videoPlayer().then(($video) => {
        $video[0].play();})}

}