import { FC, ReactNode } from "react"
import { Provider } from "react-redux"
import myStore from ".."

const MyStoreProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={myStore}>{children}</Provider>
)

export default MyStoreProvider
