import { useSelector } from "react-redux"
import { StatusInterfaces } from "../../../../interfaces"
import { hardwareStatusSelector } from "../../../../store/selectors"
import Container, { Screen, Info, Logo, Battery } from "./style"

export default () => {
  const status = useSelector(hardwareStatusSelector)
  const { ACTIVATE } =  StatusInterfaces.StatusEnum
  return (
    <Container className={status === ACTIVATE ? "activate" : "inactivate"}>
      <Info>
        <span>DOT MATRIX WITH STERIO SOUND</span>
      </Info>
      <Battery className={status === ACTIVATE ? "activate" : "inactivate"}>
        <span>Battery</span>
      </Battery>
      <Screen />
      <Logo>
        <span>Nitendo</span> <span>GAME BOY</span> <span>TM</span>
      </Logo>
    </Container>
  )
}
