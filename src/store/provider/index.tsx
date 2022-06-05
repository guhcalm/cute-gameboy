import { FC, ReactNode } from "react"
import { Provider } from "react-redux"
import gameboyStore from ".."

const GameboyStoreProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={gameboyStore}>{children}</Provider>
)

export default GameboyStoreProvider
