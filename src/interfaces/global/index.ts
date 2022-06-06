import {
  KeypadInterfaces,
  HardwareInterfaces,
  SystemInterfaces,
  MouseInterfaces,
  GameboyInterfaces
} from ".."

export interface GlobalInterface {
  gameboy: GameboyInterfaces.GameboyInterface
  domains: {
    mouse: MouseInterfaces.MouseInterface
    keyboard: KeypadInterfaces.KeypadInterface
    hardware: HardwareInterfaces.HardwareInterface
    system: SystemInterfaces.SystemInterface
  }
}
