import styled, { keyframes } from "styled-components"

const light = keyframes`
  0% { background-position: 0 0 }
  25% { background-position: 0 100% }
  50% { background-position: 100% 100% }
  75% { background-position: 0% 100% }
  100% { background-position: 0% 0% }
`

export default styled.div`
  position: relative;
  height: calc(100% - 50px);
  width: calc(100% - 100px);
  max-height: calc(100% - 50px);
  max-width: calc(100% - 100px);
  background-color: var(--terciary);
  box-shadow: inset 0 0 10px 3px var(--terciary-on-dark);
  background: linear-gradient(
    -60deg,
    var(--terciary-on-light),
    var(--terciary)
  );
  animation: ${light} 12s linear alternate infinite;
  background-size: 300%;
`
