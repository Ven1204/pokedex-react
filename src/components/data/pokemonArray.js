import axios from 'axios';

// to get the 1-151 numbers and interpolate in imageAPI
// creates an array of numbers 1 - 151
let pokemonID = Array.from({length: 151}, (_, i) => i + 1)

// map through the array of numbers and interpolate them into the API
const pokemonImage = pokemonID.map(num =>{
  return (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`);
});


const pokemonList = ('https://pokeapi.co/api/v2/pokemon?limit=151');
const pokemonArray = [];
pokemonArray.push(pokemonImage, pokemonID, pokemonList)
console.log(pokemonArray.length)


const PokemonArray =
