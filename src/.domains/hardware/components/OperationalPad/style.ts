import styled from "styled-components"

export default styled.div`
  position: absolute;
  left: 50%;
  bottom: 18%;
  transform: translate(-50%, 50%);
  display: flex;
  gap: 5px;
`

export const Button = styled.div`
  position: relative;
  height: 12px;
  width: 45px;
  transform: rotate(-30deg);

  button {
    background-color: var(--secondary-on-dark);
    width: 100%;
    height: 100%;
    border-radius: 6px;
    box-shadow: inset 0 0 0 0.7px var(--secondary),
      inset 0 0 0 1.4px var(--secondary-on-dark),
      inset 0 0 2px 2px var(--secondary-on-light),
      inset 0px -5px 5px -5px var(--secondary-on-dark),
      inset 0px 5px 5px -5px var(--secondary-on-light),
      1px 1px 3px rgba(0, 0, 0, 0.4);
    &:hover,
    &:focus,
    &:active,
    &.pressed {
      box-shadow: inset 0 0 0 0.7px var(--secondary),
        inset 0 0 0 1.4px var(--secondary-on-dark),
        inset 0 0 2px 2px var(--secondary-on-light);
    }
  }

  span {
    position: absolute;
    display: block;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, calc(100% + 8px));
    font-size: 8px;
    font-weight: 900;
    color: var(--quinary);
  }
`
