import { LitElement, html, css, customElement, property } from 'lit-element';
import { React, ReactDOM, PropTypes, w3color }  from ReactDOM;
import { Grid, Typography, Button } from '@material-ui/core';

class ColorPicker extends LitElement {

  static get properties() {

    return {
      prop1: {type: String},
      prop2: {type: String},
      currentHex: {type: String},
      prop3: {type: Boolean},
      prop4: {type: String},
      _hex: {type: String},
      hex: { reflect: true }
    };
  }
  static defaultProps = {
    name: 'ColorSlider'
  }
  constructor() {
    super();
    this.prop1 = 'Building Custom Elements for Color Selection and Color Slider';
    this.prop2 = 'mydiv';
    this.currentHex = '';
    this.prop3 = true;
    this.hex = '#';
    this._hex = '';
    this.state = { currentHex: '' };

  }

  

  render(){

    return html`
      <div style="font-size: 1rem; color: #666;">
        <h1>Color Selector</h1>
      </div>
      <div class="img">
      <img src="https://cdn.jsdelivr.net/gh/clevelandrachel/ColorPicker@master/Color-Sketch.png"></div>
      
      <!-- text binding -->
      <div>${this.prop1}</div>


      <!-- event handler binding for random string -->
      <p>Random Color Selection: ${this.hex}</p>
      <button @click="${this.changeColor}">Get Random Color</button>
    `;
  }


 attributeChangedCallback(name, oldHex, hex) {
    console.log('attribute change: ', hex);
    super.attributeChangedCallback(name, oldHex, hex);
  }

  changeColor() {
    let randomString = Math.floor(Math.random()*1000).toString();
    this.hex='# ' + randomString;
  }
  updated(changedProperties) {
    changedProperties.forEach((oldHex, propName) => {
      console.log(`${propName} changed. oldHex: ${oldHex}`);
    });
    let b = this.shadowRoot.getElementById("b");
    b.focus();
  }
  onChange = e => {
    this.setState({ currentHex: e.target.value });
  };
  
  clickHandler(e) {
    console.log(e.target);
  }
}

customElements.define('color-picker', ColorPicker);

