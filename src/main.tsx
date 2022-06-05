import { createRoot as myRoot } from "react-dom/client"
import MyStoreProvider from "./store/provider"
import MyApp from "./_app"

myRoot(document.querySelector("#root") as HTMLElement).render(
  <MyStoreProvider>
    <MyApp />
  </MyStoreProvider>
)
