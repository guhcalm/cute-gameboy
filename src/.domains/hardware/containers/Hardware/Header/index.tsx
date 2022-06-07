import { useSelector } from "react-redux"
import { StatusInterfaces } from "../../../../../interfaces"
import { hardwareStatusSelector } from "../../../../../store/selectors"
import Container, { Middler, Session } from "./style"

export default () => {
  const status = useSelector(hardwareStatusSelector)
  const { ACTIVATE } =  StatusInterfaces.StatusEnum
  return (
    <Container className={status === ACTIVATE ? "activate" : "inactivate"}>
      <Middler>
        <Session>◀ OFF•ON ▶</Session>
      </Middler>
    </Container>
  )
}
