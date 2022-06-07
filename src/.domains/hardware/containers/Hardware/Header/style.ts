import styled from "styled-components"

export default styled.div`
  height: 25px;
  margin-bottom: 5px;
  gap: 5px;
  width: 100%;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before,
  &::after {
    will-change: border-radius;
    transition: 0.5s border-radius;
    content: "";
    display: block;
    background-color: var(--primary);
    width: 25px;
    height: 100%;
  }
  &::before {
    box-shadow: inset 5px 5px 5px -5px var(--primary-on-light),
      inset 20px 20px 20px -20px var(--primary-on-light),
      8px 8px 8px rgba(0, 0, 0, 0.4), 20px 20px 30px rgba(0, 0, 0, 0.4);
  }
  &::after {
    box-shadow: inset -8px 0px 8px -8px var(--primary-on-dark),
      inset -20px 0px 20px -20px var(--primary-on-dark),
      inset 0 5px 5px -5px var(--primary-on-light),
      inset 0 20px 20px -20px var(--primary-on-light),
      8px 8px 8px rgba(0, 0, 0, 0.4), 20px 20px 30px rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  &.inactivate {
    &::after {
      border-top-right-radius: 10px;
    }
    &::before {
      border-top-left-radius: 10px;
    }
  }
  &.activate {
    &::after {
      border-top-right-radius: 0px;
    }
    &::before {
      border-top-left-radius: 0px;
    }
  }
`

export const Middler = styled.span`
  flex-grow: 1;
  display: block;
  background-color: var(--primary);
  position: relative;
  height: 100%;
  box-shadow: inset 0 5px 5px -5px var(--primary-on-light),
    inset 0 20px 20px -20px var(--primary-on-light),
    8px 8px 8px rgba(0, 0, 0, 0.4), 20px 20px 30px rgba(0, 0, 0, 0.4);
`

export const Session = styled.div`
  position: absolute;
  font-size: 7px;
  color: var(--primary);
  text-shadow: 0.5px 0.5px 1px var(--primary-on-dark);
  height: 14px;
  width: 60px;
  font-weight: 900;
  bottom: 3.5px;
  left: 10px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  box-shadow: inset 0.5px 0.5px 2px var(--primary-on-dark),
    inset -0.5px -0.5px 2px var(--primary-on-light),
    inset 1px 1px 8px rgba(0, 0, 0, 0.4), inset 5px 5px 20px rgba(0, 0, 0, 0.4);
`
