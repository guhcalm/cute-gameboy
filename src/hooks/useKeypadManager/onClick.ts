export default (dispatch, actions) => {
  const { startupSwitcher, directionalPad, operationalPad, actionPad } = actions
  const keyboard = useSelector((state) => state.domains.keyboard)
  const keypad = useSelector((state) => state.domains.hardware.keypad)
  const systemKeypad = useSelector((state) => state.domains.system.keypad)
  // startup switcher
  useEffect(() => {
    if (
      keyboard.startupSwitcher === StatusEnum.ACTIVATE ||
      keypad.startupSwitcher === StatusEnum.ACTIVATE ||
      systemKeypad.startupSwitcher === Status.Enum.ACTIVATE
    ) {
      dispatch(startupSwitcher.keyboard())
      dispatch(startupSwitcher.hardware())
      dispatch(startupSwitcher.system())
      dispatch(startupSwitcher.gameboy())
    }
  }, [
    keyboard.startupSwitcher,
    keypad.startupSwitcher,
    systemKeypad.startupSwitcher
  ])
  // directional pad
  useEffect(() => {
    if (
      keyboard.directionalPad.left === StatusEnum.ACTIVATE ||
      keypad.directionalPad.left === StatusEnum.ACTIVATE
    ) {
      dispatch(directionalPad.keyboard(DirectionalPadEnum.LEFT))
      dispatch(directionalPad.hardware(DirectionalPadEnum.LEFT))
      dispatch(directionalPad.system(DirectionalPadEnum.LEFT))
      dispatch(directionalPad.gameboy(DirectionalPadEnum.LEFT))
    }
    if (
      keyboard.directionalPad.right === StatusEnum.ACTIVATE ||
      keypad.directionalPad.right === StatusEnum.ACTIVATE
    ) {
      dispatch(directionalPad.keyboard(DirectionalPadEnum.RIGHT))
      dispatch(directionalPad.hardware(DirectionalPadEnum.RIGHT))
      dispatch(directionalPad.system(DirectionalPadEnum.RIGHT))
      dispatch(directionalPad.gameboy(DirectionalPadEnum.RIGHT))
    }
    if (
      keyboard.directionalPad.up === StatusEnum.ACTIVATE ||
      keypad.directionalPad.up === StatusEnum.ACTIVATE
    ) {
      dispatch(directionalPad.keyboard(DirectionalPadEnum.UP))
      dispatch(directionalPad.hardware(DirectionalPadEnum.UP))
      dispatch(directionalPad.system(DirectionalPadEnum.UP))
      dispatch(directionalPad.gameboy(DirectionalPadEnum.UP))
    }
    if (
      keyboard.directionalPad.down === StatusEnum.ACTIVATE ||
      keypad.directionalPad.down === StatusEnum.ACTIVATE
    ) {
      dispatch(directionalPad.keyboard(DirectionalPadEnum.DOWN))
      dispatch(directionalPad.hardware(DirectionalPadEnum.DOWN))
      dispatch(directionalPad.system(DirectionalPadEnum.DOWN))
      dispatch(directionalPad.gameboy(DirectionalPadEnum.DOWN))
    }
  }, [keyboard.directionalPad, keypad.directionalPad])
  // operational pad
  useEffect(() => {
    if (
      keyboard.operaitonalPad.select === StatusEnum.ACTIVATE ||
      keypad.operaitonalPad.select === StatusEnum.ACTIVATE
    ) {
      dispatch(operationalPad.keyboard(OperationalPadEnum.SELECT))
      dispatch(operationalPad.hardware(OperationalPadEnum.SELECT))
      dispatch(operationalPad.system(OperationalPadEnum.SELECT))
      dispatch(operationalPad.gameboy(OperationalPadEnum.SELECT))
    }
    if (
      keyboard.operaitonalPad.start === StatusEnum.ACTIVATE ||
      keypad.operaitonalPad.start === StatusEnum.ACTIVATE
    ) {
      dispatch(operationalPad.keyboard(OperationalPadEnum.START))
      dispatch(operationalPad.hardware(OperationalPadEnum.START))
      dispatch(operationalPad.system(OperationalPadEnum.START))
      dispatch(operationalPad.gameboy(OperationalPadEnum.START))
    }
  }, [keyboard.operationalPad, keypad.operationalPad])
  // action pad
  useEffect(() => {
    if (
      keyboard.actionPad.q === StatusEnum.ACTIVATE ||
      keypad.actionPad.q === StatusEnum.ACTIVATE
    ) {
      dispatch(actionPad.keyboard(ActionPadEnum.Q))
      dispatch(actionPad.hardware(ActionPadEnum.Q))
      dispatch(actionPad.system(ActionPadEnum.Q))
      dispatch(actionPad.gameboy(ActionPadEnum.Q))
    }
    if (
      keyboard.actionPad.e === StatusEnum.ACTIVATE ||
      keypad.actionPad.e === StatusEnum.ACTIVATE
    ) {
      dispatch(actionPad.keyboard(ActionPadEnum.E))
      dispatch(actionPad.hardware(ActionPadEnum.E))
      dispatch(actionPad.system(ActionPadEnum.E))
      dispatch(actionPad.gameboy(ActionPadEnum.E))
    }
  }, [keyboard.actionPad, keypad.actionPad])
}
