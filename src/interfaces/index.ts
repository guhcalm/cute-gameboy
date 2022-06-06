export * as ThemesInterfaces from "./themes"
export * as StatusInterfaces from "./status"
export * as MouseInterfaces from "./mouse"
export * as KeypadInterfaces from "./keypad"
export * as HardwareInterfaces from "./hardware"
export * as SystemInterfaces from "./system"
export * as SettingsInterfaces from "./settings"

/*
// useManageStatus() - OK
// useManageKeypads() - OK
// useManageMousePosition() - OK
// setMousePosition() - OK
// activateStatus() - OK
// inactivateStatus() - OK
// clickStartupSwitcher() - OK
// unclickStartupSwitcher() - OK
// clickDirectionalPad() - OK
// unclickDirectionalPad() - OK
// clickOperationalPad() - OK
// unclickOperationalPad() - OK
// clickActionPad() - OK
// unclickActionPad() - OK
const gameboyActions = {
  setMousePosition(
    state: GameboyInterface,
    { payload: position }: { payload: MouseInterface }
  ) {
    state.mouse = { ...position }
  },
  activateStatus(state: GameboyInterface) {
    state.status = StatusEnum.ACTIVATE
  },
  inactivateStatus(state: GameboyInterface) {
    state.status = StatusEnum.INACTIVATE
  },
  clickStartupSwitcher(state: GameboyInterface) {
    state.keys.startupSwitcher = StatusEnum.ACTIVATE
  },
  unclickStartupSwitcher(state: GameboyInterface) {
    state.keys.startupSwitcher = StatusEnum.ACTIVATE
  },
  clickDirectionalPad(
    state: GameboyInterface,
    { payload: direction }: { payload: DirectionalPadEnum }
  ) {
    const { directionalPad: pad } = state.keys
    const { ACTIVATE } = StatusEnum
    const { LEFT, RIGHT, UP, DOWN } = DirectionalPadEnum
    if (direction === LEFT) pad.left = ACTIVATE
    if (direction === RIGHT) pad.right = ACTIVATE
    if (direction === UP) pad.up = ACTIVATE
    if (direction === DOWN) pad.down = ACTIVATE
  },
  unclickDirectionalPad(
    state: GameboyInterface,
    { payload: direction }: { payload: DirectionalPadEnum }
  ) {
    const { directionalPad: pad } = state.keys
    const { ACTIVATE } = StatusEnum
    const { LEFT, RIGHT, UP, DOWN } = DirectionalPadEnum
    if (direction === LEFT) pad.left = ACTIVATE
    if (direction === RIGHT) pad.right = ACTIVATE
    if (direction === UP) pad.up = ACTIVATE
    if (direction === DOWN) pad.down = ACTIVATE
  },
  clickOperationalPad(
    state: GameboyInterface,
    { payload: operation }: { payload: OperationalPadEnum }
  ) {
    const { operationalPad: pad } = state.keys
    const { ACTIVATE } = StatusEnum
    const { SELECT, START } = OperationalPadEnum
    if (operation === SELECT) pad.select = ACTIVATE
    if (operation === START) pad.start = ACTIVATE
  },
  unclickOperationalPad(
    state: GameboyInterface,
    { payload: operation }: { payload: OperationalPadEnum }
  ) {
    const { operationalPad: pad } = state.keys
    const { INACTIVATE } = StatusEnum
    const { SELECT, START } = OperationalPadEnum
    if (operation === SELECT) pad.select = INACTIVATE
    if (operation === START) pad.start = INACTIVATE
  },
  clickActionPad(
    state: GameboyInterface,
    { payload: action }: { payload: ActionPadEnum }
  ) {
    const { actionPad: pad } = state.keys
    const { ACTIVATE } = StatusEnum
    const { Q, E } = ActionPadEnum
    if (action === Q) pad.q = ACTIVATE
    if (action === E) pad.e = ACTIVATE
  },
  unclickActionPad(
    state: GameboyInterface,
    { payload: action }: { payload: ActionPadEnum }
  ) {
    const { actionPad: pad } = state.keys
    const { INACTIVATE } = StatusEnum
    const { Q, E } = ActionPadEnum
    if (action === Q) pad.q = INACTIVATE
    if (action === E) pad.e = INACTIVATE
  }
}

// setMousePosition() - OK
const mouseActions = {
  setMousePosition(
    state: MouseInterface,
    { payload: mouse }: { payload: MouseInterface }
  ) {
    state.position = { ...mouse.position }
  }
}

// clickStartupSwitcher() - OK
// unclickStartupSwitcher() - OK
// clickDirectionalPad() - OK
// unclickDirectionalPad() - OK
// clickOperationalPad() - OK
// unclickOperationalPad() - OK
// clickActionPad() - OK
// unclickActionPad() - OK
const keyboardActions = {
  // STARTUP SWITCHER
  clickStartupSwitcher(state: KeypadInterface) {
    state.startupSwitcher = StatusEnum.ACTIVATE
  },
  unclickStartupSwitcher(state: KeypadInterface) {
    state.startupSwitcher = StatusEnum.INACTIVATE
  },
  // DIRECTIONAL PAD
  clickDirectionalPad(
    state: KeypadInterface,
    { payload: direction }: { payload: DirectionalPadEnum }
  ) {
    const { directionalPad: pad } = state
    const { ACTIVATE } = StatusEnum
    const { LEFT, RIGHT, UP, DOWN } = DirectionalPadEnum
    if (direction === LEFT) pad.left = ACTIVATE
    if (direction === RIGHT) pad.right = ACTIVATE
    if (direction === UP) pad.up = ACTIVATE
    if (direction === DOWN) pad.down = ACTIVATE
  },
  unclickDirectionalPad(
    state: KeypadInterface,
    { payload: direction }: { payload: DirectionalPadEnum }
  ) {
    const { directionalPad: pad } = state
    const { INACTIVATE } = StatusEnum
    const { LEFT, RIGHT, UP, DOWN } = DirectionalPadEnum
    if (direction === LEFT) pad.left = INACTIVATE
    if (direction === RIGHT) pad.right = INACTIVATE
    if (direction === UP) pad.up = INACTIVATE
    if (direction === DOWN) pad.down = INACTIVATE
  },
  // OPERATIONAL PAD
  clickOperaionalPad(
    state: KeypadInterface,
    { payload: operation }: { payload: OperationalPadEnum }
  ) {
    const { operationalPad: pad } = state
    const { ACTIVATE } = StatusEnum
    const { SELECT, START } = OperationalPadEnum
    if (operation === SELECT) pad.select = ACTIVATE
    if (operation === START) pad.start = ACTIVATE
  },
  unclickOperaionalPad(
    state: KeypadInterface,
    { payload: operation }: { payload: OperationalPadEnum }
  ) {
    const { operationalPad: pad } = state
    const { INACTIVATE } = StatusEnum
    const { SELECT, START } = OperationalPadEnum
    if (operation === SELECT) pad.select = INACTIVATE
    if (operation === START) pad.start = INACTIVATE
  },
  // ACTION PAD
  clickActionPad(
    state: KeypadInterface,
    { payload: action }: { payload: ActionPadEnum }
  ) {
    const { actionPad: pad } = state
    const { ACTIVATE } = StatusEnum
    const { Q, E } = ActionPadEnum
    if (action === Q) pad.q = ACTIVATE
    if (action === E) pad.e = ACTIVATE
  },
  unclickActionPad(
    state: KeypadInterface,
    { payload: action }: { payload: ActionPadEnum }
  ) {
    const { actionPad: pad } = state
    const { INACTIVATE } = StatusEnum
    const { Q, E } = ActionPadEnum
    if (action === Q) pad.q = INACTIVATE
    if (action === E) pad.e = INACTIVATE
  }
}

// activateStatus() - OK
// inactivateStatus() - OK
// clickStartupSwitcher() - OK
// unclickStartupSwitcher() - OK
// clickDirectionalPad() - OK
// unclickDirectionalPad() - OK
// clickOperationalPad() - OK
// unclickOperationalPad() - OK
// clickActionPad() - OK
// unclickActionPad() - OK
const hardwareActions = {
  // STATUS
  activateStatus(state: HardwareInterface) {
    state.status = StatusEnum.ACTIVATE
  },
  inactivateStatus(state: HardwareInterface) {
    state.status = StatusEnum.INACTIVATE
  },
  // STARTUP SWITCHER
  clickStartupSwitcher(state: HardwareInterface) {
    state.keypad.startupSwitcher = StatusEnum.ACTIVATE
  },
  unclickStartupSwitcher(state: HardwareInterface) {
    state.keypad.startupSwitcher = StatusEnum.INACTIVATE
  },
  // DIRECTIONAL PAD
  clickDirectionalPad(
    state: HardwareInterface,
    { payload: direction }: { payload: DirectionalPadEnum }
  ) {
    const { directionalPad: pad } = state.keypad
    const { LEFT, RIGHT, UP, DOWN } = DirectionalPadEnum
    const { ACTIVATE } = StatusEnum
    if (direction === LEFT) pad.left = ACTIVATE
    if (direction === RIGHT) pad.right = ACTIVATE
    if (direction === UP) pad.up = ACTIVATE
    if (direction === DOWN) pad.down = ACTIVATE
  },
  unclickDirectionalPad(
    state: HardwareInterface,
    { payload: direction }: { payload: DirectionalPadEnum }
  ) {
    const { directionalPad: pad } = state.keypad
    const { LEFT, RIGHT, UP, DOWN } = DirectionalPadEnum
    const { INACTIVATE } = StatusEnum
    if (direction === LEFT) pad.left = INACTIVATE
    if (direction === RIGHT) pad.right = INACTIVATE
    if (direction === UP) pad.up = INACTIVATE
    if (direction === DOWN) pad.down = INACTIVATE
  },
  // OPERATIONAL PAD
  clickOperaionalPad(
    state: HardwareInterface,
    { payload: operation }: { payload: OperationalPadEnum }
  ) {
    const { operationalPad: pad } = state.keypad
    const { ACTIVATE } = StatusEnum
    const { SELECT, START } = OperationalPadEnum
    if (operation === SELECT) pad.select = ACTIVATE
    if (operation === START) pad.start = ACTIVATE
  },
  unclickOperaionalPad(
    state: HardwareInterface,
    { payload: operation }: { payload: OperationalPadEnum }
  ) {
    const { operationalPad: pad } = state.keypad
    const { INACTIVATE } = StatusEnum
    const { SELECT, START } = OperationalPadEnum
    if (operation === SELECT) pad.select = INACTIVATE
    if (operation === START) pad.start = INACTIVATE
  },
  // ACTION PAD
  clickActionPad(
    state: HardwareInterface,
    { payload: action }: { payload: ActionPadEnum }
  ) {
    const { actionPad: pad } = state.keypad
    const { ACTIVATE } = StatusEnum
    const { Q, E } = ActionPadEnum
    if (action === Q) pad.q = ACTIVATE
    if (action === E) pad.e = ACTIVATE
  },
  unclickActionPad(
    state: HardwareInterface,
    { payload: action }: { payload: ActionPadEnum }
  ) {
    const { actionPad: pad } = state.keypad
    const { INACTIVATE } = StatusEnum
    const { Q, E } = ActionPadEnum
    if (action === Q) pad.q = INACTIVATE
    if (action === E) pad.e = INACTIVATE
  }
}

// activateStatus() - OK
// inactivateStatus() - OK
// clickStartupSwitcher() - OK
// unclickStartupSwitcher() - OK
// clickDirectionalPad() - OK
// unclickDirectionalPad() - OK
// clickOperationalPad() - OK
// unclickOperationalPad() - OK
// clickActionPad() - OK
// unclickActionPad() - OK
const systemActions = {
  // STATUS
  activateStatus(state: SystemInterface) {
    state.status = StatusEnum.ACTIVATE
  },
  inactivateStatus(state: SystemInterface) {
    state.status = StatusEnum.INACTIVATE
  },
  // STARTUP SWITCHER
  clickStartupSwitcher(state: SystemInterface) {
    state.keypad.startupSwitcher = StatusEnum.ACTIVATE
  },
  unclickStartupSwitcher(state: SystemInterface) {
    state.keypad.startupSwitcher = StatusEnum.INACTIVATE
  },
  // DIRECTIONAL PAD
  clickDirectionalPad(
    state: SystemInterface,
    { payload: direction }: { payload: DirectionalPadEnum }
  ) {
    const { directionalPad: pad } = state.keypad
    const { LEFT, RIGHT, UP, DOWN } = DirectionalPadEnum
    const { ACTIVATE } = StatusEnum
    if (direction === LEFT) pad.left = ACTIVATE
    if (direction === RIGHT) pad.right = ACTIVATE
    if (direction === UP) pad.up = ACTIVATE
    if (direction === DOWN) pad.down = ACTIVATE
  },
  unclickDirectionalPad(
    state: SystemInterface,
    { payload: direction }: { payload: DirectionalPadEnum }
  ) {
    const { directionalPad: pad } = state.keypad
    const { LEFT, RIGHT, UP, DOWN } = DirectionalPadEnum
    const { INACTIVATE } = StatusEnum
    if (direction === LEFT) pad.left = INACTIVATE
    if (direction === RIGHT) pad.right = INACTIVATE
    if (direction === UP) pad.up = INACTIVATE
    if (direction === DOWN) pad.down = INACTIVATE
  },
  // OPERATIONAL PAD
  clickOperaionalPad(
    state: SystemInterface,
    { payload: operation }: { payload: OperationalPadEnum }
  ) {
    const { operationalPad: pad } = state.keypad
    const { ACTIVATE } = StatusEnum
    const { SELECT, START } = OperationalPadEnum
    if (operation === SELECT) pad.select = ACTIVATE
    if (operation === START) pad.start = ACTIVATE
  },
  unclickOperaionalPad(
    state: SystemInterface,
    { payload: operation }: { payload: OperationalPadEnum }
  ) {
    const { operationalPad: pad } = state.keypad
    const { INACTIVATE } = StatusEnum
    const { SELECT, START } = OperationalPadEnum
    if (operation === SELECT) pad.select = INACTIVATE
    if (operation === START) pad.start = INACTIVATE
  },
  // ACTION PAD
  clickActionPad(
    state: SystemInterface,
    { payload: action }: { payload: ActionPadEnum }
  ) {
    const { actionPad: pad } = state.keypad
    const { ACTIVATE } = StatusEnum
    const { Q, E } = ActionPadEnum
    if (action === Q) pad.q = ACTIVATE
    if (action === E) pad.e = ACTIVATE
  },
  unclickActionPad(
    state: SystemInterface,
    { payload: action }: { payload: ActionPadEnum }
  ) {
    const { actionPad: pad } = state.keypad
    const { INACTIVATE } = StatusEnum
    const { Q, E } = ActionPadEnum
    if (action === Q) pad.q = INACTIVATE
    if (action === E) pad.e = INACTIVATE
  }
}
*/
/*
const useManageMousePosition = () => {
  const dispatch = useDispatcher()
  const mousePosition = useSelector(state => state.domains.mouse.mousePosition)
  useEffect(() => {
    dispatch(MouseActions.setMousePosition(mousePosition))
  }, [mousePosition])
}

const useManageStatus = () => {
  const dispatch = useDispatcher()
  const keyboard = useSelector(state => state.domains.keyboard)
  const keypad = useSelector(state => state.domains.hardware.keypad)
  const systemKeypad = useSelector(state => state.domains.system.keypad)
  const gameboyStatus = useSelector(state => state.status)
  // startup switcher
  useEffect(()=>{
    if (keyboard.startupSwitcher === StatusEnum.ACTIVATE || keypad.startupSwitcher  === StatusEnum.ACTIVATE || systemKeypad.startupSwitcher === Status.Enum.ACTIVATE) {
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
  },[keyboard.startupSwitcher, keypad.startupSwitcher, systemKeypad.startupSwitcher])
}

const useManageKeypads = () => {
  const dispatch = useDispatcher()
  const keyboard = useSelector(state => state.domains.keyboard)
  const keypad = useSelector(state => state.domains.hardware.keypad)
  const systemKeypad = useSelector(state => state.domains.system.keypad)
  const gameboyKeys = useSelector(state => state.keys)
  // ON CLICK DOWN
  manageClick(dispatch, {
    startupSwitcher: {
      keyboard: keyboardActions.clickStartupSwitcher, 
      hardware: hardwareActions.clickStartupSwitcher, 
      system: systemActions.clickStartupSwitcher, 
      gameboy: gameboyActions.clickStartupSwitcher
    },
    directionalPad: {
      keyboard: keyboardActions.clickDirectionalPad, 
      hardware: hardwareActions.clickDirectionalPad,
      system: systemActions.clickDirectionalPad,
      gameboy: gameboyActions.clickDirectionalPad
    },
    operationalPad: {
      keyboard: keyboardActions.clickOperationalPad,
      hardware: hardwareActions.clickOperationalPad, 
      system: systemActions.clickOperationalPad,
      gameboy: gameboyActions.clickOperationalPad
    },
    actionPad: {
      keyboard: keyboardActions.clickActionPad,
      hardware: hardwareActions.clickActionPad,
      system: systemActions.clickActionPad, 
      gameboy: gameboyActions.clickActionPads
    }
  })
  // ON CLICK UP
  manageClick(dispatch, {
    startupSwitcher: {
      keyboard: keyboardActions.unclickStartupSwitcher, 
      hardware: hardwareActions.unclickStartupSwitcher, 
      system: systemActions.unclickStartupSwitcher, 
      gameboy: gameboyActions.unclickStartupSwitcher
    },
    directionalPad: {
      keyboard: keyboardActions.unclickDirectionalPad, 
      hardware: hardwareActions.unclickDirectionalPad,
      system: systemActions.unclickDirectionalPad,
      gameboy: gameboyActions.unclickDirectionalPad
    },
    operationalPad: {
      keyboard: keyboardActions.unclickOperationalPad,
      hardware: hardwareActions.unclickOperationalPad, 
      system: systemActions.unclickOperationalPad,
      gameboy: gameboyActions.unclickOperationalPad
    },
    actionPad: {
      keyboard: keyboardActions.unclickActionPad,
      hardware: hardwareActions.unclickActionPad,
      system: systemActions.unclickActionPad, 
      gameboy: gameboyActions.unclickActionPads
    }
  })
}

const manageClick = (dispatch, {
    startupSwitcher,
    directionalPad,
    operationalPad,
    actionPad
  }) => {
  // startup switcher
  useEffect(()=>{
    if (keyboard.startupSwitcher === StatusEnum.ACTIVATE || keypad.startupSwitcher  === StatusEnum.ACTIVATE || systemKeypad.startupSwitcher === Status.Enum.ACTIVATE) {
      dispatch(startupSwitcher.keyboard())
      dispatch(startupSwitcher.hardware())
      dispatch(startupSwitcher.system())
      dispatch(startupSwitcher.gameboy())
    }
  },[keyboard.startupSwitcher, keypad.startupSwitcher, systemKeypad.startupSwitcher])
  // directional pad
  useEffect(()=>{
    if (keyboard.directionalPad.left === StatusEnum.ACTIVATE || keypad.directionalPad.left === StatusEnum.ACTIVATE) {
      dispatch(directionalPad.keyboard(DirectionalPadEnum.LEFT))
      dispatch(directionalPad.hardware(DirectionalPadEnum.LEFT))
      dispatch(directionalPad.system(DirectionalPadEnum.LEFT))
      dispatch(directionalPad.gameboy(DirectionalPadEnum.LEFT))
    }
    if (keyboard.directionalPad.right === StatusEnum.ACTIVATE || keypad.directionalPad.right === StatusEnum.ACTIVATE) {
      dispatch(directionalPad.keyboard(DirectionalPadEnum.RIGHT))
      dispatch(directionalPad.hardware(DirectionalPadEnum.RIGHT))
      dispatch(directionalPad.system(DirectionalPadEnum.RIGHT))
      dispatch(directionalPad.gameboy(DirectionalPadEnum.RIGHT))
    }
    if (keyboard.directionalPad.up === StatusEnum.ACTIVATE || keypad.directionalPad.up === StatusEnum.ACTIVATE) {
      dispatch(directionalPad.keyboard(DirectionalPadEnum.UP))
      dispatch(directionalPad.hardware(DirectionalPadEnum.UP))
      dispatch(directionalPad.system(DirectionalPadEnum.UP))
      dispatch(directionalPad.gameboy(DirectionalPadEnum.UP))
    }
    if (keyboard.directionalPad.down === StatusEnum.ACTIVATE || keypad.directionalPad.down === StatusEnum.ACTIVATE) {
      dispatch(directionalPad.keyboard(DirectionalPadEnum.DOWN))
      dispatch(directionalPad.hardware(DirectionalPadEnum.DOWN))
      dispatch(directionalPad.system(DirectionalPadEnum.DOWN))
      dispatch(directionalPad.gameboy(DirectionalPadEnum.DOWN))
    }
  },[keyboard.directionalPad, keypad.directionalPad])
  // operational pad
  useEffect(() => {
    if (keyboard.operaitonalPad.select === StatusEnum.ACTIVATE || keypad.operaitonalPad.select === StatusEnum.ACTIVATE) {
      dispatch(operationalPad.keyboard(OperationalPadEnum.SELECT))
      dispatch(operationalPad.hardware(OperationalPadEnum.SELECT))
      dispatch(operationalPad.system(OperationalPadEnum.SELECT))
      dispatch(operationalPad.gameboy(OperationalPadEnum.SELECT))
    }
    if (keyboard.operaitonalPad.start === StatusEnum.ACTIVATE || keypad.operaitonalPad.start === StatusEnum.ACTIVATE) {
      dispatch(operationalPad.keyboard(OperationalPadEnum.START))
      dispatch(operationalPad.hardware(OperationalPadEnum.START))
      dispatch(operationalPad.system(OperationalPadEnum.START))
      dispatch(operationalPad.gameboy(OperationalPadEnum.START))
    }
  },[keyboard.operationalPad, keypad.operationalPad])
  // action pad
  useEffect(() => {
    if (keyboard.actionPad.q === StatusEnum.ACTIVATE || keypad.actionPad.q === StatusEnum.ACTIVATE) {
      dispatch(actionPad.keyboard(ActionPadEnum.Q))
      dispatch(actionPad.hardware(ActionPadEnum.Q))
      dispatch(actionPad.system(ActionPadEnum.Q))
      dispatch(actionPad.gameboy(ActionPadEnum.Q))
    }
    if (keyboard.actionPad.e === StatusEnum.ACTIVATE || keypad.actionPad.e === StatusEnum.ACTIVATE) {
      dispatch(actionPad.keyboard(ActionPadEnum.E))
      dispatch(actionPad.hardware(ActionPadEnum.E))
      dispatch(actionPad.system(ActionPadEnum.E))
      dispatch(actionPad.gameboy(ActionPadEnum.E))
    }
  },[keyboard.actionPad, keypad.actionPad])
}
*/
