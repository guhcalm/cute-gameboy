import styled from "styled-components"

export default styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--secondary);
  border-radius: 10px;
  border-bottom-right-radius: 50px;
  box-shadow: -1px -1px 2px var(--primary-on-dark),
    1px 1px 1px var(--primary-on-light);

  will-change: height;
  transition: 0.5s height;
  &.inactivate {
    height: 42%;
  }

  &.activate {
    height: 42%;
    @media screen and (min-width: 700px) {
      height: 60%;
    }
  }
`
