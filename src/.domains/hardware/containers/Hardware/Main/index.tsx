import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { hardwareStatusSelector } from "../../../../../store/selectors"
import Container from "./style"

export default ({ children }: { children: ReactNode }) => {
  const status = useSelector(hardwareStatusSelector)
  return (
    <Container className={status ? "activate" : "inactivate"}>
      {children}
    </Container>
  )
}
