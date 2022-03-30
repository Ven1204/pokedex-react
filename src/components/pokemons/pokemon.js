import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemon(){
  const [data, setData] = useState([]);

 useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
		axios.get('https://pokeapi.co/api/v2/pokemon?limit=99')
    .then(response => {
      var pokeData = [];
      pokeData = response.data.results
      setData(pokeData);
      console.log(pokeData)
    });
  }


  return (
    <div>
      <h1>asdasdsa</h1>
      {data.map(pokemon =>{(
        <h1>{pokemon.name}</h1>
      )})}
    </div>
  )
}

export default Pokemon;
