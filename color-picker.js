import { LitElement, html, css, customElement, property } from 'lit-element';



class ColorPicker extends LitElement {
  static get properties() {

    return {
      prop1: {type: String},
      prop2: {type: String},
      currentHex: {type: String},
      prop3: {type: Boolean},
      prop4: {type: String}
      
    };
  }
  constructor() {
    super();
    this.prop1 = 'Color Selection';
    this.prop2 = 'mydiv';
    this.currentHex = "";
    this.prop3 = true;
    this.prop4 = 'hex';

    
  }
  render(){

    return html`
      <div id="sketch"> </div>
      <div class="title">
        <h1>Color Slider</h1>
      </div>
      
      <!-- text binding -->
      <div>${this.prop1}</div>

      <!-- attribute binding -->
      <div id="${this.prop2}">attribute binding</div>
      
      <!-- attribute binding -->
      <div>Current color: Hex ${this.currentHex}</div>

      <!-- boolean attribute binding -->
      <div>
        boolean attribute binding
        <input type="text" ?disabled="${this.prop3}"/>
      </div>

      <!-- property binding -->
      <div id="b">
        property binding
        <input type="text" .value="#${this.currentHex}"/>
      </div>

      <!-- event handler binding -->
      <div>event handler binding
        <button @click="${this.clickHandler}">click</button>
      </div>
    `;

  /* onChange = e => {
    this.setState({ currentHex: e.target.value });
  }; */
  }
updated(changedProperties) {
    changedProperties.forEach((oldHex, propName) => {
      console.log(`${propName} changed. oldHex: ${oldHex}`);
    });
    let b = this.shadowRoot.getElementById("b");
    b.focus();
  }
  
  clickHandler(e) {
    console.log(e.target);
  }
}

customElements.define('color-picker', ColorPicker);
