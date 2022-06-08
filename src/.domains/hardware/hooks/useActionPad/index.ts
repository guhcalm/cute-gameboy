import useHardwareContext from "../useHardwareContext"

export default () => {
  const { className, dispatch, actions, enumn, keypad } = useHardwareContext()
  const { Q, E } = enumn.actionPad
  return {
    className,
    actionPad: keypad.actionPad,
    clickDown: {
      Q: () => dispatch(actions.clickActionPad(Q)),
      E: () => dispatch(actions.clickActionPad(E))
    },
    clickUp: {
      Q: () => dispatch(actions.unclickActionPad(Q)),
      E: () => dispatch(actions.unclickActionPad(E))
    }
  }
}
