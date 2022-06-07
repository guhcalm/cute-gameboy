import { useDispatch } from "react-redux"
import { gameboySlice } from "../../store/reducers"
import { hardwareSlice, systemSlice, keyboardSlice } from "../../.domains"
import onClick from "./onClick"

export default () => {
  const dispatch = useDispatch()
  const { actions: keyboardActions } = keyboardSlice
  const { actions: hardwareActions } = hardwareSlice
  const { actions: systemActions } = systemSlice
  const { actions: gameboyActions } = gameboySlice
  // ON CLICK DOWN
  onClick(dispatch, {
    startupSwitcher: {
      keyboard: keyboardActions.clickStartupSwitcher,
      hardware: hardwareActions.clickStartupSwitcher,
      system: systemActions.clickStartupSwitcher,
      gameboy: gameboyActions.clickStartupSwitcher
    },
    directionalPad: {
      keyboard: keyboardActions.clickDirectionalPad,
      hardware: hardwareActions.clickDirectionalPad,
      system: systemActions.clickDirectionalPad,
      gameboy: gameboyActions.clickDirectionalPad
    },
    operationalPad: {
      keyboard: keyboardActions.clickOperationalPad,
      hardware: hardwareActions.clickOperationalPad,
      system: systemActions.clickOperationalPad,
      gameboy: gameboyActions.clickOperationalPad
    },
    actionPad: {
      keyboard: keyboardActions.clickActionPad,
      hardware: hardwareActions.clickActionPad,
      system: systemActions.clickActionPad,
      gameboy: gameboyActions.clickActionPad
    }
  })
  // ON CLICK UP
  onClick(dispatch, {
    startupSwitcher: {
      keyboard: keyboardActions.unclickStartupSwitcher,
      hardware: hardwareActions.unclickStartupSwitcher,
      system: systemActions.unclickStartupSwitcher,
      gameboy: gameboyActions.unclickStartupSwitcher
    },
    directionalPad: {
      keyboard: keyboardActions.unclickDirectionalPad,
      hardware: hardwareActions.unclickDirectionalPad,
      system: systemActions.unclickDirectionalPad,
      gameboy: gameboyActions.unclickDirectionalPad
    },
    operationalPad: {
      keyboard: keyboardActions.unclickOperationalPad,
      hardware: hardwareActions.unclickOperationalPad,
      system: systemActions.unclickOperationalPad,
      gameboy: gameboyActions.unclickOperationalPad
    },
    actionPad: {
      keyboard: keyboardActions.unclickActionPad,
      hardware: hardwareActions.unclickActionPad,
      system: systemActions.unclickActionPad,
      gameboy: gameboyActions.unclickActionPad
    }
  })
}
