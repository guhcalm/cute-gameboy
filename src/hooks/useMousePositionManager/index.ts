import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

export default () => {
  const dispatch = useDispatch()
  const mousePosition = useSelector(
    (state) => state.domains.mouse.mousePosition
  )
  useEffect(() => {
    dispatch(MouseActions.setMousePosition(mousePosition))
  }, [mousePosition])
}
