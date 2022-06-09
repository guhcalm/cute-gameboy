import { useEffect } from "react"
import { useSystemContext } from "../../hooks"
import Container from "./style"

export default () => {
  const { dispatch, actions, enums } = useSystemContext()
  const { TITLE_SCREEN } = enums.pages

  return <Container></Container>
}
