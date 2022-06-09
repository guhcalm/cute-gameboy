import { useStatus, useSystemContext } from "./hooks"
import { System } from "./containers"
import { CuteFace } from "./components"

const SystemApp = () => {
  useStatus()
  const { system, enums } = useSystemContext()
  return system.status === enums.status.ACTIVATE ? <System /> : <CuteFace />
}

export default SystemApp
