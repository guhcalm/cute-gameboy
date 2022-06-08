import Container, { Button } from "./style"
import { useOperationalPad } from "../../hooks"

export default () => {
  const { className, clickDown, clickUp, operationalPad } = useOperationalPad()
  return (
    <Container>
      <Button
        onMouseDown={clickDown.select}
        onMouseUp={clickUp.select}
        className={operationalPad.select}
      >
        <span>SELECT</span>
      </Button>
      <Button
        onMouseDown={clickDown.start}
        onMouseUp={clickUp.start}
        className={operationalPad.start}
      >
        <span>START</span>
      </Button>
    </Container>
  )
}
