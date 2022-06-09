import { useBootScreen } from "../../hooks"
import Container, { Logo } from "./style"

export default () => {
  useBootScreen()

  return (
    <Container>
      <Logo>Nitendo®</Logo>
    </Container>
  )
}
