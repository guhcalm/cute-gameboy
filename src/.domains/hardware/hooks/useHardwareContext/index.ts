import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { KeypadInterfaces, StatusInterfaces } from "../../../../interfaces"
import { hardwareStatusSelector } from "../../../../store/selectors"
import { hardwareSlice } from "../../store/reducers"

export default () => {
  // Status
  const status = useSelector(hardwareStatusSelector)
  const { ACTIVATE } = StatusInterfaces.StatusEnum
  // Directinal Pad
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
    }
  }
}
