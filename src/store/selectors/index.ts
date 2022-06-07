import { GlobalInterfaces } from "../../interfaces"

// keyboard selectors
export const keyboardSelector = (state: GlobalInterfaces.GlobalInterface) =>
  state.domains.keyboard

// hardware selectors
export const hardwareSelector = (state: GlobalInterfaces.GlobalInterface) =>
  state.domains.hardware
export const hardwareStatusSelector = (
  state: GlobalInterfaces.GlobalInterface
) => state.domains.hardware.status
export const hardwareKeypadSelector = (
  state: GlobalInterfaces.GlobalInterface
) => state.domains.hardware.keypad

// system selectors
export const systemSelector = (state: GlobalInterfaces.GlobalInterface) =>
  state.domains.system
export const systemStatusSelector = (state: GlobalInterfaces.GlobalInterface) =>
  state.domains.system.status
export const systemKeypadSelector = (state: GlobalInterfaces.GlobalInterface) =>
  state.domains.system.keypad

// gameboy selectors
export const gameboySelector = (state: GlobalInterfaces.GlobalInterface) =>
  state.gameboy
export const gameboyStatusSelector = (
  state: GlobalInterfaces.GlobalInterface
) => state.gameboy.status
export const gameboyKeysSelector = (state: GlobalInterfaces.GlobalInterface) =>
  state.gameboy.keys
