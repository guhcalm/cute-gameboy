import { useSelector } from "react-redux"
import { Gameboy } from "./containers"
import { MouseApp, KeyboardApp } from "./.domains"
import {
  useKeypadManager,
  useMousePositionManager,
  useStatusManager
} from "./hooks"
import { GlobalInterfaces } from "./interfaces"

const GameboyApp = () => {
  MouseApp()
  KeyboardApp()

  // useStatusManager()
  useMousePositionManager()
  // useKeypadManager()

  const state = useSelector(
    (store: GlobalInterfaces.GlobalInterface) => store.gameboy.mouse.position
  )
  console.log(state)

  return <Gameboy>Hello World</Gameboy>
}

export default GameboyApp
