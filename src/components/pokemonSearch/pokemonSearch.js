import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './pokemonSearch.scss';
import Card from '../card/cards';

function PokemonSearch({placeholder, pokemon}) {
  const [pokemonName, setPokemonName] = useState(pokemon);

  // const [pokemon, setPokemon] = useState({
  //   name:"",
  //   species: "",
  //   img: "",
  //   hp: "",
  //   attack: "",
  //   defense: "",
  //   types: "",
  // });

  // const searchPokemon = () => {
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) =>{
  //     setPokemon({
  //       name: pokemonName,
  //       species: response.data.species.name,
  //       img: response.data.sprites.front_default,
  //       // img: response.data.sprites.other.dream_world.front_default,
  //       hp: response.data.stats[0].base_stat,
  //       attack: response.data.stats[1].base_stat,
  //       defense: response.data.stats[2].base_stat,
  //       types: response.data.types[0].type.name,
  //     })
  //   })
  // }
  const filterSearch  = (event) => {
    event.preventDefault();
    const searchWord = event.target.value
    const searchFilter = pokemon.filter((pokemon) =>{
      return (pokemon.name.toLowerCase().includes(searchWord.toLowerCase()));
    })
    setPokemonName(searchFilter)
  }

  // const hideCards = () => {
  //   setPokemonHide(hide)
  // }

  return (
    <div>
      <div>
        <input
          type="text"
          // onChange={(event) => {setPokemonName(event.target.value)}}
          onChange={filterSearch}
          placeholder={placeholder}
          />
      </div>
      {pokemonName && (
        <div>
          {pokemonName.map((pokemon, i) =>{
            return <Card key={i} pokemon={pokemon} />
          })}
        </div>
      )}

    </div>
  )
}

export default PokemonSearch;
