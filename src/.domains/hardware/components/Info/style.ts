import styled from "styled-components"

export default styled.div`
  user-select: none;
  position: absolute;
  top: 12.5px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--on-secondary);
  &::before,
  &::after {
    content: "";
    display: block;
    flex-grow: 1;
    height: 8px;
    border-top: 2px solid var(--quaternary);
    border-bottom: 2px solid var(--quinary);
    margin: 5px;
  }
  span {
    font-size: 8px;
  }
`
