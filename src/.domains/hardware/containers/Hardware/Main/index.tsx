import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { StatusInterfaces } from "../../../../../interfaces"
import { hardwareStatusSelector } from "../../../../../store/selectors"
import Container from "./style"

export default ({ children }: { children: ReactNode }) => {
  const status = useSelector(hardwareStatusSelector)
  const { ACTIVATE } = StatusInterfaces.StatusEnum
  return (
    <Container className={status === ACTIVATE ? "activate" : "inactivate"}>
      {children}
    </Container>
  )
}
