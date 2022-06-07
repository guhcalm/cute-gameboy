import { StatusInterfaces, SettingsInterfaces, KeypadInterfaces } from ".."

export interface GameboyInterface {
  status: StatusInterfaces.StatusEnum
  settings: SettingsInterfaces.SettingsInterface
  keys: KeypadInterfaces.KeypadInterface
}
