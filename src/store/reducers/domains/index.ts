import { combineReducers } from "@reduxjs/toolkit"
import {
  keyboardSlice,
  mouseSlice,
  hardwareSlice,
  systemSlice
} from "../../../.domains"

export default combineReducers({
  mouse: mouseSlice.reducer,
  keyboard: keyboardSlice.reducer,
  hardware: hardwareSlice.reducer,
  system: systemSlice.reducer
})
