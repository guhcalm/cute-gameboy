import { useHardwareContext } from ".."

export default () => {
  const { className, dispatch, actions, enumn, keypad } = useHardwareContext()
  const { LEFT, RIGHT, UP, DOWN } = enumn.directionalPad
  return {
    className,
    directionalPad: keypad.directionalPad,
    clickDown: {
      left: () => dispatch(actions.clickDirectionalPad(LEFT)),
      right: () => dispatch(actions.clickDirectionalPad(RIGHT)),
      up: () => dispatch(actions.clickDirectionalPad(UP)),
      down: () => dispatch(actions.clickDirectionalPad(DOWN))
    },
    clickUp: {
      left: () => dispatch(actions.unclickDirectionalPad(LEFT)),
      right: () => dispatch(actions.unclickDirectionalPad(RIGHT)),
      up: () => dispatch(actions.unclickDirectionalPad(UP)),
      down: () => dispatch(actions.unclickDirectionalPad(DOWN))
    }
  }
}
