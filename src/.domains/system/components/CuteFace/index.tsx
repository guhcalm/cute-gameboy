import { useEffect, useRef, useState } from "react"
import Container, { Face, Mounth } from "./style"

const onMouseMove = (e, setMousePos) => setMousePos(() => ({ x: e.x, y: e.y }))
const VEL = 0.6

export default () => {
  const faceRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 50, y: 75 })
  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  })

  useEffect(() => {
    const handlerMouse = (e) => onMouseMove(e, setMousePos)
    window.addEventListener("pointermove", handlerMouse)
    return () => window.removeEventListener("pointermove", handlerMouse)
  }, [])

  useEffect(() => {
    const boxPos = faceRef.current?.getBoundingClientRect()
    if (boxPos) {
      const facePos = {
        x: boxPos.x + boxPos.width / 2,
        y: boxPos.y + boxPos.height / 2
      }
      const distVector = {
        x: -facePos.x + mousePos.x,
        y: -facePos.y + mousePos.y
      }
      const distModule = Math.sqrt(distVector.x ** 2 + distVector.y ** 2)
      const directionVector = {
        x: distVector.x / distModule,
        y: distVector.y / distModule
      }
      const vel = { x: directionVector.x * VEL, y: directionVector.y * VEL }

      setPos((current) => {
        const newPos = { x: current.x + vel.x, y: current.y + vel.y }
        if (newPos.x > 60 || newPos.x < 40) newPos.x = current.x
        if (newPos.y > 75 || newPos.y < 25) newPos.y = current.y

        return newPos
      })
    }
  }, [pos])

  return (
    <Container>
      <Face ref={faceRef} style={{ left: `${pos.x}%`, top: `${pos.y}%` }}>
        <Mounth />
      </Face>
    </Container>
  )
}
