import { useEffect } from "react"
import { useSystemContext } from "../../hooks"
import Container, { Logo } from "./style"

export default () => {
  const { dispatch, actions, enums } = useSystemContext()
  const { TITLE_SCREEN } = enums.pages

  useEffect(() => {
    const time = setInterval(() => {
      dispatch(actions.setCurrentPage(TITLE_SCREEN))
    }, 6000)
    return () => clearInterval(time)
  })

  return (
    <Container>
      <Logo>Nitendo®</Logo>
    </Container>
  )
}
