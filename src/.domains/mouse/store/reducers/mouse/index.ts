import { createSlice } from "@reduxjs/toolkit"
import { MouseInterfaces } from "../../../../../interfaces"

const initialState: MouseInterfaces.MouseInterface = {
  position: {
    x: 0,
    y: 0
  }
}

export default createSlice({
  name: "mouse",
  initialState,
  reducers: {
    setMousePosition(
      state: MouseInterfaces.MouseInterface,
      { payload: mouse }: { payload: MouseInterfaces.MouseInterface }
    ) {
      state.position = { ...mouse.position }
    }
  }
})
