import Container, { Left, Right, Up, Down, Center } from "./style"
import { useDirectionalPad } from "../../hooks"

export default () => {
  const { className, clickDown, clickUp } = useDirectionalPad()
  return (
    <Container className={className}>
      <Left onMouseDown={clickDown.left} onMouseUp={clickUp.left} />
      <Up onMouseDown={clickDown.up} onMouseUp={clickUp.up} />
      <Right onMouseDown={clickDown.right} onMouseUp={clickUp.right} />
      <Down onMouseDown={clickDown.down} onMouseUp={clickUp.down} />
      <Center />
    </Container>
  )
}
