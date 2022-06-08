import { ReactNode } from "react"
import Container from "./style"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { useHardwareContext } from "../../hooks"

export default ({ children: HardwareContent }: { children: ReactNode }) => {
  const { className } = useHardwareContext()
  return (
    <Container className={className}>
      <Header />
      <Main>{HardwareContent}</Main>
      <Footer />
    </Container>
  )
}
