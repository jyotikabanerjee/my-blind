import './App.css';
import React from 'react';
import BlHeader from "./components/header/bl-header";
import BlBody from "./components/body/bl-body"

function App() {
  return (
      <div className="App" className="flex-column bg-white dark:bg-black text-black dark:text-white">
        <BlHeader/>
        <BlBody/>
      </div>
  );
}

export default App;
