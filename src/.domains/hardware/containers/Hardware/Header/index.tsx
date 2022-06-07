import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { hardwareSlice } from "../../../store/reducers"
import { StatusInterfaces } from "../../../../../interfaces"
import { hardwareStatusSelector } from "../../../../../store/selectors"
import Container, { Middler, Session, Button } from "./style"

export default () => {
  const status = useSelector(hardwareStatusSelector)
  const { ACTIVATE, INACTIVATE } = StatusInterfaces.StatusEnum
  const dispatch = useDispatch()
  const { actions } = hardwareSlice
  const clickDown = () => dispatch(actions.clickStartupSwitcher())
  const clickUp = () => dispatch(actions.unclickStartupSwitcher())
  return (
    <Container className={status === ACTIVATE ? "activate" : "inactivate"}>
      <Middler>
        <Session>
          <Button
            onMouseDown={clickDown}
            onMouseUp={clickUp}
            className={status === INACTIVATE ? "activate" : "inactivate"}
          >
            OFF
          </Button>
          •
          <Button
            onMouseDown={clickDown}
            onMouseUp={clickUp}
            className={status === ACTIVATE ? "activate" : "inactivate"}
          >
            ON
          </Button>
        </Session>
      </Middler>
    </Container>
  )
}
