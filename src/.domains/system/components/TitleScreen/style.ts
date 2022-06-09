import styled, { keyframes } from "styled-components"

const wakeUp = keyframes`
from {visibility: hidden}
to {visibility: visible}
`

export default styled.div`
  animation: ${wakeUp} 4s;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  div {
    width: 100px;
    height: 100px;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  &::after {
    content: "";
    display: block;
    backdrop-filter: blur(20px);
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
  top: 50%;
  left: 20%;
  background-color: var(--terciary);
`

export const Logo = styled.h1`
  font-size: 40px;
  color: var(--on-primary);
`
export const Info = styled.span`
  font-size: 20px;
  color: var(--on-primary);
  max-width: 100%;
`

export const Footer = styled.span`
  font-size: 15px;
  color: var(--on-primary);
  max-width: 100%;
`
