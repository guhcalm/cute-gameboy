import { useEffect } from "react"
import { useSelector } from "react-redux"
import {
  StatusInterfaces as SI,
  KeypadInterfaces as KI
} from "../../interfaces"
import {
  hardwareKeypadSelector,
  keyboardSelector,
  systemKeypadSelector
} from "../../store/selectors"

export default (dispatch, actions) => {
  const { startupSwitcher, directionalPad, operationalPad, actionPad } = actions
  const keyboard = useSelector(keyboardSelector)
  const hardwareKeypad = useSelector(hardwareKeypadSelector)
  const systemKeypad = useSelector(systemKeypadSelector)
  // startup switcher
  useEffect(() => {
    if (
      keyboard.startupSwitcher === SI.StatusEnum.ACTIVATE ||
      hardwareKeypad.startupSwitcher === SI.StatusEnum.ACTIVATE ||
      systemKeypad.startupSwitcher === SI.StatusEnum.ACTIVATE
    ) {
      dispatch(startupSwitcher.keyboard())
      dispatch(startupSwitcher.hardware())
      dispatch(startupSwitcher.system())
      dispatch(startupSwitcher.gameboy())
    }
  }, [
    keyboard.startupSwitcher,
    hardwareKeypad.startupSwitcher,
    systemKeypad.startupSwitcher
  ])
  // directional pad
  useEffect(() => {
    if (
      keyboard.directionalPad.left === SI.StatusEnum.ACTIVATE ||
      hardwareKeypad.directionalPad.left === SI.StatusEnum.ACTIVATE
    ) {
      dispatch(directionalPad.keyboard(KI.DirectionalPadEnum.LEFT))
      dispatch(directionalPad.hardware(KI.DirectionalPadEnum.LEFT))
      dispatch(directionalPad.system(KI.DirectionalPadEnum.LEFT))
      dispatch(directionalPad.gameboy(KI.DirectionalPadEnum.LEFT))
    }
    if (
      keyboard.directionalPad.right === SI.StatusEnum.ACTIVATE ||
      hardwareKeypad.directionalPad.right === SI.StatusEnum.ACTIVATE
    ) {
      dispatch(directionalPad.keyboard(KI.DirectionalPadEnum.RIGHT))
      dispatch(directionalPad.hardware(KI.DirectionalPadEnum.RIGHT))
      dispatch(directionalPad.system(KI.DirectionalPadEnum.RIGHT))
      dispatch(directionalPad.gameboy(KI.DirectionalPadEnum.RIGHT))
    }
    if (
      keyboard.directionalPad.up === SI.StatusEnum.ACTIVATE ||
      hardwareKeypad.directionalPad.up === SI.StatusEnum.ACTIVATE
    ) {
      dispatch(directionalPad.keyboard(KI.DirectionalPadEnum.UP))
      dispatch(directionalPad.hardware(KI.DirectionalPadEnum.UP))
      dispatch(directionalPad.system(KI.DirectionalPadEnum.UP))
      dispatch(directionalPad.gameboy(KI.DirectionalPadEnum.UP))
    }
    if (
      keyboard.directionalPad.down === SI.StatusEnum.ACTIVATE ||
      hardwareKeypad.directionalPad.down === SI.StatusEnum.ACTIVATE
    ) {
      dispatch(directionalPad.keyboard(KI.DirectionalPadEnum.DOWN))
      dispatch(directionalPad.hardware(KI.DirectionalPadEnum.DOWN))
      dispatch(directionalPad.system(KI.DirectionalPadEnum.DOWN))
      dispatch(directionalPad.gameboy(KI.DirectionalPadEnum.DOWN))
    }
  }, [keyboard.directionalPad, hardwareKeypad.directionalPad])
  // operational pad
  useEffect(() => {
    if (
      keyboard.operationalPad.select === SI.StatusEnum.ACTIVATE ||
      hardwareKeypad.operationalPad.select === SI.StatusEnum.ACTIVATE
    ) {
      dispatch(operationalPad.keyboard(KI.OperationalPadEnum.SELECT))
      dispatch(operationalPad.hardware(KI.OperationalPadEnum.SELECT))
      dispatch(operationalPad.system(KI.OperationalPadEnum.SELECT))
      dispatch(operationalPad.gameboy(KI.OperationalPadEnum.SELECT))
    }
    if (
      keyboard.operationalPad.start === SI.StatusEnum.ACTIVATE ||
      hardwareKeypad.operationalPad.start === SI.StatusEnum.ACTIVATE
    ) {
      dispatch(operationalPad.keyboard(KI.OperationalPadEnum.START))
      dispatch(operationalPad.hardware(KI.OperationalPadEnum.START))
      dispatch(operationalPad.system(KI.OperationalPadEnum.START))
      dispatch(operationalPad.gameboy(KI.OperationalPadEnum.START))
    }
  }, [keyboard.operationalPad, hardwareKeypad.operationalPad])
  // action pad
  useEffect(() => {
    if (
      keyboard.actionPad.q === SI.StatusEnum.ACTIVATE ||
      hardwareKeypad.actionPad.q === SI.StatusEnum.ACTIVATE
    ) {
      dispatch(actionPad.keyboard(KI.ActionPadEnum.Q))
      dispatch(actionPad.hardware(KI.ActionPadEnum.Q))
      dispatch(actionPad.system(KI.ActionPadEnum.Q))
      dispatch(actionPad.gameboy(KI.ActionPadEnum.Q))
    }
    if (
      keyboard.actionPad.e === SI.StatusEnum.ACTIVATE ||
      hardwareKeypad.actionPad.e === SI.StatusEnum.ACTIVATE
    ) {
      dispatch(actionPad.keyboard(KI.ActionPadEnum.E))
      dispatch(actionPad.hardware(KI.ActionPadEnum.E))
      dispatch(actionPad.system(KI.ActionPadEnum.E))
      dispatch(actionPad.gameboy(KI.ActionPadEnum.E))
    }
  }, [keyboard.actionPad, hardwareKeypad.actionPad])
}
