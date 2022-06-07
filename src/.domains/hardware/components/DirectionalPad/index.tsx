import { useSelector } from "react-redux"
import { StatusInterfaces } from "../../../../interfaces"
import { hardwareStatusSelector } from "../../../../store/selectors"
import Container, { Left, Right, Up, Down, Center } from "./style"

export default () => {
  const status = useSelector(hardwareStatusSelector)
  const { ACTIVATE } =  StatusInterfaces.StatusEnum
  return (
    <Container className={status === ACTIVATE ? "activate" : "inactivate"}>
      <Left></Left>
      <Up></Up>
      <Right></Right>
      <Down></Down>
      <Center></Center>
    </Container>
  )
}
