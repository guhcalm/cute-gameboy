import styled, { keyframes } from "styled-components"

const clip = keyframes`
  from {
    clip-path: circle(0px at 100% 100%);
  }
  to {
    clip-path: circle(300% at 100% 100%);
  }
`

export default styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  animation: ${clip} 2s ease-in;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  div {
    --dimension: ${window.innerWidth * 0.6}px;
    width: var(--dimension);
    height: var(--dimension);
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(50px);
  }
`

export const Blue = styled.div`
  top: 20%;
  left: 80%;
  background-color: var(--quinary);
`

export const Red = styled.div`
  top: 50%;
  left: 20%;
  background-color: var(--quaternary);
`

export const Orange = styled.div`
  top: 80%;
  left: 80%;
  background-color: var(--terciary);
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
`
