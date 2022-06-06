import { ReactNode } from "react"
import { Provider } from "react-redux"
import gameboyStore from ".."

export default ({ children }: { children: ReactNode }) => {
  return <Provider store={gameboyStore}>{children}</Provider>
}
