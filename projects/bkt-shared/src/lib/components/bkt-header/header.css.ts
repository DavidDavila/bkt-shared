import { html } from 'lit';

export const BKT_HEADER_STYLES = html` <style>
  .bkt-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bkt-header ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .bkt-header > svg {
    fill: #f76900;
    width: 12em;
  }

  .bkt-header > nav > ul {
    display: flex;
    list-style: none;
  }

  .bkt-header > nav > ul > li {
    margin-right: 33px;
    position: relative;
  }

  .bkt-header ul li a {
    font-size: 15px;
    cursor: pointer;
    color: #191b1c;
    display: inline;
    padding: 0;
    line-height: 24px;
  }

  .bkt-header ul li a:hover {
    text-decoration: underline;
  }
  .bkt-header ul li.bkt-header_submenu > a {
    text-decoration: initial;
    display: flex;
  }
  .bkt-header ul li.bkt-header_submenu > a {
    text-decoration: initial;
  }
  .bkt-header ul li.bkt-header_submenu ul {
    position: absolute;
    top: 100%;
    left: 0;
    margin-right: 0;
    max-height: 0;
    overflow: hidden;
  }
  .bkt-header ul li.bkt-header_submenu:hover ul {
    max-height: 100vh;
  }
  .bkt-header ul li.bkt-header_submenu ul > li > a {
    line-height: 30px;
}
</style>`;
