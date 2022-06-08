import { useGameboyContext } from ".."

export default () => {
  const { dispatch, status, keypad, actions, enums, domains } =
    useGameboyContext()
  console.log(domains.hardware)
}
