import { useSelector } from "react-redux"
import { Gameboy } from "./containers"
import { MouseApp, KeyboardApp } from "./.domains"
import * as hooks from "./hooks"
import { GlobalInterfaces } from "./interfaces"

const GameboyApp = () => {
  MouseApp()
  KeyboardApp()

  hooks.useMousePosition()
  // useStatus()
  // useKeypad()

  const state = useSelector(
    (store: GlobalInterfaces.GlobalInterface) => store.gameboy.mouse.position
  )
  console.log(state)

  return <Gameboy>Hello World</Gameboy>
}

export default GameboyApp
