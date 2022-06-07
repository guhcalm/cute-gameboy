import { useDispatch } from "react-redux"
import Container, { Button } from "./style"
import { hardwareSlice } from "../../store/reducers"
export default () => {
  const dispatch = useDispatch()
  const { actions } = hardwareSlice
  const clickDown = () => dispatch(actions.clickStartupSwitcher())
  const clickUp = () => dispatch(actions.unclickStartupSwitcher())
  return (
    <Container>
      <Button>
        <button></button>
        <span>SELECT</span>
      </Button>
      <Button>
        <button onMouseDown={clickDown} onMouseUp={clickUp}></button>
        <span>START</span>
      </Button>
    </Container>
  )
}
