import { useEffect } from "react"
import { useGameboyContext } from ".."

export default () => {
  const { dispatch, gameboy, actions, enums, domains } = useGameboyContext()
  const { ACTIVATE, INACTIVATE } = enums.status
  const { hardware, system, keyboard } = domains
  useEffect(() => {
    if (
      gameboy.status !== hardware.status ||
      gameboy.status !== system.status
    ) {
      switch (gameboy.status) {
        case ACTIVATE:
          dispatch(actions.hardware.inactivateStatus())
          dispatch(actions.system.inactivateStatus())
          dispatch(actions.gameboy.inactivateStatus())
          break
        case INACTIVATE:
          dispatch(actions.hardware.activateStatus())
          dispatch(actions.system.activateStatus())
          dispatch(actions.gameboy.activateStatus())
          break
        default:
          break
      }
    }
  }, [hardware.status, system.status])
}
