import Container, { Button } from "./style"
import { useActionPad } from "../../hooks"

export default () => {
  const { className, clickDown, clickUp, actionPad } = useActionPad()
  return (
    <Container className={className}>
      <Button
        onMouseDown={clickDown.Q}
        onMouseUp={clickUp.Q}
        className={actionPad.q}
      >
        <span>Q</span>
      </Button>
      <Button
        onMouseDown={clickDown.E}
        onMouseUp={clickUp.E}
        className={actionPad.e}
      >
        <span>E</span>
      </Button>
    </Container>
  )
}
