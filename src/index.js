document.addEventListener("DOMContentLoaded", function() {
  // debugger


  let searchInput = document.getElementById('pokemon-search-input')
  let pokemonContainer = document.getElementById('pokemon-container')

  function flipimage() {
    let imageTag = event.target.previousSibling.querySelector('img')
    let pokemonName = event.target.dataset.pokename
    let thejson = pokemonJSON.pokemons.find(x => x.name === pokemonName)
    thejson.sprites.front === imageTag.src ? imageTag.src = thejson.sprites.back : imageTag.src = thejson.sprites.front
  }

  searchInput.addEventListener('keyup', function(e) {
    // debugger
    let matchingPokes = pokemonJSON.pokemons.filter(x => x.name.includes(searchInput.value))
    pokemonContainer.innerHTML = ""

    matchingPokes.forEach(poke => {

      let template = `<div class="pokemon-container"><div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame"><h1 class="center-text">${poke.name}</h1><div style="width:239px;margin:auto"><div style="width:96px;margin:auto"><img src= ${poke.sprites.front}></div></div><p style="padding:10px;" class="center-text flip-image" data-pokename=${poke.name} data-action="flipimage">flip card</p></div></div>`

      pokemonContainer.innerHTML += template
    })

    let flipLinks = document.getElementsByClassName('flip-image')
    Array.from(flipLinks).forEach(link => {
      link.addEventListener('click', function(e) {
        flipimage()
      })
    })
  })
})
