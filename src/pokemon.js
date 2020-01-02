import React, {Component} from 'react'

// Un element pokemon individuel
class Pokemon extends Component {

  // On le crée
  render() {

    // On stocke le pokemon dans les donnees
    const {pokemon, pokemonId} = this.props

    // On l'affiche
    return (
      <div classname="pokemon">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Number(pokemonId)+1}.png`}
          classname="pokemon__sprite"
          alt={`${pokemon.name}`} />
        <p classname="pokemon__name">Bonjour tres cher {pokemon.name}</p>
      </div>
    )
  }
}

export default Pokemon
