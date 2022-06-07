import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { hardwareStatusSelector } from "../../../../store/selectors"
import { StatusInterfaces } from "../../../../interfaces"
import Container from "./style"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

export default ({ children }: { children: ReactNode }) => {
  const status = useSelector(hardwareStatusSelector)
  const { ACTIVATE } = StatusInterfaces.StatusEnum
  return (
    <Container className={status === ACTIVATE ? "activate" : "inactivate"}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}
