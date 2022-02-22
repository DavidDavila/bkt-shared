import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';

import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { DOWN_ARROW_ICON } from '../assets/img/down-arrow.icon';
import { BKT_HEADER_STYLES } from './header.css';
import { BKT_HEADER_PROPS, BKT_HEADER_PROPS_NAV_LIST } from './header.model';

export class BktHeader extends LitElement {
  @property() headerProps: BKT_HEADER_PROPS | undefined;

  itemClicked(itemText: BKT_HEADER_PROPS_NAV_LIST) {
    this.dispatchEvent(new CustomEvent('onItemClicked', { detail: itemText }));
  }
  constructor() {
    super();
  }
  override createRenderRoot() {
    return this;
  }
  override render() {
    return html` ${BKT_HEADER_STYLES}
      <header class="bkt-header">
        ${this.headerProps?.logo?.src
          ? html`<img src="${this.headerProps.logo.src}" @click=${this.headerProps?.logo?.onClick}></img>`
          : html` <svg
              xmlns="http://www.w3.org/2000/svg"
              id="logoSVG"
              data-name="logo_SVG"
              viewBox="0 0 215 32"
            >
              <path
                id="logo_b"
                d="M12.5 32c8.2 0 12.4-2.4 12.4-11.2 0-8-3-11.6-11.2-11.6-3.6 0-6 0.4-7.9 1.9v-11.1h-5.8v21.1c0 8.1 3.6 10.9 12.5 10.9v0zM12.4 27.7c-6 0-6.9-0.9-6.9-7.7 0-5.8 1.9-6.6 6.6-6.6s6.7 0.7 6.7 6.6c0.1 6.6-1 7.7-6.4 7.7z"
              ></path>
              <path
                id="logo_k"
                d="M91.1 22.6v9h-5.8v-31.6h5.8v17.6h1.1c0.1 0 0.2 0 0.2 0 1.3 0 2.5-0.6 3.3-1.5l6.7-6.7h6.7l-10.1 10.4 11 11.6h-7.5l-7.1-7.7c-0.6-0.8-1.6-1.4-2.7-1.4-0.2 0-0.5 0-0.7 0.1h-0.9v0.2z"
              ></path>
              <path
                id="logo_rest"
                d="M209.6 26h5.8v5.6h-5.8v-5.6zM62.1 31.6v-13.8c0-3.4 1.1-4.3 6.2-4.3s6.2 0.9 6.2 4.3v13.8h5.8v-14.2c0-6.4-4.5-8.4-10.9-8.4h-1.9c-6.4 0-11 2.1-11 8.4v14.2h5.6zM129.1 31.6v-13.8c0-3.4 1.1-4.3 6-4.3s6.2 0.9 6.2 4.3v13.8h5.8v-14.2c0-6.4-4.7-8.4-10.9-8.4h-2.1c-6.4 0-10.9 2.1-10.9 8.4v14.2h5.9zM167.5 13.8h-9.7v10.9c0 2.1 1.5 2.8 3.9 2.8 0.2 0 0.4 0 0.7 0 1.9 0 3.7-0.2 5.5-0.6l-0.2 4c-2 0.5-4.3 0.9-6.7 0.9-6.4 0-8.8-2.6-8.8-6.7v-22.7h5.6v7.1h9.7c0 0 0 4.3 0 4.3zM199.5 16.7c0-6 4.3-7.7 8.2-7.7 1.9 0 6.7 0.2 7.7 0.4v4.3h-6.2c-3.2 0-3.9 0.4-3.9 3.4v14.6h-5.8v-15zM112.3 9.5h5.8v22.1h-5.8c0 0 0-22.1 0-22.1zM45.8 17.6v-1.1c0-2.6-1.7-3-6.2-3-0.1 0-0.3 0-0.5 0-3.3 0-6.5 0.5-9.5 1.6l0.2-4.2c3.1-1.2 6.5-1.9 10-1.9 6.4 0 11.8 0.9 11.8 8.2v6.8c0 7.9-6.4 8-11.8 8-7.9 0-11.8-2.2-11.8-6.7 0.3-6.2 4-7.3 17.8-7.7v0 0zM40.2 27.7c4.3 0 5.6-0.6 5.6-2.8v-3.6l-5.2 0.2c-5.2 0.4-6.5 1.1-6.5 2.8 0 2.8 0.9 3.4 6.1 3.4v0 0zM112.3 0h5.8v5.6h-5.8v-5.6zM180 19.1c7.7-0.4 8.8-0.9 8.8-2.8s-1.3-3-5.6-3c-5.6 0-6.2 1.1-6.2 6l3-0.2zM177 23.4c0.4 2.8 1.7 4.3 6.2 4.3 0.2 0 0.4 0 0.6 0 3.7 0 7.2-0.6 10.5-1.8l-0.2 4c-3.2 1.3-6.8 2-10.7 2.1-9.4 0-12.5-2.4-12.5-11.8 0-8.2 2.6-11.2 12.4-11.2 8 0 11.6 2.6 11.8 7.3-0.1 5.6-4 6.9-18.1 7.1v0 0z"
              ></path>
            </svg>`}
        <nav>
          <ul>
            ${this.headerProps?.navList?.map(
              (nav: BKT_HEADER_PROPS_NAV_LIST) => html` <li
                class="${nav.childrens?.length && 'bkt-header_submenu'}"
              >
                <a @click="${() => this.itemClicked(nav)}">
                  ${nav.text} ${nav.childrens?.length && DOWN_ARROW_ICON}
                </a>
                ${nav.childrens?.length &&
                html` <ul>
                  ${nav.childrens.map(
                    (li) => html` <li>
                      <a @click="${() => this.itemClicked(li)}"> ${li.text} </a>
                    </li>`
                  )}
                </ul>`}
              </li>`
            )}
          </ul>
        </nav>
      </header>`;
  }
}

if (!customElements.get('bkt-header')) {
  customElements.define('bkt-header', BktHeader);
}
