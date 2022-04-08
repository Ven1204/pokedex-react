import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {getAllPokemon} from '../../services/pokemon';
import {getPokemon} from '../../services/pokemon';
import Card from '../card/cards';
import './pokemonlist.scss';
import PokemonSearch from '../pokemonSearch/pokemonSearch';

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {
    // pokemons();
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      // console.log(response);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

    const prev = async () => {
      if(!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord
    }))

    setPokemonData(_pokemonData)
    //  console.log(_pokemonData)
  }


  return(
    <div>
      <PokemonSearch/>
      {
      loading? <h1>Loading...</h1> : (
        <>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
          <div className='container-pokemon_cards'>
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />
            })}
          </div>
        </>
        )
      }
    </div>
  );
}

export default PokemonList;
