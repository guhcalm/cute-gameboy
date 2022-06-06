import styled from "styled-components"
import { ThemeInterface } from "../../interfaces"

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
  --on-primary: ${theme.palette.secondary.on};
`}
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
`
