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
    collection: {1: {name: "Bulbizarre", id: 1}},
    count: 0,
    entree: ''
  }

  // à la montée du composant, on fetch les données de pokemon depuis une api
  componentDidMount() {
    /*this.props.getPokemons().then(action => {
      const {collection} = this.props

      return this.setState({
        pokemonsIds: Object.keys(collection)
      })
    })*/

    fetch("https://pokeapi.co/api/v2/pokemon/?limit=964")
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

  handleChange = event => {
    var array = new Array();
    for (var i = 0; i <= event.target.value.length; i++) {
      array[i] = i;
    }
    this.setState({
      count: event.target.value.length,
      entree: event.target.value,
      pokemonsIds: array
    });
  }


  // La fonction qui affiche ce qu'il faut
  render() {

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
        <textarea placeholder="write" onChange={this.handleChange}></textarea>
        <p> Bonjour {this.state.entree}, il y a {this.state.count} lettres</p>
        <ul classname="pokemons">{pokemons}</ul>
      </div>
    )
  }
}

export default App;
