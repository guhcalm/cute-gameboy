import { createSlice } from "@reduxjs/toolkit"
import initialState from "./initialState"

import { KeypadInterfaces, StatusInterfaces } from "../../../../../interfaces"
const { ACTIVATE, INACTIVATE } = StatusInterfaces.StatusEnum
const { LEFT, RIGHT, UP, DOWN } = KeypadInterfaces.DirectionalPadEnum
const { SELECT, START } = KeypadInterfaces.OperationalPadEnum
const { Q, E } = KeypadInterfaces.ActionPadEnum

export default createSlice({
  name: "keyboard",
  initialState,
  reducers: {
    // STARTUP SWITCHER
    clickStartupSwitcher(state: KeypadInterfaces.KeypadInterface) {
      state.startupSwitcher = StatusInterfaces.StatusEnum.ACTIVATE
    },
    unclickStartupSwitcher(state: KeypadInterfaces.KeypadInterface) {
      state.startupSwitcher = StatusInterfaces.StatusEnum.INACTIVATE
    },
    // DIRECTIONAL PAD
    clickDirectionalPad(
      state: KeypadInterfaces.KeypadInterface,
      { payload: direction }: { payload: KeypadInterfaces.DirectionalPadEnum }
    ) {
      if (direction === LEFT) state.directionalPad.left = ACTIVATE
      if (direction === RIGHT) state.directionalPad.right = ACTIVATE
      if (direction === UP) state.directionalPad.up = ACTIVATE
      if (direction === DOWN) state.directionalPad.down = ACTIVATE
    },
    unclickDirectionalPad(
      state: KeypadInterfaces.KeypadInterface,
      { payload: direction }: { payload: KeypadInterfaces.DirectionalPadEnum }
    ) {
      if (direction === LEFT) state.directionalPad.left = INACTIVATE
      if (direction === RIGHT) state.directionalPad.right = INACTIVATE
      if (direction === UP) state.directionalPad.up = INACTIVATE
      if (direction === DOWN) state.directionalPad.down = INACTIVATE
    },
    // OPERATIONAL PAD
    clickOperaionalPad(
      state: KeypadInterfaces.KeypadInterface,
      { payload: operation }: { payload: KeypadInterfaces.OperationalPadEnum }
    ) {
      if (operation === SELECT) state.operationalPad.select = ACTIVATE
      if (operation === START) state.operationalPad.start = ACTIVATE
    },
    unclickOperaionalPad(
      state: KeypadInterfaces.KeypadInterface,
      { payload: operation }: { payload: KeypadInterfaces.OperationalPadEnum }
    ) {
      if (operation === SELECT) state.operationalPad.select = INACTIVATE
      if (operation === START) state.operationalPad.start = INACTIVATE
    },
    // ACTION PAD
    clickActionPad(
      state: KeypadInterfaces.KeypadInterface,
      { payload: action }: { payload: KeypadInterfaces.ActionPadEnum }
    ) {
      if (action === Q) state.actionPad.q = ACTIVATE
      if (action === E) state.actionPad.e = ACTIVATE
    },
    unclickActionPad(
      state: KeypadInterfaces.KeypadInterface,
      { payload: action }: { payload: KeypadInterfaces.ActionPadEnum }
    ) {
      if (action === Q) state.actionPad.q = INACTIVATE
      if (action === E) state.actionPad.e = INACTIVATE
    }
  }
})
