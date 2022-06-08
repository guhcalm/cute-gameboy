import Container, { Middler, Session, Button } from "./style"
import { useHardwareContext } from "../../hooks"

export default () => {
  const { className, inverseClass, dispatch, actions } = useHardwareContext()
  const clickDown = () => dispatch(actions.activateStatus())
  const clickUp = () => dispatch(actions.inactivateStatus())
  return (
    <Container className={className}>
      <Middler>
        <Session>
          <Button className={inverseClass} onClick={clickUp}>
            OFF
          </Button>
          •
          <Button className={className} onClick={clickDown}>
            ON
          </Button>
        </Session>
      </Middler>
    </Container>
  )
}
