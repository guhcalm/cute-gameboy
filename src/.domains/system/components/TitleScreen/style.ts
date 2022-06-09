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
    width: 200px;
    height: 200px;
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

export const Logo = styled.h1`
  z-index: 2;
  font-size: 40px;
  color: var(--on-primary);
`
const bolder = keyframes`
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
`

export const Info = styled.span`
  z-index: 2;
  font-size: 15px;
  font-weight: 900;
  color: var(--on-primary);
  max-width: 100%;
  font-style: italic;
  animation: ${bolder} 1.5s linear alternate infinite;
`

export const Footer = styled.span`
  z-index: 2;
  font-size: 12px;
  color: var(--on-primary);
  max-width: 100%;
`
