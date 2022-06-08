import { Gameboy } from "./containers"
import { KeyboardApp, HardwareApp, SystemApp } from "./.domains"
import { useStatusReconciliation, useKeypadReconciliation } from "./hooks"

const GameboyApp = () => {
  KeyboardApp()
  useStatusReconciliation()
  useKeypadReconciliation()
  return (
    <Gameboy>
      <HardwareApp>
        <SystemApp />
      </HardwareApp>
    </Gameboy>
  )
}

export default GameboyApp
