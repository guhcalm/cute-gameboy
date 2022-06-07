import { ReactNode } from "react"
import {
  ActionPad,
  DirectionalPad,
  OperationalPad,
  Speaker
} from "./components"
import { Hardware, Display } from "./containers"

const HardwareApp = ({ children: System }: { children: ReactNode }) => {
  return (
    <Hardware>
      <Display>{System}</Display>
      <DirectionalPad></DirectionalPad>
      <ActionPad></ActionPad>
      <OperationalPad></OperationalPad>
      <Speaker></Speaker>
    </Hardware>
  )
}

export default HardwareApp
