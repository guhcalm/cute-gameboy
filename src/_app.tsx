import { Gameboy } from "./containers"
import { MouseApp, KeyboardApp } from "./.domains"
import { useMousePosition } from "./hooks"

const GameboyApp = () => {
  // domains
  MouseApp()
  KeyboardApp()
  // managers
  useMousePosition()
  // useStatus()
  // useKeypad()
  return <Gameboy>Hello World</Gameboy>
}

export default GameboyApp
