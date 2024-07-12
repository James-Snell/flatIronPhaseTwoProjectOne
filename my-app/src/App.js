import './App.css';
import React from 'react';
import Body from "./components/Body";
import Trim from "./components/Trim";
import Drive from "./components/Drive";

function App() {


  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Body />
          <Trim />
          <Drive />
        </p>
       
      </header>
    </div>
  );
}

export default App;
