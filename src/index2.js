document.addEventListener("DOMContentLoaded", function() {
  // debugger
  const pokemonContainer = document.getElementById('pokemon-container')
  const pokemonSearchBar = document.getElementById('pokemon-search-input')

  pokemonSearchBar.addEventListener('input', function(e) {
    if (pokemonSearchBar.value !== "") {
      let pokemonFilter = pokemonJSON.pokemons.filter(function(poke){
        return poke.name.includes(pokemonSearchBar.value)
      })
      pokemonContainer.innerHTML = ""

      pokemonFilter.forEach(function(pokeData) {
        let poke = new Pokemon(pokeData.name, pokeData.sprites).render()
        pokemonContainer.append(poke)
      })
    }
  })

})
