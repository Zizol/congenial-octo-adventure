import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './pokemon.js'

import './main.css'

// Le composant principal commence ici

class App extends Component {
  // l'etat contient les ids des pokemons
  state = {
    pokemonsIds: [1],
    collection: {1: {name: "Bulbizarre", id: 1}}
  }

  // à la montée du composant, on fetch les données de pokemon depuis une api
  componentDidMount() {
    /*this.props.getPokemons().then(action => {
      const {collection} = this.props

      return this.setState({
        pokemonsIds: Object.keys(collection)
      })
    })*/

    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            collection: result.results,
            pokemonsIds: Object.keys(result.results)
          });
        }
      )
  }

  // La fonction qui affiche ce qu'il faut
  render() {
    console.log(this.state)

    // les ids et la collection sont stockées
    const {pokemonsIds, collection} = this.state

    // On crée la liste de pokemons
    const pokemons = pokemonsIds.map(pokemonId => {
      const pokemon = collection[pokemonId]

      // On affiche un element pokemon individuel
      return (
        <li classname="pokemons__item" key={pokemonId}>
          <Pokemon pokemon={pokemon} pokemonId={pokemonId} />
        </li>
      )
    })


    // On affiche l'element liste pokemons
    return(
      <div classname="page">
        <ul classname="pokemons">{pokemons}</ul>
      </div>
    )
  }
}

export default App;
