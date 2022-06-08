import { ReactNode } from "react"
import { Hardware, Display } from "./containers"
import {
  ActionPad,
  DirectionalPad,
  OperationalPad,
  Speaker
} from "./components"

const HardwareApp = ({ children: System }: { children: ReactNode }) => {
  return (
    <Hardware>
      <Display>{System}</Display>
      <DirectionalPad />
      <ActionPad />
      <OperationalPad />
      <Speaker />
    </Hardware>
  )
}

export default HardwareApp
