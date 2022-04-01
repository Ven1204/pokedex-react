import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pokemon.scss';
import Images from './pokemonImages';
import Names from './pokemonNames';
import Numbers from './pokemonNumbers';
import Header from '../header/header';

const pokemonList = ('https://pokeapi.co/api/v2/pokemon?limit=151');

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

    <div className='container'>
      <div className='header-cont'>
        <Header
        data={data}
        />
      </div>

      <Images />
      <Names
      data={data}
      />
      <Numbers />
    </div>

  )
}

export default Pokemon;
