import React,{useState} from 'react';
import Typical from 'react-typical'

import {ThemeProvider} from "styled-components";
import { Style } from "./Style";
import { lightTheme, darkTheme } from "./Theme"
import {IOSSwitch} from "./Light"

import {Container, Row,Col} from 'react-bootstrap'
function Landing(){
    const [theme, setTheme] = useState('dark');
    const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return(
      <Container id='landing'>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <Style/>
        <Row>
          <Col><h1 className='display-1'style={{marginTop:'40%'}}>j<IOSSwitch  color='primary' size="large" onChange={themeToggler} />
nathan ng</h1></Col>
        </Row>
        <Row>
          <Col><Typical
        steps={["👤 i'm a designer", 1500, "👤 i'm a developer", 1500]}
        loop={Infinity}
        wrapper="span"
        className='h1'
      /></Col>
          
        </Row>
        <Row>
          <Col>
        <span className='h1'>based in 📍toronto</span>
        </Col>
        </Row>
        <Row>
          <Col>
        </Col>
        </Row> 
        

        </>
    </ThemeProvider>
    </Container>
    );
}
export default Landing;