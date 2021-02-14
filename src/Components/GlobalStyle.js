import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* Basic styling rules */
* {
  margin: 0;
  padding:0;
  box-sizing: border-box;
}


/* Button styling */
.styled-btn {
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  background-color: transparent;
  border: transparent;
  border-bottom: 4px solid #6A5ACD;
  color: #6A5ACD;
  transition: all 0.5s ease;
  font-family: 'Roboto Slab';
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    border-bottom: 4px solid #6A5ACD;
    color: #6A5ACD;
  }
}

/* Headers and body text */
body {
  font-family: 'Arial';
  background: #d3d6e2;
  color: #212121;
}

h2 {
  font-size: 2.5rem;
  font-family: 'Roboto Slab';
  span{
    font-family: 'Roboto Slab';
    font-weight: bold;
    }
}

h3, h4 {
  font-family: 'Roboto Slab';
}

p {
  font-size: 1rem;
  margin: 1rem 0;
  line-height: 1.2rem;
  span {
    color: #6A5ACD;
  }
}



`;

export default GlobalStyle;