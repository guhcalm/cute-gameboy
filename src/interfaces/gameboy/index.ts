import {
  StatusInterfaces,
  SettingsInterfaces,
  KeypadInterfaces,
  HardwareInterfaces,
  SystemInterfaces,
  MouseInterfaces
} from ".."

interface GameboyInterface {
  status: StatusInterfaces.StatusEnum
  settings: SettingsInterfaces.SettingsInterface
  mouse: MouseInterfaces.MouseInterface
  keys: KeypadInterfaces.KeypadInterface
  domains: {
    mouse: MouseInterfaces.MouseInterface
    keyboard: KeypadInterfaces.KeypadInterface
    hardware: HardwareInterfaces.HardwareInterface
    system: SystemInterfaces.SystemInterface
  }
}

export default GameboyInterface
