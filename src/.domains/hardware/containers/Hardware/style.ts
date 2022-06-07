import styled from "styled-components"

export default styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  will-change: width, height;
  transition: 0.5s width, 0.5s height;
  &.inactivate {
    height: 490px;
    width: ${490 * 0.58}px;
  }
  &.activate {
    height: 100vh;
    width: 100vw;
  }
`
