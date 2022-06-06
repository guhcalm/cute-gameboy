import { useSelector, useDispatch } from "react-redux"

export default () => {
  const dispatch = useDispatch()
  const keyboard = useSelector((state) => state.domains.keyboard)
  const keypad = useSelector((state) => state.domains.hardware.keypad)
  const systemKeypad = useSelector((state) => state.domains.system.keypad)
  const gameboyStatus = useSelector((state) => state.status)
  // startup switcher
  useEffect(() => {
    if (
      keyboard.startupSwitcher === StatusEnum.ACTIVATE ||
      keypad.startupSwitcher === StatusEnum.ACTIVATE ||
      systemKeypad.startupSwitcher === Status.Enum.ACTIVATE
    ) {
      if (gameboyStatus === StatusEnum.ACTIVATE) {
        dispatch(KeyboardActions.inactivateStatus())
        dispatch(HardwareActions.inactivateStatus())
        dispatch(SystemActions.inactivateStatus())
        dispatch(GameboyActions.inactivateStatus())
      } else {
        dispatch(KeyboardActions.activateStatus())
        dispatch(HardwareActions.activateStatus())
        dispatch(SystemActions.activateStatus())
        dispatch(GameboyActions.activateStatus())
      }
    }
  }, [
    keyboard.startupSwitcher,
    keypad.startupSwitcher,
    systemKeypad.startupSwitcher
  ])
}
