import styled from "styled-components"

export default styled.main`
  ${({ theme }: { theme: ThemeInterface }) => `
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
  --on-secondary: ${theme.palette.secondary.on};
  // terciary
  --terciary: ${theme.palette.terciary.main};
  --terciary-on-light: ${theme.palette.terciary.light};
  --terciary-on-dark: ${theme.palette.terciary.dark};
  --on-terciary: ${theme.palette.terciary.on};
  // quaternary
  --quaternary: ${theme.palette.quaternary.main};
  --quaternary-on-light: ${theme.palette.quaternary.light};
  --quaternary-on-dark: ${theme.palette.quaternary.dark};
  --on-quaternary: ${theme.palette.quaternary.on};
  // quinary
  --quinary: ${theme.palette.quinary.main};
  --quinary-on-light: ${theme.palette.quinary.light};
  --quinary-on-dark: ${theme.palette.quinary.dark};
  --on-quinary: ${theme.palette.quinary.on};
`}
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
`
