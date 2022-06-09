import { useSelector } from "react-redux"
import { StatusInterfaces } from "../../interfaces"
import { systemStatusSelector } from "../../store/selectors"
import { System } from "./containers"
import { CuteFace } from "./components"
import { useStatus } from "./hooks"

const SystemApp = () => {
  //useStatus()
  const status = useSelector(systemStatusSelector)
  return status === StatusInterfaces.StatusEnum.ACTIVATE ? (
    <System />
  ) : (
    <CuteFace />
  )
}

export default SystemApp
