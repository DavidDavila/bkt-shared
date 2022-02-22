import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BKT_BUTTON_STYLES } from './button.css';
import { BKT_BUTTON_PROPS } from './button.model';


@customElement('bkt-button')
export class BktButton extends LitElement {

  constructor() { super() }

  @property() buttonProps!: BKT_BUTTON_PROPS;
  override createRenderRoot() {
    return this;
  }

  itemClicked() {
    this.dispatchEvent(new CustomEvent("onItemClicked"));
  }
  override render() {
    return html`
    ${ BKT_BUTTON_STYLES }
    <button class="bkt-button ${ this.buttonProps?.type }" @click=${ this.itemClicked }>
      ${ this.buttonProps?.text }
    </button>
    `;
  }
}
if (!customElements.get('bkt-button')) { customElements.define('bkt-button', BktButton); }