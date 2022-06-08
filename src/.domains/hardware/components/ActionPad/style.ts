import styled from "styled-components"

export default styled.div`
  --diameter: 110px;
  height: var(--diameter);
  width: var(--diameter);
  position: absolute;
  right: 20px;
  transform: rotate(-30deg);
  display: flex;
  justify-content: space-between;
  align-items: center;

  will-change: top;
  transition: top 0.5s;
  &.inactivate {
    top: calc(46% + 18px);
  }
  &.activate {
    top: calc(46% + 18px);
    @media screen and (min-width: 700px) {
      top: calc(60% + 28px);
    }
  }
  button {
    cursor: pointer;
  }
`

export const Button = styled.button`
  user-select: none;
  --diameter: 50px;
  height: var(--diameter);
  width: var(--diameter);
  background-color: var(--quaternary);
  border-radius: 50%;
  box-shadow: inset 0 0 0 0.7px var(--quaternary),
    inset 0 0 0 1.4px var(--quaternary-on-dark),
    inset 0 0 2px 2px var(--quaternary-on-light),
    inset 0 -15px 8px -8px var(--quaternary-on-dark),
    inset 0 15px 8px -8px var(--quaternary-on-light),
    1px 1px 4px rgba(0, 0, 0, 1);
  &:hover,
  &:focus,
  &:active,
  &.pressed {
    text-shadow: none;
    box-shadow: inset 0 0 0 0.7px var(--quaternary),
      inset 0 0 0 1.4px var(--quaternary-on-dark),
      inset 0 0 2px 2px var(--quaternary-on-light);
  }

  span {
    display: block;
    transform: rotate(30deg);
    color: var(--quaternary-on-dark);
    font-weight: 900;
    font-size: 17px;
    text-shadow: 0 0 2px var(--quaternary-on-light),
      0 1px 2px var(--quaternary-on-light);
  }
`
