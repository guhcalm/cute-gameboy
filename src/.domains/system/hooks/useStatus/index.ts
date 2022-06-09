import { useEffect } from "react"
import { useSystemContext } from ".."

export default () => {
  const { system, enums, dispatch, actions } = useSystemContext()
  const { BOOT_SCREEN } = enums.pages
  const { INACTIVATE } = enums.status

  useEffect(() => {
    if (system.status === INACTIVATE)
      dispatch(actions.setCurrentPage(BOOT_SCREEN))
  }, [system.status])
}
