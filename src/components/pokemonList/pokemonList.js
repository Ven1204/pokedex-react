import * as React from 'react';
import { useState, useEffect } from 'react';
import { getAllPokemon } from '../../services/pokemon';
import { getPokemon, getPokemonSearch, image} from '../../services/pokemon';
import Card from '../card/cards';
import PokemonSearch from '../pokemonSearch/pokemonSearch';


function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonSearchData, setPokemonSearchData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const [hideInitialList, setHideInitialList] = useState(true);

  useEffect(() => {
    // pokemons();
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      // console.log(response);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      await pokemonSearch(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const home = async () => {
      if(!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(initialUrl);
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
    setHideInitialList(true);
  }

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

  const pokemonSearch = async (data) =>{
    let _pokemonSearchData = await Promise.all(data.map(async pokemon => {
      let pokeSearchArr = await getPokemonSearch(pokemon.url);
      return pokeSearchArr
    }))

    setPokemonSearchData(_pokemonSearchData);
    // console.log(_pokemonSearchData)
  }

  const hide = () => {
    setHideInitialList(false);
  }


  return(
    <div className='wallpaper' >

      {/* header-container */}
      <div className='img-header' >
        {/* pokemon-logo */}
        <div className='image-poke-logo'>
          <img  onClick={home} src="https://c4.wallpaperflare.com/wallpaper/827/674/341/pokemon-wallpaper-preview.jpg" alt="" />
        </div>

        {/* image-pokemon1*/}
        <div className='image-mewtoo'>
          <img src="https://media4.giphy.com/media/Jq81o9UbQeLcm408jW/giphy.gif?cid=790b7611bcf16c265c924f63df2e6994e1b74501d4218d1f&rid=giphy.gif&ct=s" alt="" />
        </div>

        {/* image-pokemon2 */}
        <div className='image-qwe'>
          <img  src="https://media2.giphy.com/media/D3IozBXyAvMIx5Ck0E/giphy.gif?cid=790b7611ce7047d445926eeec910a6ac0c51f4d3c7f91278&rid=giphy.gif&ct=s" alt="" />
        </div>

        {/* image-pokemon3 */}
        <div className='image-wer'>
          <img className='a' src="https://media1.giphy.com/media/kW2ldfi018BbN3DwcU/giphy.gif?cid=790b76111a7dab47bbdaf2136ecff2156bbad80f6b3d249a&rid=giphy.gif&ct=s" alt="" />
        </div>

        {/* image-pokemon4 */}
        <div className='image-ert'>
          <img className='b' src="https://media3.giphy.com/media/5ld56qTwPjp7TZc9Oa/giphy.gif?cid=ecf05e47npcfewvfhc003rvl3e7rr82xesnvsnqoqtmlqvb3&rid=giphy.gif&ct=s" alt="" />
        </div>
      </div>

      {
      loading? <div className='loading'><h1>Loading...</h1></div> : (
        <>
          {/* container of cards    */}
          <div className='container-pokemon_cards'>
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />
            })}
          </div>

          {/* button-container-top */}
          <div className='container-btn-top'>
            <button onClick={prev} className="button-prev">Prev</button>
            <button onClick={next} className="button-next">Next</button>
          </div>

          {/* container-pikachus */}
          <div className='pika'>
            {/* image pikachu */}
            <div className='image-asd'>
              <img className='p1' src="https://media2.giphy.com/media/fSgA9rYHFdPcR3YZPY/giphy.gif?cid=ecf05e472xsba5p6ax24mtag4n3aeap0p9qnfspvwbxcnth2&rid=giphy.gif&ct=s" alt="" />
            </div>
            {/* image pikachu-jr-1 */}
            <div className='image-asd2'>
              <img className='p2' src="https://media2.giphy.com/media/z1zPIipBt7hNJyDaHe/giphy.gif?cid=790b761178009170c09afc3412c2ae486785247d32fd759f&rid=giphy.gif&ct=s" alt="" />
            </div>
            {/* image pikachu-jr-2 */}
            <div className='image-asd3'>
              <img className='p3' src="https://media2.giphy.com/media/z1zPIipBt7hNJyDaHe/giphy.gif?cid=790b761178009170c09afc3412c2ae486785247d32fd759f&rid=giphy.gif&ct=s" alt="" />
            </div>
          </div>

          {/* button-container-bottom */}
          <div className='container-btn-bot'>
            <button onClick={prev} className="button-prev">Prev</button>
            <button onClick={next} className="button-next">Next</button>
          </div>
        </>
        )
      }
    </div>
  );
}

export default PokemonList;


      {/* <div>
        <PokemonSearch
          placeholder={"Search Pokemon..."}
          pokemon={pokemonSearchData}
          hide={hideInitialList}
        />
      </div> */}
