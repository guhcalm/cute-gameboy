import { ThemeInterface, ThemesEnum } from "../../../interfaces"

export default {
  name: ThemesEnum.DEFAULT,
  palette: {
    surface: { main: "gray", on: "white" },
    background: { main: "white", on: "black" },
    error: { main: "red", on: "black" },
    primary: { light: "yellow", main: "orange", dark: "red", on: "black" },
    secondary: { light: "cyan", main: "green", dark: "blue", on: "black" }
  }
} as ThemeInterface
