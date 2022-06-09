import { ReactNode } from "react"
import { useStatus, useSystemContext } from "../../hooks"
import { BootScreen, TitleScreen, Login } from "../../components"
import { Startup } from ".."
import Container from "./style"

export default () => {
  const { system, enums } = useSystemContext()
  const { BOOT_SCREEN, TITLE_SCREEN, LOGIN } = enums.pages
  const { current } = system.pages
  let currentPage: ReactNode

  if (current === BOOT_SCREEN) currentPage = <BootScreen />
  if (current === TITLE_SCREEN)
    currentPage = (
      <Startup>
        <TitleScreen />
      </Startup>
    )
  if (current === LOGIN)
    currentPage = (
      <Startup>
        <Login />
      </Startup>
    )

  return <Container>{currentPage}</Container>
}
