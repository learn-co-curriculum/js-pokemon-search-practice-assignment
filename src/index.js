document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE

  searchInput = document.querySelector('#pokemon-search-input');
  pokemonContainer = document.querySelector('#pokemon-container');
  
  pokemonContainer.innerHTML = "";
  
  renderManyPokemon(POKEMON);

  searchInput.addEventListener('input', function() {
    let searchValue = searchInput.value.toLowerCase();
    let filteredPokemon = POKEMON.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue));
    pokemonContainer.innerHTML = "";
    if (filteredPokemon.length > 0) {
      renderManyPokemon(filteredPokemon);
    } else {
      pokemonContainer.innerHTML = "<p><center>There are no Pokémon here</center></p>";
    }
  });
});

function toggleSprite (pokemonImage) {
  // console.log(el);
  //let pokemonImage = el;
  let pokemonId = pokemonImage.dataset.id;
  let pokemon = POKEMON.find(pokemon => pokemon.id === parseInt(pokemonId));
  if (pokemonImage.dataset.action === 'flip') {
    pokemonImage.src = pokemon.sprites.back;
    pokemonImage.dataset.action = 'back';
  } else {
    pokemonImage.src = pokemon.sprites.front;
    pokemonImage.dataset.action = 'flip';
  }
}

function renderSinglePokemon (pokemon) {
  let pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon-card');
  pokemonCard.innerHTML = `
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}" alt="${pokemon.name}" onclick="toggleSprite(this)" />
      </div>
    </div>`;
  pokemonContainer.appendChild(pokemonCard);
}

function renderManyPokemon (pokemonList) {
  pokemonList.forEach(pokemon => { renderSinglePokemon(pokemon); });
}