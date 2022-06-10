import { StatusInterfaces, KeypadInterfaces } from ".."

export interface UserInterface {
  status: StatusInterfaces.StatusEnum
  profile: { name: string; score: number }
}

export enum PagesEnum {
  BOOT_SCREEN,
  TITLE_SCREEN
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
