import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pokemon.scss';
import Images from './pokemonImages';

const pokemonID = ('https://pokeapi.co/api/v2/pokemon/1');
const pokemonList = ('https://pokeapi.co/api/v2/pokemon?limit=151');

let pokeImg = Array.from({length: 151}, (_, i) => i + 1)
function Pokemon(){
  const [data, setData] = useState([]);

  useEffect(() => {
    getName();
  }, []);

  const getName = () => {
    axios.get(pokemonList)
    .then(response => {
      var pokeName = [];
      pokeName = response.data.results

      setData(pokeName);
      })
      .catch((error) => {
        console.log(error);
    });
  }


  return (
  <div>
  <Images />
        {data.map(pokemon => (
          <div key={pokemon.name} className="name">
            <h1>{pokemon.name}</h1>
          </div>
        ))}

        {pokeImg.map(num =>(
          <div className='number'>
            <h2># {num}</h2>
          </div>
        ))}

  </div>

  )
}

export default Pokemon;
