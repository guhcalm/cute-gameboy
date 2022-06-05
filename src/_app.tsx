import { FC } from "react"
import GameboyGlobalStyles from "./styles/global"
import combinedThemes from "./styles/themes"

const GameboyApp: FC = () => {
  return <GameboyGlobalStyles theme={combinedThemes[0]} />
}

export default GameboyApp
