import React, { useState, useEffect } from 'react';
import axios from 'axios';

// to get the 1-151 numbers and interpolate in imageAPI
let x = 1

const imageAPI = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${x}.png`);
// imageAPI.repeat(10);
const pokemonImages = Array.apply(null, Array(151)).map(_ => imageAPI)
// console.log(pokemonImages)

const l = pokemonImages.forEach(element => {
  return element
});



const pokemonID = ('https://pokeapi.co/api/v2/pokemon/1');
const pokemonList = ('https://pokeapi.co/api/v2/pokemon?limit=151');

function Pokemon(){
  const [data, setData] = useState([]);

  useEffect(() => {
    getName();
    // getImage();
  }, []);

    const getImage = () => {
    axios.get(imageAPI)
    // .then(response => {
    //   var pokeImage = [];
    //   pokeImage = response.data.results

    //   setData(pokeImage);
    //   console.log(pokeImage)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    // });
    // console.log(pokemonImages)
  }
  const getName = () => {
    axios.get(pokemonList)
    .then(response => {
      var pokeName = [];
      pokeName = response.data.results

      setData(pokeName);
      // console.log(pokeName)
      })
      .catch((error) => {
        console.log(error);
    });
  }


  return (
    <div>
      {pokemonImages.map(image => (
        <img src={image} alt="asd"/>
      ))}
      {data.map(pokemon => (
        <div key={pokemon.name}>
          <h2># {}</h2>
          <h1>{pokemon.name}</h1>
        </div>

      ))}

    </div>
  )
}

export default Pokemon;
