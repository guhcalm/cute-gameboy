import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`
