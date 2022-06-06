import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { mouseSlice } from "../../store/reducers"

export default () => {
  const dispatch = useDispatch()
  const { actions } = mouseSlice
  const onMouseMove = (e) => {
    dispatch(actions.setMousePosition({ position: { x: e.x, y: e.y } }))
  }
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])
}
