import { useSelector, useDispatch } from "react-redux"
import { hardwareSlice, keyboardSlice, systemSlice } from "../../.domains"
import { KeypadInterfaces, StatusInterfaces } from "../../interfaces"
import { gameboySlice } from "../../store/reducers"
import * as selector from "../../store/selectors"

export default () => ({
  dispatch: useDispatch(),
  gameboy: useSelector(selector.gameboySelector),
  domains: {
    hardware: useSelector(selector.hardwareSelector),
    keyboard: useSelector(selector.keyboardSelector),
    system: useSelector(selector.systemSelector)
  },
  enums: {
    status: StatusInterfaces.StatusEnum,
    directionalPad: KeypadInterfaces.DirectionalPadEnum,
    actionPad: KeypadInterfaces.ActionPadEnum,
    operationalPad: KeypadInterfaces.OperationalPadEnum
  },
  actions: {
    gameboy: gameboySlice.actions,
    keyboard: keyboardSlice.actions,
    hardware: hardwareSlice.actions,
    system: systemSlice.actions
  }
})
