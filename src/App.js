import Pokemon from './components/pokemons/pokemon';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


function App() {

  return (
    <div>
      <h2>pokemon</h2>
      <Pokemon />
    </div>
  );
}

export default App;
