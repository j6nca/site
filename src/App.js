import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

// my stuff
import Nav from './components/Nav';
import Content from './components/Content';





function App() {
  

  return (

      
    <div className="App">
      <header className="App-header"></header>
           <Nav></Nav>
      <Content></Content>
    </div>
    
  );
}

export default App;
