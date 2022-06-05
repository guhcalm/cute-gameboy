import { createGlobalStyle } from "styled-components"

const myColorPalette = ({ theme }) => `
  // surface
  --surface: ${theme.palette.surface.main};
  --on-surface: ${theme.palette.surface.on};
  // background
  --background: ${theme.palette.background.main};
  --on-background: ${theme.palette.background.on};
  // error
  --error: ${theme.palette.error.main};
  --on-error: ${theme.palette.error.on};
  // primary
  --primary: ${theme.palette.primary.main};
  --primary-on-light: ${theme.palette.primary.light};
  --primary-on-dark: ${theme.palette.primary.dark};
  --on-primary: ${theme.palette.primary.on};
  // secondary
  --secondary: ${theme.palette.secondary.main};
  --secondary-on-light: ${theme.palette.secondary.light};
  --secondary-on-dark: ${theme.palette.secondary.dark};
  --on-primary: ${theme.palette.secondary.on};
`

const MyGlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    ${myColorPalette}
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

export default MyGlobalStyles
