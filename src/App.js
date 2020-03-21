import React from 'react';
import Header from './Components/Header';
import Rotas from './Routes';

import './Styles.css';

const App = () => (
  <div className="App">
    <h1>
      <Header />
      <Rotas />
    </h1>
  </div>
);

export default App;
