import { combineReducers } from "@reduxjs/toolkit"
import { keyboardSlice, hardwareSlice, systemSlice } from "../../../.domains"

export default combineReducers({
  keyboard: keyboardSlice.reducer,
  hardware: hardwareSlice.reducer,
  system: systemSlice.reducer
})
