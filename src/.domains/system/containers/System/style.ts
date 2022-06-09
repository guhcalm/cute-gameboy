import styled, { keyframes } from "styled-components"

const wakeUp = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

const light = keyframes`
  0% { background-position: 0 0 }
  25% { background-position: 0 100% }
  50% { background-position: 100% 100% }
  75% { background-position: 0% 100% }
  100% { background-position: 0% 0% }
`

const bright = keyframes`
  0% { box-shadow: inset 0 0 0px .3px var(--primary-on-light), inset 0 0 10px 3px var(--primary-on-dark), 0 0 2px var(--primary-on-light); }
  100% { box-shadow: inset 0 0 0px .5px var(--primary-on-light), inset 0 0 10px 3px var(--primary-on-dark), 0 0 5px var(--primary-on-light); }
`

export default styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  animation: ${wakeUp} 2s ease-out;
  &::before,
  &::after {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  &::before {
    background: linear-gradient(
      -60deg,
      var(--primary-on-light),
      var(--primary)
    );
    animation: ${light} 12s linear alternate infinite;
  }
  &::after {
    animation: ${bright} 2s ease-out alternate infinite;
  }
`
