import { createRoot as myRoot } from "react-dom/client"
import GameboyApp from "./_app"

myRoot(document.querySelector("#root") as HTMLElement).render(<GameboyApp />)
