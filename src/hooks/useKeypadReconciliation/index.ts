import { useGameboyContext } from ".."
import onClick from "./onClick"

export default () => {
  const { gameboy } = useGameboyContext()
  Object.entries(gameboy.keys).forEach(([pad]) => onClick(pad))
}
