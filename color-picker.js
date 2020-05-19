import { LitElement, html, css, customElement, property } from 'lit-element';
import {html, render, directive, NodePart, appendIntoPart} from 'lit-html';
import { useEffect, useState, useRef } from React;
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
  constructor() {
    super();
    this.prop1 = 'Color Slider';
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

      <!-- attribute binding -->
      <div id="${this.prop2}">attribute binding</div>
      
      <!-- attribute binding -->
      <div>Current color: # ${this.currentHex}</div>

      <!-- boolean attribute binding -->
      <div>
        boolean attribute binding
        <input type="text" ?disabled="${this.prop3}"/>
      </div>
      
      <!-- property binding -->
      <div id="h">
        hex binding
        <input value={this.state.currentHex} onChange= {this.onChange} />
      </div>

      <!-- property binding -->
      <div id="b">
        property binding
        <input type="text" .value="#${this.currentHex}" @change=${this.onChange} />

      </div>

      <!-- event handler binding -->
      <div>event handler binding
        <button @click="${this.clickHandler}">click</button>
      </div>

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
