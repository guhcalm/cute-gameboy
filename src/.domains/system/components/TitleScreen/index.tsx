import Container, {
  Background,
  Blue,
  Orange,
  Red,
  Logo,
  Info,
  Footer
} from "./style"

export default () => (
  <Container>
    <Background>
      <Blue />
      <Orange />
      <Red />
    </Background>
    <Logo>GAMEBOY</Logo>
    <Info>Press ANY KEY</Info>
    <Footer>© 2022 </Footer>
  </Container>
)
