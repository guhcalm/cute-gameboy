import { useEffect } from "react"
import { useGameboyContext } from ".."

const captalize = (action, string) => {
  return action + string[0].toUpperCase() + string.substr(1)
}

export default (pad: string) => {
  const { dispatch, gameboy, domains, actions, enums } = useGameboyContext()
  const { ACTIVATE, INACTIVATE } = enums.status
  useEffect(() => {
    Object.entries(gameboy.keys[pad]).forEach(([key]) => {
      const direction = enums[pad][key.toUpperCase()]
      if (
        gameboy.keys[pad][key] !== domains.keyboard[pad][key] ||
        gameboy.keys[pad][key] !== domains.hardware.keypad[pad][key] ||
        gameboy.keys[pad][key] !== domains.system.keypad[pad][key]
      ) {
        if (gameboy.keys[pad][key] === ACTIVATE) {
          dispatch(actions.keyboard[captalize("unclick", pad)](direction))
          dispatch(actions.hardware[captalize("unclick", pad)](direction))
          dispatch(actions.system[captalize("unclick", pad)](direction))
          dispatch(actions.gameboy[captalize("unclick", pad)](direction))
        } else if (gameboy.keys[pad][key] === INACTIVATE) {
          dispatch(actions.keyboard[captalize("click", pad)](direction))
          dispatch(actions.hardware[captalize("click", pad)](direction))
          dispatch(actions.system[captalize("click", pad)](direction))
          dispatch(actions.gameboy[captalize("click", pad)](direction))
        }
      }
    })
  }, [
    domains.keyboard[pad],
    domains.hardware.keypad[pad],
    domains.system.keypad[pad]
  ])
}
