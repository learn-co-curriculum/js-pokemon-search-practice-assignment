class Pokemon {
  constructor(name, sprites) {
    this.name = name
    this.front_url = sprites.front
    this.back_url = sprites.back
  }

  flipimage(event){
    let img = event.target.parentNode.querySelector('img')
    // without "this" in line 33, "this" refers to the event, not the Pokemon class instance
    if (img.src === this.front_url) {
      img.src = this.back_url
    } else if (img.src === this.back_url) {
      img.src = this.front_url
    }
  }

  render() {
    let div = document.createElement('div')
    div.dataset.name = this.name
    div.innerHTML = `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img src=${this.front_url}>
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename=${this.name} data-action="flip-image">flip card</p>
        </div>
      </div>`
    let flip = div.querySelector('p')
    flip.addEventListener('click', (event) => { this.flipimage(event) }) // "this" binds to our Class now
    return div
  }
}
