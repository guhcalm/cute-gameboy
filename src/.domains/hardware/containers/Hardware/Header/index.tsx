import { useSelector } from "react-redux"
import { hardwareStatusSelector } from "../../../../../store/selectors"
import Container, { Middler, Session } from "./style"

export default () => {
  const status = useSelector(hardwareStatusSelector)
  return (
    <Container className={status ? "activate" : "inactivate"}>
      <Middler>
        <Session>◀ OFF•ON ▶</Session>
      </Middler>
    </Container>
  )
}
