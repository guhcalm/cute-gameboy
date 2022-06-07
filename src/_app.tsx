import { Gameboy } from "./containers"
import { KeyboardApp, HardwareApp, SystemApp } from "./.domains"
import * as reconciliation from "./hooks"

const GameboyApp = () => {
  KeyboardApp()
  reconciliation.useStatus()
  reconciliation.useKeypad()
  return (
    <Gameboy>
      <HardwareApp>
        <SystemApp />
      </HardwareApp>
    </Gameboy>
  )
}

export default GameboyApp
