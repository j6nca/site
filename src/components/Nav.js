import React,{useRef} from 'react';

function Nav(){
    return(
        <ul class='navbar'>
            <li class='nav-item'><a href='#landing'>home</a></li>
            <li class='nav-item'><a href='#about'>about</a></li>
            <li class='nav-item'><a href='#work'>work</a></li>
            <li class='nav-item'><a href='#contact'>contact</a></li>
        </ul>
    );
}
export default Nav;