import { FC, ReactNode } from "react"
import combinedThemes from "../../styles/themes"
import Container from "./style"

const Gameboy: FC<{ children: ReactNode }> = ({ children }) => (
  <Container theme={combinedThemes[0]}>{children}</Container>
)

export default Gameboy
