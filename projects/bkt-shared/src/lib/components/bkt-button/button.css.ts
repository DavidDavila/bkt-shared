import { html } from 'lit';

export const BKT_BUTTON_STYLES = html`
<style>
  .bkt-button{
       border-radius: 32px;
    padding: 0 18px;
    font-size: 12px;
    font-family: "BK-Sans";
    text-transform: uppercase;
    height: 48px;
    line-height: 48px;
    letter-spacing: 1.5px;
    display: inline-block;
    min-width: 150px;
    text-align: center;
    width: auto;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }
   .bkt-button.primary{
   
    color: #191b1c;
    background-color: #ff821c;
    border: 1px solid #ff821c;

  }
  .bkt-button.secondary{
   
  }
</style>
`