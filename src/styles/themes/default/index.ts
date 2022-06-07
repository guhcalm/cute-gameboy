import { ThemesInterfaces } from "../../../interfaces"

export default {
  name: ThemesInterfaces.ThemesEnum.DEFAULT,
  palette: {
    surface: { main: "#bcaaa4", on: "#ffffff" },
    background: { main: "#bcaaa4", on: "rgb(38,38,38)" },
    error: { main: "#b00020", on: "#ffffff" },
    primary: {
      light: "#EFEBE9",
      main: "#A1887F",
      dark: "#6D4C41",
      on: "rgb(38,38,38)"
    },
    secondary: {
      light: "rgb(110,110,110)",
      main: "rgb(38,38,38)",
      dark: "black",
      on: "#A1887F"
    },
    terciary: {
      light: "#FFB74D",
      main: "#FB8C00",
      dark: "#E65100",
      on: "#ffffff"
    },
    quaternary: {
      light: "#FF5A49",
      main: "#b71c1c",
      dark: "#4A0000",
      on: "#ffffff"
    },
    quinary: {
      light: "#9ab1ed",
      main: "#143079",
      dark: "#0a183c",
      on: "#ffffff"
    }
  }
} as ThemesInterfaces.ThemeInterface
