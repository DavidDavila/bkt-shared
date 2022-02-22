import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { BKT_LIST_STYLES } from './list.css';
import { BKT_LIST_ITEM, BKT_LIST_PROPS } from './list.model';


export class BktList extends LitElement {

  constructor() { super() }

  @property()
  listProps!: BKT_LIST_PROPS;
  @property() titleList: string | undefined;
  override createRenderRoot() {
    return this;
  }

  itemClicked(item: BKT_LIST_ITEM) {
    this.dispatchEvent(new CustomEvent("onItemClicked", { detail: item }));
  }
  override render() {
    return html`
      ${ BKT_LIST_STYLES }
      ${ this.titleList && html`<h2 class="bkt-list-title">${ this.titleList }</h2>` }
      <ul class="bkt-list">
        ${ this.listProps?.map((li: BKT_LIST_ITEM, index) => html`
        <li class="${ li.className }" @click=${ () => this.itemClicked(li) }>
          ${ li.iconSrc && html`<img src="${ li.iconSrc }">` }
          ${ li.text }
        </li>`) }
      </ul>
    
    `;
  }
}
if (!customElements.get('bkt-list')) { customElements.define('bkt-list', BktList); }
