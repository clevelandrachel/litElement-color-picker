import { LitElement, html, css, customElement, property } from 'lit-element';



class ColorPicker extends LitElement {
 state = { currentHex: "" };

  onChange = e => {
    this.setState({ currentHex: e.target.value });
  };
  // Implement `render` to define a template for your element.
  render(){
    /**
     * Return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function.
     */
  

    return html`
      <div>
        <p>A paragraph</p>
      </div>
    `;
  }
}

customElements.define('color-picker', ColorPicker);
