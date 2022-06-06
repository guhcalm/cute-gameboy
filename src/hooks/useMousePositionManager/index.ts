import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GlobalInterfaces } from "../../interfaces"
import { gameboySlice } from "../../store/reducers"

export default () => {
  const dispatch = useDispatch()
  const { actions: gameboyActions } = gameboySlice
  const mousePosition = useSelector(
    (state: GlobalInterfaces.GlobalInterface) => state.domains.mouse
  )
  useEffect(() => {
    dispatch(gameboyActions.setMousePosition(mousePosition))
  }, [mousePosition])
}
