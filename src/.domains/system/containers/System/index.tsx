import { ReactNode } from "react"
import { useSystemContext } from "../../hooks"
import { BootScreen, TitleScreen, Login } from "../../components"
import { Startup } from ".."
import Container from "./style"

export default () => {
  const { system, enums } = useSystemContext()
  const { BOOT_SCREEN, TITLE_SCREEN } = enums.pages
  const { current } = system.pages
  let currentPage: ReactNode

  if (current === BOOT_SCREEN) currentPage = <BootScreen />
  if (current === TITLE_SCREEN)
    currentPage = (
      <Startup>
        <TitleScreen />
      </Startup>
    )

  return <Container>{currentPage}</Container>
}
