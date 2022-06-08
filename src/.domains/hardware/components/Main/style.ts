import styled from "styled-components"

export default styled.div`
  z-index: 1;
  position: relative;
  overflow: hidden;
  padding: 20px 23px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--primary);
  box-shadow: inset -5px -5px 5px -5px var(--primary-on-dark),
    inset -20px -20px 20px -20px var(--primary-on-dark),
    8px 8px 8px rgba(0, 0, 0, 0.4), 20px 20px 30px rgba(0, 0, 0, 0.4),
    inset 8px 0px 8px -8px var(--primary-on-light),
    inset 20px 0px 20px -20px var(--primary-on-light);
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--primary-on-light);
    width: 65%;
    height: 75%;
    border-radius: 50% / 15px;
    filter: blur(10px);
    opacity: 0.1;
  }

  will-change: border-radius, width, height;
  transition: 0.2s border-radius;
  &.inactivate {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 70px;
  }
  &.activate {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`
