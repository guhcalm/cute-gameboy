import { useHardwareContext } from ".."

export default () => {
  const { className, dispatch, actions, enumn, keypad } = useHardwareContext()
  const { SELECT, START } = enumn.operationalPad
  return {
    className,
    operationalPad: keypad.operationalPad,
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
