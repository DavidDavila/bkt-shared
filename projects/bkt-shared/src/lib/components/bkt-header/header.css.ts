import { html } from 'lit';

export const BKT_HEADER_STYLES = html`
<style>
  .bkt-header{
    display:flex; 
    justify-content: space-between;
    align-items:center;
  }

  .bkt-header svg { 
    fill: #f76900; 
    width:12em;
  }
  
  .bkt-header ul { 
    display:flex;
    list-style: none;
  }
  
  .bkt-header ul li { 
    margin-right: 33px; 
  }

  .bkt-header ul li a {
    font-size: 15px;
    cursor:pointer;
    color: #191b1c;
    display: inline;
    padding: 0;
    line-height: 24px;
  }
  
  .bkt-header ul li a:hover {
    text-decoration: underline;
  }
  </style>`