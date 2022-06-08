import { useGameboyContext } from ".."

export default () => {
  const { dispatch, status, keypad, actions, enums } = useGameboyContext()
  const { ACTIVATE, INACTIVATE } = enums.status
  if (status === INACTIVATE) {
    console.log("Tá inativo")
  }
}
