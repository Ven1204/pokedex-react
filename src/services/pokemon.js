export async function getAllPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data =>{
        resolve(data);
      });
  })
}


export async function getPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      resolve(data);
    })
  })
}


export async function getPokemonSearch(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    // fetch(url)
    .then(res => res.json())
    .then(data => {
      resolve(data);
    })
  })
}


export const image = {
  backgroundImage: "url(https://wallpapercave.com/wp/wp6376250.jpg)",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}
