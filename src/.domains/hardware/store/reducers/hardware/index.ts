import { createSlice } from "@reduxjs/toolkit"
import {
  HardwareInterfaces,
  StatusInterfaces,
  KeypadInterfaces
} from "../../../../../interfaces"
import initialState from "./initialState"

const { ACTIVATE, INACTIVATE } = StatusInterfaces.StatusEnum
const { LEFT, RIGHT, UP, DOWN } = KeypadInterfaces.DirectionalPadEnum
const { SELECT, START } = KeypadInterfaces.OperationalPadEnum
const { Q, E } = KeypadInterfaces.ActionPadEnum

export default createSlice({
  name: "hardware",
  initialState,
  reducers: {
    // STATUS
    activateStatus(state: HardwareInterfaces.HardwareInterface) {
      state.status = StatusInterfaces.StatusEnum.ACTIVATE
    },
    inactivateStatus(state: HardwareInterfaces.HardwareInterface) {
      state.status = StatusInterfaces.StatusEnum.INACTIVATE
    },
    // STARTUP SWITCHER
    clickStartupSwitcher(state: HardwareInterfaces.HardwareInterface) {
      state.keypad.startupSwitcher = StatusInterfaces.StatusEnum.ACTIVATE
    },
    unclickStartupSwitcher(state: HardwareInterfaces.HardwareInterface) {
      state.keypad.startupSwitcher = StatusInterfaces.StatusEnum.INACTIVATE
    },
    // DIRECTIONAL PAD
    clickDirectionalPad(
      state: HardwareInterfaces.HardwareInterface,
      { payload: direction }: { payload: KeypadInterfaces.DirectionalPadEnum }
    ) {
      if (direction === LEFT) state.keypad.directionalPad.left = ACTIVATE
      if (direction === RIGHT) state.keypad.directionalPad.right = ACTIVATE
      if (direction === UP) state.keypad.directionalPad.up = ACTIVATE
      if (direction === DOWN) state.keypad.directionalPad.down = ACTIVATE
    },
    unclickDirectionalPad(
      state: HardwareInterfaces.HardwareInterface,
      { payload: direction }: { payload: KeypadInterfaces.DirectionalPadEnum }
    ) {
      if (direction === LEFT) state.keypad.directionalPad.left = INACTIVATE
      if (direction === RIGHT) state.keypad.directionalPad.right = INACTIVATE
      if (direction === UP) state.keypad.directionalPad.up = INACTIVATE
      if (direction === DOWN) state.keypad.directionalPad.down = INACTIVATE
    },
    // OPERATIONAL PAD
    clickOperationalPad(
      state: HardwareInterfaces.HardwareInterface,
      { payload: operation }: { payload: KeypadInterfaces.OperationalPadEnum }
    ) {
      if (operation === SELECT) state.keypad.operationalPad.select = ACTIVATE
      if (operation === START) state.keypad.operationalPad.start = ACTIVATE
    },
    unclickOperationalPad(
      state: HardwareInterfaces.HardwareInterface,
      { payload: operation }: { payload: KeypadInterfaces.OperationalPadEnum }
    ) {
      if (operation === SELECT) state.keypad.operationalPad.select = INACTIVATE
      if (operation === START) state.keypad.operationalPad.start = INACTIVATE
    },
    // ACTION PAD
    clickActionPad(
      state: HardwareInterfaces.HardwareInterface,
      { payload: action }: { payload: KeypadInterfaces.ActionPadEnum }
    ) {
      if (action === Q) state.keypad.actionPad.q = ACTIVATE
      if (action === E) state.keypad.actionPad.e = ACTIVATE
    },
    unclickActionPad(
      state: HardwareInterfaces.HardwareInterface,
      { payload: action }: { payload: KeypadInterfaces.ActionPadEnum }
    ) {
      if (action === Q) state.keypad.actionPad.q = INACTIVATE
      if (action === E) state.keypad.actionPad.e = INACTIVATE
    }
  }
})
