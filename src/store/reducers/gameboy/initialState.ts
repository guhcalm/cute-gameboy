import { GameboyInterfaces, StatusInterfaces } from "../../../interfaces"
import { Default } from "../../../styles/themes"

const { INACTIVATE } = StatusInterfaces.StatusEnum

export default {
  status: INACTIVATE,
  mouse: { position: { x: 0, y: 0 } },
  settings: { theme: Default },
  keys: {
    startupSwitcher: INACTIVATE,
    directionalPad: {
      left: INACTIVATE,
      right: INACTIVATE,
      up: INACTIVATE,
      down: INACTIVATE
    },
    operationalPad: { select: INACTIVATE, start: INACTIVATE },
    actionPad: { q: INACTIVATE, e: INACTIVATE }
  }
} as GameboyInterfaces.GameboyInterface
