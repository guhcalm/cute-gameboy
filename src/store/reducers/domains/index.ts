import { combineReducers } from "@reduxjs/toolkit"
import { keyboardSlice, mouseSlice } from "../../../.domains"

export default combineReducers({
  mouse: mouseSlice.reducer,
  keyboard: keyboardSlice.reducer
})
