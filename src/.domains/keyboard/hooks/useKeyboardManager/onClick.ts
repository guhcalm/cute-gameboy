import { keyboardSlice } from "../../store/reducers"
import { KeypadInterfaces } from "../../../../interfaces"

const { LEFT, RIGHT, UP, DOWN } = KeypadInterfaces.DirectionalPadEnum
const { SELECT, START } = KeypadInterfaces.OperationalPadEnum
const { Q, E } = KeypadInterfaces.ActionPadEnum
const { actions: keyboardActions } = keyboardSlice

export const clickDown = (code: number, dispatch: any) => {
  // Directional Pad
  if (code === 65 || code == 37)
    dispatch(keyboardActions.clickDirectionalPad(LEFT)) // a || arrowleft
  if (code === 68 || code == 39)
    dispatch(keyboardActions.clickDirectionalPad(RIGHT)) // d || arrowright
  if (code === 87 || code == 38)
    dispatch(keyboardActions.clickDirectionalPad(UP)) // w || arrowup
  if (code === 83 || code == 40)
    dispatch(keyboardActions.clickDirectionalPad(DOWN)) // s || arrowdown
  // Operational Pad
  if (code === 32) dispatch(keyboardActions.clickOperationalPad(START)) // space
  if (code === 13) dispatch(keyboardActions.clickOperationalPad(SELECT)) // enter
  // Action Pad
  if (code === 81) dispatch(keyboardActions.clickActionPad(Q)) // q
  if (code === 69) dispatch(keyboardActions.clickActionPad(E)) // e
  // Startup
  if (code === 84 || code === 27)
    dispatch(keyboardActions.clickStartupSwitcher()) // t
}

export const clickUp = (code: number, dispatch: any) => {
  // Directional Pad
  if (code === 65 || code == 37)
    dispatch(keyboardActions.unclickDirectionalPad(LEFT)) // a || arrowleft
  if (code === 68 || code == 39)
    dispatch(keyboardActions.unclickDirectionalPad(RIGHT)) // d || arrowright
  if (code === 87 || code == 38)
    dispatch(keyboardActions.unclickDirectionalPad(UP)) // w || arrowup
  if (code === 83 || code == 40)
    dispatch(keyboardActions.unclickDirectionalPad(DOWN)) // s || arrowdown
  // Operational Pad
  if (code === 32) dispatch(keyboardActions.unclickOperationalPad(START)) // space
  if (code === 13) dispatch(keyboardActions.unclickOperationalPad(SELECT)) // enter
  // Action Pad
  if (code === 81) dispatch(keyboardActions.unclickActionPad(Q)) // q
  if (code === 69) dispatch(keyboardActions.unclickActionPad(E)) // e
  // Startup
  if (code === 84 || code === 27)
    dispatch(keyboardActions.clickStartupSwitcher()) // t
}
