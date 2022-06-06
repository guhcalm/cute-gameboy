export * as MouseInterfaces from "./mouse"
export * as StatusInterfaces from "./status"
export * as KeypadInterfaces from "./keypad"
export * as HardwareInterfaces from "./hardware"
export * as SystemInterfaces from "./system"
export * as ThemesInterfaces from "./themes"
export * as SettingsInterfaces from "./settings"
export * as GameboyInterfaces from "./gameboy"
export * as GlobalInterfaces from "./global"

/*
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


*/
