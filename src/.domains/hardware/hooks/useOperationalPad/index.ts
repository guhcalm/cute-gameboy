import { useHardwareContext } from ".."

export default () => {
  const { dispatch, actions, enumn } = useHardwareContext()
  const { SELECT, START } = enumn.operationalPad
  return {
    clickDown: {
      select: () => dispatch(actions.clickOperationalPad(SELECT)),
      start: () => dispatch(actions.clickOperationalPad(START))
    },
    clickUp: {
      select: () => dispatch(actions.unclickOperationalPad(SELECT)),
      start: () => dispatch(actions.unclickOperationalPad(START))
    }
  }
}
