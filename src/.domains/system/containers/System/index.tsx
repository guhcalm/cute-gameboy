import { BootScreen, TitleScreen, Login } from "../../components"
import Container from "./style"
import { useSystemContext } from "../../hooks"
import { ReactNode } from "react"

export default () => {
  const { system, enums } = useSystemContext()
  const { BOOT_SCREEN, TITLE_SCREEN, LOGIN } = enums.pages
  const { current } = system.pages

  let currentPage: ReactNode
  if (current === BOOT_SCREEN) currentPage = <BootScreen />
  if (current === TITLE_SCREEN) currentPage = <TitleScreen />
  if (current === LOGIN) currentPage = <Login />

  return <Container>{currentPage}</Container>
}
