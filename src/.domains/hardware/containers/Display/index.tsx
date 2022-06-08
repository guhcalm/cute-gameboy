import { ReactNode } from "react"
import { useHardwareContext } from "../../hooks"
import Container, { Screen, Info, Logo, Battery } from "./style"

export default ({ children: System }: { children: ReactNode }) => {
  const { className } = useHardwareContext()
  return (
    <Container className={className}>
      <Info>
        <span>DOT MATRIX WITH STERIO SOUND</span>
      </Info>
      <Battery className={className}>
        <span>Battery</span>
      </Battery>
      <Screen>{System}</Screen>
      <Logo>
        <span>Nitendo</span> <span>GAME BOY</span> <span>TM</span>
      </Logo>
    </Container>
  )
}
