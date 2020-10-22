import React from 'react';
import Landing from './Landing'
import About from './About'
import Work from './Work'
import Contact from './Contact'



function Content(){
    return(
        <div id='content'>
            <Landing/>
            <About/>
            <Work/>
            <Contact/>
        </div>
    );
}
export default Content;