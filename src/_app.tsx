import { useSelector } from "react-redux"
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
  const store = useSelector((state) => state.gameboy.keys.directionalPad)
  console.log(store)
  return (
    <Gameboy>
      <HardwareApp />
      <SystemApp />
    </Gameboy>
  )
}

export default GameboyApp
