import React, {useState, useEffect} from 'react';

function Images () {

  // to get the 1-151 numbers and interpolate in imageAPI
  // creates an array of numbers 1 - 151
  let pokeImg = Array.from({length: 151}, (_, i) => i + 1)

  // map through the array of numbers and interpolate them into the API
  const pokemonImage = pokeImg.map(num =>{
    return (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`);
  });

  return(
    <div>
      {pokemonImage.map(pokeI =>(
        <div className='image'>
          <img src={pokeI} alt="asd" />
        </div>
      ))}
    </div>

  );
}

export default Images;
