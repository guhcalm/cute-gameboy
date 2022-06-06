/**
 * @Theme
 */
export enum ThemesEnum {
  Default = "DEFAULT"
}
interface ColorInterface {
  light?: string
  main: string
  dark?: string
  on: string
}
export interface ThemeInterface {
  name: ThemesEnum
  palette: {
    surface: ColorInterface
    background: ColorInterface
    error: ColorInterface
    primary: ColorInterface
    secondary: ColorInterface
  }
}

/**
 * @Status
 */
export enum StatusEnum {
  ACTIVE,
  INACTIVE
}

/**
 * @DirectionalPad
 */
enum DirectionalPadEnum {
  LEFT,
  RIGHT,
  UP,
  DOWN
}
interface DirectionalPadInterface {
  left: DirectionalPadEnum.LEFT
  right: DirectionalPadEnum.RIGHT
  up: DirectionalPadEnum.UP
  down: DirectionalPadEnum.DOWN
}

/**
 * @OperationalPad
 */
enum OperationalPadEnum {
  SELECT,
  START
}
interface OperationalPadInterface {
  select: OperationalPadEnum.SELECT
  start: OperationalPadEnum.START
}

/**
 * @ActionPad
 */
enum ActionPadEnum {
  E,
  Q
}
interface ActionPadInterface {
  e: ActionPadEnum.E
  q: ActionPadEnum.Q
}

/**
 * @Settings
 */
interface SettingsInterface {
  theme: ThemeInterface
}

/**
 * @User
 */
interface UserInterface {
  status: StatusEnum
  profile: { name: string; score: number }
}

/**
 * @Mouse
 */
interface MouseInterface {
  position: {
    x: number
    y: number
  }
}

/**
 * @Keypad
 */
interface KeypadInterface {
  startupSwitcher: StatusEnum
  directionalPad: DirectionalPadInterface
  operationalPad: OperationalPadInterface
  actionPad: ActionPadInterface
}

/**
 * @Hardware
 */
interface HardwareInterface {
  status: StatusEnum
  settings: SettingsInterface
  keypad: KeypadInterface
}

/**
 * @System
 */
interface SystemInterface {
  status: StatusEnum
  keypad: KeypadInterface
  user: UserInterface
  settings: SettingsInterface
}

/**
 * @Gameboy
 */
interface GameboyInterface {
  status: StatusEnum
  settings: SettingsInterface
  mouse: MouseInterface
  keys: KeypadInterface
  domains: {
    mouse: MouseInterface
    keyboard: KeypadInterface
    hardware: HardwareInterface
    system: SystemInterface
  }
}
