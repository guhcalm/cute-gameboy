import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { KeypadInterfaces, StatusInterfaces } from "../../../../interfaces"
import {
  hardwareStatusSelector,
  keyboardSelector
} from "../../../../store/selectors"
import { hardwareSlice } from "../../store/reducers"

export default () => {
  // state
  const status = useSelector(hardwareStatusSelector)
  const { ACTIVATE } = StatusInterfaces.StatusEnum
  const keypad = useSelector(keyboardSelector)
  // Pads
  const dispatch = useDispatch()
  const { actions } = hardwareSlice
  return {
    className: status === ACTIVATE ? "activate" : "inactivate",
    inverseClass: status !== ACTIVATE ? "activate" : "inactivate",
    dispatch,
    actions,
    enumn: {
      directionalPad: KeypadInterfaces.DirectionalPadEnum,
      actionPad: KeypadInterfaces.ActionPadEnum,
      operationalPad: KeypadInterfaces.OperationalPadEnum
    },
    keypad: {
      directionalPad: {
        left:
          keypad.directionalPad.left === ACTIVATE ? "activate" : "inactivate",
        right:
          keypad.directionalPad.right === ACTIVATE ? "activate" : "inactivate",
        up: keypad.directionalPad.up === ACTIVATE ? "activate" : "inactivate",
        down:
          keypad.directionalPad.down === ACTIVATE ? "activate" : "inactivate"
      },
      actionPad: {
        q: keypad.actionPad.q === ACTIVATE ? "activate" : "inactivate",
        e: keypad.actionPad.e === ACTIVATE ? "activate" : "inactivate"
      },
      operationalPad: {
        select:
          keypad.operationalPad.select === ACTIVATE ? "activate" : "inactivate",
        start:
          keypad.operationalPad.start === ACTIVATE ? "activate" : "inactivate"
      }
    }
  }
}
