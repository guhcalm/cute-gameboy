import Container, { Button } from "./style"
import { useOperationalPad } from "../../hooks"

export default () => {
  const { clickDown, clickUp } = useOperationalPad()
  return (
    <Container>
      <Button onMouseDown={clickDown.select} onMouseUp={clickUp.select}>
        <span>SELECT</span>
      </Button>
      <Button onMouseDown={clickDown.start} onMouseUp={clickUp.start}>
        <span>START</span>
      </Button>
    </Container>
  )
}
