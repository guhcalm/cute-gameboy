import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { StatusInterfaces } from "../../interfaces"
import { hardwareSlice, systemSlice } from "../../.domains"
import { gameboySlice } from "../../store/reducers"
import {
  gameboyStatusSelector,
  hardwareKeypadSelector,
  keyboardSelector,
  systemKeypadSelector
} from "../../store/selectors"

export default () => {
  const dispatch = useDispatch()
  const keyboard = useSelector(keyboardSelector)
  // selectors
  const hardwareKeypad = useSelector(hardwareKeypadSelector)
  const systemKeypad = useSelector(systemKeypadSelector)
  const gameboyStatus = useSelector(gameboyStatusSelector)
  // actions
  const { actions: hardwareActions } = hardwareSlice
  const { actions: systemActions } = systemSlice
  const { actions: gameboyActions } = gameboySlice
  // startup switcher
  useEffect(() => {
    if (
      keyboard.startupSwitcher === StatusInterfaces.StatusEnum.ACTIVATE ||
      hardwareKeypad.startupSwitcher === StatusInterfaces.StatusEnum.ACTIVATE ||
      systemKeypad.startupSwitcher === StatusInterfaces.StatusEnum.ACTIVATE
    ) {
      if (gameboyStatus === StatusInterfaces.StatusEnum.ACTIVATE) {
        dispatch(hardwareActions.inactivateStatus())
        dispatch(systemActions.inactivateStatus())
        dispatch(gameboyActions.inactivateStatus())
      } else {
        dispatch(hardwareActions.activateStatus())
        dispatch(systemActions.activateStatus())
        dispatch(gameboyActions.activateStatus())
      }
    }
  }, [
    keyboard.startupSwitcher,
    hardwareKeypad.startupSwitcher,
    systemKeypad.startupSwitcher
  ])
}
