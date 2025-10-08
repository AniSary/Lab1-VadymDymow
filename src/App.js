import React from 'react';
import './App.css';
import Message from './Message';
import Power from './Power';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Laboratorium 1 - React</h1>
        
        {/* Komponent Message z przekazaną właściwością */}
        <Message text="Witaj w mojej pierwszej aplikacji React!" />
        
        {/* Komponent Message z wartością domyślną */}
        <Message />
        
        {/* Komponent Power do obliczeń */}
        <Power />
        
      </header>
    </div>
  );
}

export default App;