import { Gameboy } from "./containers"
import { KeyboardApp, HardwareApp, SystemApp } from "./.domains"
import { useStatusReconcitilation, useKeypadReconciliation } from "./hooks"

const GameboyApp = () => {
  KeyboardApp()
  useStatusReconcitilation()
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
