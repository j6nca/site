import React,{useState} from 'react';
import Typical from 'react-typical'

// toggle theme
import {ThemeProvider} from "styled-components";
import { Style } from "./Style";
import { lightTheme, darkTheme } from "./Theme"
import {IOSSwitch} from "./Light"

function Landing(){
    const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
    return(
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <Style/>

        <div id='landing'>
            <h1>jonathan ng</h1>
            <Typical
        steps={["👤 i'm a designer", 1500, "👤 i'm a developer", 1500]}
        loop={Infinity}
        wrapper="span"
      />
      <br/>
        <span>based in 📍toronto</span>
        <br/>
        <br/>
        <IOSSwitch  color='primary' size="large" onChange={themeToggler} />

        </div>
        </>
    </ThemeProvider>
    );
}
export default Landing;