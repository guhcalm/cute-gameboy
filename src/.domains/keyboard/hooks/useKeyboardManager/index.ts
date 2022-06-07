import { useEffect } from "react"
import { useDispatch } from "react-redux"
import * as onClick from "./onClick"

export const useKeyboardListener = () => {
  const dispatch = useDispatch()
  const handlerClick = ({ keyCode }: { keyCode: number }) =>
    onClick.clickDown(keyCode, dispatch)
  const handlerUnclick = ({ keyCode }: { keyCode: number }) =>
    onClick.clickUp(keyCode, dispatch)

  useEffect(() => {
    window.addEventListener("keydown", handlerClick)
    window.addEventListener("keyup", handlerUnclick)
    return () => {
      window.removeEventListener("keydown", handlerClick)
      window.removeEventListener("keyup", handlerUnclick)
    }
  }, [])
}
