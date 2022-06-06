import { ThemeInterface, ThemesEnum } from "../../../interfaces"

const defaultTheme: ThemeInterface = {
  name: ThemesEnum.DEFAULT,
  palette: {
    surface: { main: "gray", on: "white" },
    background: { main: "white", on: "black" },
    error: { main: "red", on: "black" },
    primary: { light: "yellow", main: "orange", dark: "red", on: "black" },
    secondary: { light: "cyan", main: "green", dark: "blue", on: "black" }
  }
}

export default defaultTheme
