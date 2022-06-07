import { useRef } from "react"
import Container, { Face, Mounth } from "./style"

export default () => {
  const faceRef = useRef<HTMLDivElement>(null)

  console.log(faceRef.current?.getBoundingClientRect())
  return (
    <Container>
      <Face ref={faceRef}>
        <Mounth />
      </Face>
    </Container>
  )
}
