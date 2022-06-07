import { Gameboy } from "./containers"
import { MouseApp, KeyboardApp, HardwareApp, SystemApp } from "./.domains"
import { useMousePosition, useStatus, useKeypad } from "./hooks"

const GameboyApp = () => {
  // domains
  MouseApp()
  KeyboardApp()
  // managers
  useMousePosition()
  useStatus()
  useKeypad()
  return (
    <Gameboy>
      <HardwareApp />
      <SystemApp />
    </Gameboy>
  )
}

export default GameboyApp
