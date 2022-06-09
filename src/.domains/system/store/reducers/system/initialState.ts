import { StatusInterfaces, SystemInterfaces } from "../../../../../interfaces"
const { ACTIVATE, INACTIVATE } = StatusInterfaces.StatusEnum

export default {
  status: ACTIVATE,
  keypad: {
    startupSwitcher: INACTIVATE,
    directionalPad: {
      left: INACTIVATE,
      right: INACTIVATE,
      up: INACTIVATE,
      down: INACTIVATE
    },
    operationalPad: {
      select: INACTIVATE,
      start: INACTIVATE
    },
    actionPad: {
      q: INACTIVATE,
      e: INACTIVATE
    }
  }
} as SystemInterfaces.SystemInterface
