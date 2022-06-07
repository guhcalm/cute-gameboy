import {
  KeypadInterfaces,
  HardwareInterfaces,
  SystemInterfaces,
  GameboyInterfaces
} from ".."

export interface GlobalInterface {
  gameboy: GameboyInterfaces.GameboyInterface
  domains: {
    keyboard: KeypadInterfaces.KeypadInterface
    hardware: HardwareInterfaces.HardwareInterface
    system: SystemInterfaces.SystemInterface
  }
}
