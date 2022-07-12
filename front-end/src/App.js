import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Switcher from './Switcher';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switcher />
      </BrowserRouter>
    </div>
  );
}

export default App;
