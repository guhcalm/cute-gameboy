import { ReactNode } from "react"
import { Provider } from "react-redux"
import gameboyStore from ".."

export default ({ children: GameboyApp }: { children: ReactNode }) => {
  return <Provider store={gameboyStore}>{GameboyApp}</Provider>
}
