import { useHardwareContext } from "../../hooks"
import Container from "./style"

export default () => {
  const { className } = useHardwareContext()
  return (
    <Container className={className}>
      <span>Battery</span>
    </Container>
  )
}
