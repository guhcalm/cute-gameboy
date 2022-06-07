import { useSelector } from "react-redux"
import { hardwareStatusSelector } from "../../../../store/selectors"
import Container, { Left, Right, Up, Down, Center } from "./style"

export default () => {
  const status = useSelector(hardwareStatusSelector)
  return (
    <Container className={status ? "activate" : "inactivate"}>
      <Left></Left>
      <Up></Up>
      <Right></Right>
      <Down></Down>
      <Center></Center>
    </Container>
  )
}
