import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
display: flex;
flex-direction: column;
justify-content: flex-start;
:root{
    --blue: #004696;
    --blueOcean: #001F54;
    --yellow: #FCCA26;
    --white: #f2f6fa;
    --black: #000000;
    --grey: #D9D9D9;
    --orange: #F25116;
    --font-family: 'Francois One', sans-serif;

  font-family: var(--font-family);
}
h1,h2,h3,h4,h5,h6, p, li{
  font-family: var(--font-family);
}
p, h5, h6{
  font-size: 1em;
  line-height:1.5em;
}
h1{
  font-size: 2.7em;
}
h2{
  font-size: 2em;
}
h3{
  font-size: 1.5em;
}
h4{
  font-size: 1.2em;
  line-height:1.5em;
}
@media screen and (max-width: 700px) {
    width: 90vw;
    h1{
  font-size: 1.9em;
  line-height:1.2em;
}
  }
 `;
export default GlobalStyle;
