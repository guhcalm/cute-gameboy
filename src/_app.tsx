import { useSelector } from "react-redux"
import { Gameboy } from "./containers"
import { MouseApp, KeyboardApp, HardwareApp, SystemApp } from "./.domains"
import * as reconciliation from "./hooks"

const GameboyApp = () => {
  // domains
  MouseApp()
  KeyboardApp()
  // reconciliators
  reconciliation.useMousePosition()
  reconciliation.useStatus()
  reconciliation.useKeypad()
  // state
  const store = useSelector((state) => state.gameboy.status)
  console.log(store, "status")
  return (
    <Gameboy>
      <HardwareApp>
        <SystemApp />
      </HardwareApp>
    </Gameboy>
  )
}

export default GameboyApp
