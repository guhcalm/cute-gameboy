import { createSlice } from "@reduxjs/toolkit"
import initialState from "./initialState"
import {
  GameboyInterfaces,
  KeypadInterfaces,
  StatusInterfaces
} from "../../../interfaces"

const { ACTIVATE, INACTIVATE } = StatusInterfaces.StatusEnum
const { LEFT, RIGHT, UP, DOWN } = KeypadInterfaces.DirectionalPadEnum
const { SELECT, START } = KeypadInterfaces.OperationalPadEnum
const { Q, E } = KeypadInterfaces.ActionPadEnum

export default createSlice({
  name: "gameboy",
  initialState,
  reducers: {
    // Status
    activateStatus(state: GameboyInterfaces.GameboyInterface) {
      state.status = ACTIVATE
    },
    inactivateStatus(state: GameboyInterfaces.GameboyInterface) {
      state.status = INACTIVATE
    },
    // Startup Switcher
    clickStartupSwitcher(state: GameboyInterfaces.GameboyInterface) {
      state.keys.startupSwitcher = ACTIVATE
    },
    unclickStartupSwitcher(state: GameboyInterfaces.GameboyInterface) {
      state.keys.startupSwitcher = INACTIVATE
    },
    // Directional Pad
    clickDirectionalPad(
      state: GameboyInterfaces.GameboyInterface,
      { payload: direction }: { payload: KeypadInterfaces.DirectionalPadEnum }
    ) {
      if (direction === LEFT) state.keys.directionalPad.left = ACTIVATE
      if (direction === RIGHT) state.keys.directionalPad.right = ACTIVATE
      if (direction === UP) state.keys.directionalPad.up = ACTIVATE
      if (direction === DOWN) state.keys.directionalPad.down = ACTIVATE
    },
    unclickDirectionalPad(
      state: GameboyInterfaces.GameboyInterface,
      { payload: direction }: { payload: KeypadInterfaces.DirectionalPadEnum }
    ) {
      if (direction === LEFT) state.keys.directionalPad.left = INACTIVATE
      if (direction === RIGHT) state.keys.directionalPad.right = INACTIVATE
      if (direction === UP) state.keys.directionalPad.up = INACTIVATE
      if (direction === DOWN) state.keys.directionalPad.down = INACTIVATE
    },
    // Operational Pad
    clickOperationalPad(
      state: GameboyInterfaces.GameboyInterface,
      { payload: operation }: { payload: KeypadInterfaces.OperationalPadEnum }
    ) {
      if (operation === SELECT) state.keys.operationalPad.select = ACTIVATE
      if (operation === START) state.keys.operationalPad.start = ACTIVATE
    },
    unclickOperationalPad(
      state: GameboyInterfaces.GameboyInterface,
      { payload: operation }: { payload: KeypadInterfaces.OperationalPadEnum }
    ) {
      if (operation === SELECT) state.keys.operationalPad.select = INACTIVATE
      if (operation === START) state.keys.operationalPad.start = INACTIVATE
    },
    // Action Pad
    clickActionPad(
      state: GameboyInterfaces.GameboyInterface,
      { payload: action }: { payload: KeypadInterfaces.ActionPadEnum }
    ) {
      if (action === Q) state.keys.actionPad.q = ACTIVATE
      if (action === E) state.keys.actionPad.e = ACTIVATE
    },
    unclickActionPad(
      state: GameboyInterfaces.GameboyInterface,
      { payload: action }: { payload: KeypadInterfaces.ActionPadEnum }
    ) {
      if (action === Q) state.keys.actionPad.q = INACTIVATE
      if (action === E) state.keys.actionPad.e = INACTIVATE
    }
  }
})
