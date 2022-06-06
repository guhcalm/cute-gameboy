export enum ThemesEnum {
  DEFAULT
}

interface ColorInterface {
  light?: string
  main: string
  dark?: string
  on: string
}

export interface ThemeInterface {
  name: ThemesEnum
  palette: {
    surface: ColorInterface
    background: ColorInterface
    error: ColorInterface
    primary: ColorInterface
    secondary: ColorInterface
  }
}
