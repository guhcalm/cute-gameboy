import { configureStore } from "@reduxjs/toolkit"
import { gameboySlice, domains } from "./reducers"

export default configureStore({
  reducer: {
    gameboy: gameboySlice.reducer,
    domains
  }
})

export { default as GameboyStoreProvider } from "./provider"
