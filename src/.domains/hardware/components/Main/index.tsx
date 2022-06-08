import { ReactNode } from "react"
import { useHardwareContext } from "../../hooks"
import Container from "./style"

export default ({ children: MainContent }: { children: ReactNode }) => {
  const { className } = useHardwareContext()
  return <Container className={className}>{MainContent}</Container>
}
