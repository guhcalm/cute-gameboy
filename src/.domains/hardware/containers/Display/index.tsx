import { ReactNode } from "react"
import { useHardwareContext } from "../../hooks"
import Container from "./style"
import { Screen } from ".."
import { Info, Battery, Logo } from "../../components"

export default ({ children: System }: { children: ReactNode }) => {
  const { className } = useHardwareContext()
  return (
    <Container className={className}>
      <Info />
      <Battery />
      <Screen>{System}</Screen>
      <Logo />
    </Container>
  )
}
