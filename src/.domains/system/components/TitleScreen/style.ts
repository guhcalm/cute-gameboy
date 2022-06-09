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
