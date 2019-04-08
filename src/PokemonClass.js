class Pokemon {
  static all = []

  constructor(pokemon){
    this.name = pokemon.name
    this.frontSprite = pokemon.sprites.front
    this.backSprite = pokemon.sprites.back
    Pokemon.all.push(this)
  }

  render(){
    let div = document.createElement("div")
    div.innerHTML = `<div class="pokemon-card">
      <div class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div class="pokemon-image">
          <img data-id="2" data-action="flip" class="toggle-sprite" src="${this.frontSprite}">
        </div>
      </div>
    </div>`
    document.querySelector("#pokemon-container").appendChild(div)
    div.addEventListener("click", this.flip.bind(this))
  }

  flip(event){
    event.currentTarget.querySelector('img').src = (
      event.currentTarget.querySelector('img').src === this.frontSprite ? this.backSprite : this.frontSprite
    )
  }

}
