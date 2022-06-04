const GameboyApp = () => {
  return <div />
}

export default GameboyApp

enum StatusEnum {
  Active = "ACTIVE",
  Inactive = "INACTIVE"
}
interface ColorInterface {
  light?: string
  main?: string
  dark?: string
  on?: string
}
interface ThemeInterface {
  name: string
  palette: {
    primary: ColorInterface
    secondary: ColorInterface
    surface: ColorInterface
    background: ColorInterface
    error: ColorInterface
  }
}
interface DirectionalPadInterface {
  left: StatusEnum
  right: StatusEnum
  up: StatusEnum
  down: StatusEnum
}
interface OperationalPadInterface {
  select: StatusEnum
  start: StatusEnum
}
interface ActionPadInterface {
  select: StatusEnum
  start: StatusEnum
}
interface HardwareInterface {
  status: StatusEnum
  theme: ThemeInterface
  keyPads: {
    startupSwitcher: StatusEnum
    directionalPad: DirectionalPadInterface
    operationalPad: OperationalPadInterface
    actionPad: ActionPadInterface
  }
}
interface KeyboardInterface {
  startupSwitcher: StatusEnum
  directionalPad: DirectionalPadInterface
  operationalPad: OperationalPadInterface
  actionPad: ActionPadInterface
}
interface SystemInterface {
  status: StatusEnum
  keyboard: {
    startupSwitcher: StatusEnum
    directionalPad: DirectionalPadInterface
    operationalPad: OperationalPadInterface
    actionPad: ActionPadInterface
  }
  settings: {
    theme: ThemeInterface
  }
  user: {
    status: StatusEnum
    profile: {
      name: string
      score: number
    }
  }
}

interface GameboyInterface {
  status: StatusEnum
  keys: {
    startupSwitcher: StatusEnum
    directionalPad: DirectionalPadInterface
    operationalPad: OperationalPadInterface
    actionPad: ActionPadInterface
  }
  settings: {
    theme: ThemeInterface
  }
  domains: {
    keyboard: KeyboardInterface
    hardware: HardwareInterface
    system: SystemInterface
  }
}
