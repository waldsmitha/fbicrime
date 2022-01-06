import { createGlobalStyle } from "styled-components";

let h1 = `calc(2rem + 4vw)`;
let h2 = `calc(1.5rem + 4vw)`;
let h3 = `calc(1rem + 2vw)`;
let h4 = `calc(1rem + 1.5vw)`;
let p = `calc(1.8rem + .25vw)`;
let li = `calc(1.3rem + .25vw)`;

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding:0;
}

html {
    font-size: 62.5%;
}

a {
    color: #FFFDF6;
    text-decoration: none;
}



h1 {
    font-size: ${h1};
    /* font-size: 130px; */
    line-height: 100%;
    font-weight: 300;
}
h2 {
    font-size: ${h2};
    /* font-size: 72px; */
    line-height: 100%;
    font-weight: 300;
}
h3 {
    font-size: ${h3};
}
h4 {
    font-size: ${h4};
}
p,label,input,button {
    font-size: ${p};
    font-size: 18px;
    line-height: 140%;
}

li {
    font-size: ${li};
    list-style: none;
    font-size: 20px;
    
}


body {
    background: #000000;
    color: #53D126;
    font-family: sans-serif;
    font-weight: 300;
    height: 100%;
    overflow: scroll;
    width: 100vw;
    overflow-x: hidden;
}
html {
   
    

}

`;

export default GlobalStyles;
