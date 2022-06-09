import { StatusInterfaces, KeypadInterfaces } from ".."

export interface UserInterface {
  status: StatusInterfaces.StatusEnum
  profile: { name: string; score: number }
}

export enum PagesEnum {
  STARTUP_SCREEN,
  BOOT_SCREEN,
  TITLE_SCREEN,
  LOGIN,
  HOME
}

export interface PagesInterface {
  current: PagesEnum
}

export interface SystemInterface {
  status: StatusInterfaces.StatusEnum
  keypad: KeypadInterfaces.KeypadInterface
  user: UserInterface
  pages: PagesInterface
}
