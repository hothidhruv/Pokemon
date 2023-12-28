import React, { useState, useEffect } from 'react';
import { PokemonThumbnail } from './PokemonThumbnail';
import './App.css';


function App() {

  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonDataUrl, setPokemonDataUrl] = useState('https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1');
  const [isLoading, setIsLoading] = useState(false);

  const getPokemonsList = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(pokemonDataUrl);
      const json = await res.json();
      setPokemonDataUrl(json[0].next);
      getPokemonsData(await json[0].results);

    } catch (err) {
      console.log('error ::' + err)
    }
  }

  const getPokemonsData = (list) => {
    console.log(list);
    (list || []).forEach(async (pokemon, ind, arr) => {
      const res = await fetch(pokemon.url);
      const json = await res.json();
      // console.log(json[[0]]);
      setAllPokemons(currentList => [...currentList, json[0]]);
      if (ind + 1 === arr.length) {
        console.log(ind);
        setIsLoading(false);
      }
    })
    // console.log(allPokemons);
  }

  useEffect(() => {
    getPokemonsList();

  }, []);
  return (
    <>
      <div id='parent'>
        <div id='section'>
          <div className='content'>
            <h2>Pokemon</h2>
            <h2>Pokemon</h2>
          </div>
          <div className='content2'>
            <h2>KingDom</h2>
            <h2>KingDom</h2>
          </div>
        </div>
        <div className='app-container'>
          {isLoading ? 'Loading Data' :
            <div className='pokemon-container'>
              <div className='all-container'>
                {allPokemons.map((pokemon, i) => <PokemonThumbnail
                  key={i}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  type={pokemon.type}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  stats={pokemon.stats}
                />
                )}
              </div>

              {pokemonDataUrl && <button className='load-more' onClick={getPokemonsList}>Load More</button>}
            </div>
          }
        </div>
      </div>
    </>
  );

}
export default App;
