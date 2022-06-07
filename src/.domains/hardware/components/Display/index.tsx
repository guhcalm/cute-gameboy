import { useSelector } from "react-redux"
import { hardwareStatusSelector } from "../../../../store/selectors"
import Container, { Screen, Info, Logo, Battery } from "./style"

export default () => {
  const status = useSelector(hardwareStatusSelector)
  return (
    <Container className={status ? "activate" : "inactivate"}>
      <Info>
        <span>DOT MATRIX WITH STERIO SOUND</span>
      </Info>
      <Battery className={status ? "activate" : "inactivate"}>
        <span>Battery</span>
      </Battery>
      <Screen />
      <Logo>
        <span>Nitendo</span> <span>GAME BOY</span> <span>TM</span>
      </Logo>
    </Container>
  )
}
