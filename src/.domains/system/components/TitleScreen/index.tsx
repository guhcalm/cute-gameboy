import { useEffect } from "react"
import { useSystemContext } from "../../hooks"
import Container, {
  Background,
  Blue,
  Orange,
  Red,
  Logo,
  Info,
  Footer
} from "./style"

export default () => {
  const { dispatch, system, actions, enums } = useSystemContext()
  const { ACTIVATE } = enums.status
  const { LOGIN } = enums.pages
  const { start } = system.keypad.operationalPad

  useEffect(() => {
    if (start === ACTIVATE) dispatch(actions.setCurrentPage(LOGIN))
  }, [start])

  return (
    <Container>
      <Background>
        <Blue />
        <Orange />
        <Red />
      </Background>
      <Logo>GAMEBOY</Logo>
      <Info>Press START</Info>
      <Footer>© 2022. ALL RIGHT RESERVED.</Footer>
    </Container>
  )
}
