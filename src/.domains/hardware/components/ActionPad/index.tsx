import { useSelector } from "react-redux"
import { StatusInterfaces } from "../../../../interfaces"
import { hardwareStatusSelector } from "../../../../store/selectors"
import Container, { Button } from "./style"

export default () => {
  const status = useSelector(hardwareStatusSelector)
  const { ACTIVATE } = StatusInterfaces.StatusEnum
  return (
    <Container className={status === ACTIVATE ? "activate" : "inactivate"}>
      <Button>
        <span>Q</span>
      </Button>
      <Button>
        <span>E</span>
      </Button>
    </Container>
  )
}
