import styled from "styled-components"

export default styled.div`
  z-index: 1;
  position: absolute;
  font-size: 8px;
  height: 15px;
  width: 50px;
  color: var(--primary);
  background-color: var(--background);
  font-weight: 900;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 7.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0.5px 0.5px 1px var(--primary-on-dark);
  box-shadow: inset 0.5px 0.5px 2px var(--primary-on-dark),
    inset -0.5px -0.5px 2px var(--primary-on-light),
    inset 1px 1px 8px rgba(0, 0, 0, 0.4), inset 5px 5px 20px rgba(0, 0, 0, 0.4);
`
