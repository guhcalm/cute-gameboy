import Container, { Button } from "./style"
import { useActionPad } from "../../hooks"

export default () => {
  const { className, clickDown, clickUp } = useActionPad()
  return (
    <Container className={className}>
      <Button onMouseDown={clickDown.Q} onMouseUp={clickUp.Q}>
        <span>Q</span>
      </Button>
      <Button onMouseDown={clickDown.E} onMouseUp={clickUp.E}>
        <span>E</span>
      </Button>
    </Container>
  )
}
