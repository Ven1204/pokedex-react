import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './pokemonSearch.scss';
import Card from '../card/cards';

function PokemonSearch() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
    name:"",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    types: "",
  });

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) =>{
      setPokemon({
        name: pokemonName,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        // img: response.data.sprites.other.dream_world.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        types: response.data.types[0].type.name,
      })
    })
  }


  return (
    <div>
      <div>
        <h1>pokemon</h1>
        <input type="text" onChange={(event) => {setPokemonName(event.target.value);
        }}/>
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
      <div>
        {/* <Card pokemon={pokemon}/> */}
      </div>
    </div>
  )
}

export default PokemonSearch;
