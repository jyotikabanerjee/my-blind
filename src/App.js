import './App.css';
import React from 'react';
import BlHeader from "./components/header/bl-header";
import BlBody from "./components/body/bl-body"

function App() {
  return (
      <div className="App flex-column">
        <BlHeader/>
        <BlBody/>
      </div>
  );
}

export default App;
