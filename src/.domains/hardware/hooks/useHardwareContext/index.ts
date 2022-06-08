import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { KeypadInterfaces, StatusInterfaces } from "../../../../interfaces"
import * as selectors from "../../../../store/selectors"
import { hardwareSlice } from "../../store/reducers"

export default () => {
  const status = useSelector(selectors.hardwareStatusSelector)
  const { directionalPad, actionPad, operationalPad } = useSelector(
    selectors.hardwareKeypadSelector
  )
  const dispatch = useDispatch()
  const { actions } = hardwareSlice
  const { ACTIVATE } = StatusInterfaces.StatusEnum
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
        left: directionalPad.left === ACTIVATE ? "activate" : "inactivate",
        right: directionalPad.right === ACTIVATE ? "activate" : "inactivate",
        up: directionalPad.up === ACTIVATE ? "activate" : "inactivate",
        down: directionalPad.down === ACTIVATE ? "activate" : "inactivate"
      },
      actionPad: {
        q: actionPad.q === ACTIVATE ? "activate" : "inactivate",
        e: actionPad.e === ACTIVATE ? "activate" : "inactivate"
      },
      operationalPad: {
        select: operationalPad.select === ACTIVATE ? "activate" : "inactivate",
        start: operationalPad.start === ACTIVATE ? "activate" : "inactivate"
      }
    }
  }
}
