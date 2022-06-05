import { FC } from "react"
import MyGlobalStyles from "./styles/global"
import combinedThemes from "./styles/themes"

const MyApp: FC = () => {
  return <MyGlobalStyles theme={combinedThemes[0]} />
}

export default MyApp
