import { StatusInterfaces, KeypadInterfaces } from ".."

export interface UserInterface {
  status: StatusInterfaces.StatusEnum
  profile: { name: string; score: number }
}

export interface SystemInterface {
  status: StatusInterfaces.StatusEnum
  keypad: KeypadInterfaces.KeypadInterface
  user: UserInterface
}
