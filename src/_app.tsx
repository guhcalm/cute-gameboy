import { Gameboy } from "./containers"
import { MouseApp, KeyboardApp } from "./.domains"
import {
  useKeypadManager,
  useMousePositionManager,
  useStatusManager
} from "./hooks"

const GameboyApp = () => {
  MouseApp()
  KeyboardApp()

  useStatusManager()
  useMousePositionManager()
  useKeypadManager()
  return <Gameboy>Hello World</Gameboy>
}

export default GameboyApp
