import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --dark-blue: hsl(209, 23%, 22%);
  --darker-blue: hsl(207, 26%, 17%);
  --darkest-blue: hsl(200, 15%, 8%);
  --thirty-darkest-blue: hsla(200, 15%, 8%, .3);
  --thirty-dark-gray: hsla(0, 0%, 52%, .3);
  --dark-gray: hsl(0, 0%, 52%);
  --very-light-gray: hsl(0, 0%, 98%);
  
  --dark-mode-background: var(--darker-blue);
  --dark-mode-element: var(--dark-blue);
  --dark-mode-text: white;
  --dark-mode-input: var(--dark-blue);
  --dark-mode-shadow: var(--thirty-darkest-blue);
  
  --light-mode-background: var(--very-light-gray);
  --light-mode-element: white;
  --light-mode-text: var(--darkest-blue);
  --light-mode-input: var(--dark-gray);
  --light-mode-shadow: var(--thirty-dark-gray);
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}
`

export default GlobalStyles;
