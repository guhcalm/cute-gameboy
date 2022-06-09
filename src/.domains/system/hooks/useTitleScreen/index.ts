import { useEffect } from "react"
import { useSystemContext } from ".."

export default () => {
  const { dispatch, system, actions, enums } = useSystemContext()
  const { ACTIVATE } = enums.status
  const { LOGIN } = enums.pages
  const { start } = system.keypad.operationalPad

  useEffect(() => {
    if (start === ACTIVATE) dispatch(actions.setCurrentPage(LOGIN))
  }, [start])
}
