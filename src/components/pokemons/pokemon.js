import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const pokemonImages = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{}.png"
// const pokemonID = 'https://pokeapi.co/api/v2/pokemon/1'
// const pokemonList = ''https://pokeapi.co/api/v2/pokemon?limit=151''

function Pokemon(){
  const [data, setData] = useState([]);

  useEffect(() => {
		axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => {
      var pokeData = [];
      pokeData = response.data.results

      setData(pokeData);
      console.log(pokeData)
      })
      .catch((error) => {
        console.log(error);
    });
  }, []);


  return (
    <div>
      <h1>asdasdsa</h1>
      {data.map(pokemon => (
        <div>

          <h2># {}</h2>
          <h1>{pokemon.name}</h1>
        </div>

      ))}
    </div>
  )
}

export default Pokemon;
