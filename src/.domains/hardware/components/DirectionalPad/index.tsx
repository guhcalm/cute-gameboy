import Container, { Left, Right, Up, Down, Center } from "./style"
import { useDirectionalPad } from "../../hooks"

export default () => {
  const { className, clickDown, clickUp, directionalPad } = useDirectionalPad()
  return (
    <Container className={className}>
      <Left
        onMouseDown={clickDown.left}
        onMouseUp={clickUp.left}
        className={directionalPad.left}
      />
      <Up
        onMouseDown={clickDown.up}
        onMouseUp={clickUp.up}
        className={directionalPad.up}
      />
      <Right
        onMouseDown={clickDown.right}
        onMouseUp={clickUp.right}
        className={directionalPad.right}
      />
      <Down
        onMouseDown={clickDown.down}
        onMouseUp={clickUp.down}
        className={directionalPad.down}
      />
      <Center />
    </Container>
  )
}
