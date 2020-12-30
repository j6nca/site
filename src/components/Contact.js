import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

function Contact(){
    return(
            <Container id='contact'>
                <Row>
                    <Col><h1 class='display-4'>contact</h1></Col>
                </Row>
                <Row>
                    <Col><ul id='socials'>
                <li><a href="https://linkedin.com/in/ngkjon">linkedin</a></li>
                <li><a href="mailto:jng.cad@gmail.com">email</a></li>
                <li><a href="https://open.spotify.com/user/ddojo?si=C8jSAq0IQp6kR1ShZlPYJw">spotify</a></li>
                <li><a href="https://www.dropbox.com/s/iztp8jyjkw5sf3v/resume.pdf?dl=0">resume</a></li>
            </ul></Col>
                </Row>
                <Row>
                    <Col>
                    <span className='lead credits'>made by me, with love 💙</span>
                    </Col>
                </Row>
            
            </Container>
    );
}
export default Contact;