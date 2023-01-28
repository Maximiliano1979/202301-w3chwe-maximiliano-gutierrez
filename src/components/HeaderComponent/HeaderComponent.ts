import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "header", "header");
  }

  render() {
    super.render();

    this.element.innerHTML = `<img src="PokeAPI.png">`;
  }
}

export default HeaderComponent;
