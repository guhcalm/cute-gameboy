import { ReactNode } from "react"
import Container, { Background, Blue, Orange, Red, Content } from "./style"

export default ({ children: Page }: { children: ReactNode }) => {
  return (
    <Container>
      <Background>
        <Blue />
        <Orange />
        <Red />
      </Background>
      <Content>{Page}</Content>
    </Container>
  )
}
