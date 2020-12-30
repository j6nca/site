import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

function About(){
    return(
            <Container id='about'>
                <Row><Col><h1 class='display-4'>about</h1></Col></Row>
                <Row><Col><p class='lead'>hi! i’m jonathan, a developer trying to transition into design. i have experience working in the banking, transportation, video and data privacy industries. <br/>
            my hobbies include chess, fishing, grilling, film, videography, and curating <a href='https://open.spotify.com/user/ddojo?si=C8jSAq0IQp6kR1ShZlPYJw'>spotify playlists</a>. <br/>
            i am currently studying systems design engineering at the university of waterloo. <a href='#contact'>chat with me!</a>
            </p></Col></Row>
            
            </Container>
    );
}
export default About;