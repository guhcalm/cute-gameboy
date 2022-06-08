import { ReactNode } from "react"
import Container from "./style"

export default ({ children: System }: { children: ReactNode }) => (
  <Container>{System}</Container>
)
