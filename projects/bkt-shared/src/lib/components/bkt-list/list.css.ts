import { html } from 'lit';

export const BKT_LIST_STYLES = html`
<style>
  .bkt-list-title{
    font-size: 1.5rem;
  }
  .bkt-list-title:after {
    content: "";
    display: block;
    width: 45px;
    height: 3px;
    margin-top: 16px;
    background-color: #ff821c;
  }
  
  .bkt-list {
    list-style-type: none;
  }  
  
  .bkt-list li{
    margin-bottom: 16px;
  }
</style>
`