import { KeypadInterfaces, StatusInterfaces } from "../../../../../interfaces"
const { INACTIVATE } = StatusInterfaces.StatusEnum

export default {
  startupSwitcher: INACTIVATE,
  directionalPad: {
    left: INACTIVATE,
    right: INACTIVATE,
    up: INACTIVATE,
    down: INACTIVATE
  },
  operationalPad: { select: INACTIVATE, start: INACTIVATE },
  actionPad: { q: INACTIVATE, e: INACTIVATE }
} as KeypadInterfaces.KeypadInterface
