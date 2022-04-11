import * as React from 'react';
import { useState, useEffect } from 'react';
import './pokemonSearch.scss';
import Card from '../card/cards';

function PokemonSearch({placeholder, pokemon, hide}) {
  const [pokemonName, setPokemonName] = useState(pokemon);

  const filterSearch  = (event) => {
    event.preventDefault();
    const searchWord = event.target.value
    const x = pokemon.map(pokemon =>{
      return pokemon
      // console.log(pokemon)
    })

    const searchFilter = x.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchWord.toLowerCase());
    })
    setPokemonName(searchFilter)
  }


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
        <div>
          {pokemonName.map((pokemon, i) =>{
            return <Card key={i} pokemon={pokemon} />
          })}
        </div>
    </div>
  )
}

export default PokemonSearch;



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
