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
    this.addEventListener('stuff-loaded', (e) => { this.currentHex = e.detail } );
    this.loadHex();
    
  }
  // Implement `render` to define a template for your element.
  render(){
    /**
     * Return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function.
     */
  

    return html`
      <!-- text binding -->
      <div>${this.prop1}</div>

      <!-- attribute binding -->
      <div id="${this.prop2}">attribute binding</div>
      
      <!-- attribute binding -->
      <div>${this.currentHex}</div>

      <!-- boolean attribute binding -->
      <div>
        boolean attribute binding
        <input type="text" ?disabled="${this.prop3}"/>
      </div>

      <!-- property binding -->
      <div>
        property binding
        <input type="text" .value="${this.currentHex}"/>
      </div>

      <!-- event handler binding -->
      <div>event handler binding
        <button @click="${this.clickHandler}">click</button>
      </div>
    `;

  onChange = e => {
    this.setState({ currentHex: e.target.value });
  };

  
    
  }
  clickHandler(e) {
    console.log(e.target);
  }
}

customElements.define('color-picker', ColorPicker);
