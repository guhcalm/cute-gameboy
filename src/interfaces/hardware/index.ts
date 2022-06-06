import { StatusInterfaces, KeypadInterfaces } from ".."

export interface HardwareInterface {
  status: StatusInterfaces.StatusEnum
  keypad: KeypadInterfaces.KeypadInterface
}
