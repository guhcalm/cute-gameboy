import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {
  KeypadInterfaces,
  StatusInterfaces,
  SystemInterfaces
} from "../../../../interfaces"
import { systemSlice } from "../../store/reducers"
import * as selectors from "../../../../store/selectors"

export default () => {
  return {
    dispatch: useDispatch(),
    actions: systemSlice.actions,
    system: useSelector(selectors.systemSelector),
    enums: {
      status: StatusInterfaces.StatusEnum,
      directionalPad: KeypadInterfaces.DirectionalPadEnum,
      actionPad: KeypadInterfaces.ActionPadEnum,
      operationalPad: KeypadInterfaces.OperationalPadEnum,
      pages: SystemInterfaces.PagesEnum
    }
  }
}
