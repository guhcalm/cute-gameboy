import Container, { Middler, Session, Button } from "./style"
import { useHardwareContext } from "../../hooks"

export default () => {
  const { className, inverseClass, dispatch, actions } = useHardwareContext()
  const clickDown = () => dispatch(actions.clickStartupSwitcher())
  const clickUp = () => dispatch(actions.unclickStartupSwitcher())
  return (
    <Container className={className}>
      <Middler>
        <Session onMouseDown={clickDown} onMouseUp={clickUp}>
          <Button className={inverseClass}>OFF</Button>•
          <Button className={className}>ON</Button>
        </Session>
      </Middler>
    </Container>
  )
}
