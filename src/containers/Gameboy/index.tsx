import { ReactNode } from "react"
import { Themes } from "../../styles"
import Container from "./style"

export default ({ children }: { children: ReactNode }) => (
  <Container theme={Themes.Default}>{children}</Container>
)
