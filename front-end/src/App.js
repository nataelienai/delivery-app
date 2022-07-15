import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './context/ContextProvider';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
