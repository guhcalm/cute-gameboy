import { useSelector } from "react-redux"
import { hardwareStatusSelector } from "../../../../store/selectors"
import Container, { Button } from "./style"

export default () => {
  const status = useSelector(hardwareStatusSelector)
  return (
    <Container className={status ? "activate" : "inactivate"}>
      <Button>
        <span>Q</span>
      </Button>
      <Button>
        <span>E</span>
      </Button>
    </Container>
  )
}
