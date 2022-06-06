import { ReactNode } from "react"
import * as Themes from "../../styles/themes"
import Container from "./style"

export default ({ children }: { children: ReactNode }) => (
  <Container theme={Themes.Default}>{children}</Container>
)
