import { useTitleScreen } from "../../hooks"
import Container, { Logo, Info, Footer } from "./style"

export default () => {
  return (
    <Container>
      <Logo>GAMEBOY</Logo>
      <Info>Press START</Info>
      <Footer>© 2022. ALL RIGHT RESERVED.</Footer>
    </Container>
  )
}
