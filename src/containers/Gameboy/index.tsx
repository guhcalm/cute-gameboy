import { ReactNode } from "react"
import { ThemesStyles } from "../../styles"
import Container from "./style"

export default ({ children }: { children: ReactNode }) => (
  <Container theme={ThemesStyles.Default}>{children}</Container>
)
