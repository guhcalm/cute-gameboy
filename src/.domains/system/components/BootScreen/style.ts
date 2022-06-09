import styled, { keyframes } from "styled-components"

export default styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  overflow: hidden;
  visibility: hidden;
`

const wakeUp = keyframes`
 0% {
    top: 0%;
    transform: translate(-50%, -100%);
    visibility: visible;
 }
 50% {
    top: 50%;
    transform: translate(-50%, -50%);
    visibility: visible;
    opacity: 1;
 }
 100% {
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
 }
`

export const Logo = styled.span`
  display: block;
  position: absolute;
  font-size: 40px;
  color: var(--quinary);
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${wakeUp} 4s linear;
  animation-delay: 2s;
`
