import {
  StatusInterfaces,
  SettingsInterfaces,
  KeypadInterfaces,
  MouseInterfaces
} from ".."

export interface GameboyInterface {
  status: StatusInterfaces.StatusEnum
  settings: SettingsInterfaces.SettingsInterface
  mouse: MouseInterfaces.MouseInterface
  keys: KeypadInterfaces.KeypadInterface
}
