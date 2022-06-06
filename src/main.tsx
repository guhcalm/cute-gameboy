import { createRoot as gameboyRoot } from "react-dom/client"
import { GameboyStoreProvider } from "./store"
import { GameboyGlobalStyles } from "./styles"
import GameboyApp from "./_app"

gameboyRoot(document.querySelector("#root") as HTMLElement).render(
  <GameboyStoreProvider>
    <GameboyGlobalStyles />
    <GameboyApp />
  </GameboyStoreProvider>
)
