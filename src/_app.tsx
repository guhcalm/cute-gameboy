import { useSelector } from "react-redux"
import { Gameboy } from "./containers"
import { MouseApp, KeyboardApp, HardwareApp, SystemApp } from "./.domains"
import { useMousePosition, useStatus, useKeypad } from "./hooks"
import { gameboyKeysSelector } from "./store/selectors"

const GameboyApp = () => {
  // domains
  MouseApp()
  KeyboardApp()
  // managers
  useMousePosition()
  useStatus()
  useKeypad()
  const store = useSelector(gameboyKeysSelector)
  console.log(store)
  return (
    <Gameboy>
      <HardwareApp />
      <SystemApp />
    </Gameboy>
  )
}

export default GameboyApp
