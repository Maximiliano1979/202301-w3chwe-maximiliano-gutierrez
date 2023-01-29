import type { Pokemon } from "../../types/types.js";
import Component from "../Component/Component.js";

class PokeCard extends Component {
  pokemon: Pokemon;
  constructor(
    parentElement: Element,
    pokemon: Pokemon,
    className: string,
    tag: string
  ) {
    super(parentElement, className, tag);
    this.pokemon = pokemon;
  }

  public render() {
    super.render();
    this.element.innerHTML = `<img src=${this.pokemon.sprites.other["official-artwork"].front_default} /> 
    <h3 class="poke-name">${this.pokemon.name}</h3>
    <span class>${this.pokemon.weight}</span>
    `;
  }
}

export default PokeCard;
