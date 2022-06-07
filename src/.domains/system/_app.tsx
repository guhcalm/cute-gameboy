import { useSelector } from "react-redux"
import { StatusInterfaces } from "../../interfaces"
import { systemStatusSelector } from "../../store/selectors"
import { System, CuteFace } from "./containers"

const SystemApp = () => {
  const status = useSelector(systemStatusSelector)
  return status === StatusInterfaces.StatusEnum.ACTIVATE 
  ? <System />
  : <CuteFace />
}

export default SystemApp
