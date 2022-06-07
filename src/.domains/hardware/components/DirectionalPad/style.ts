import styled from "styled-components"

export default styled.div`
  --diameter: 90px;
  height: var(--diameter);
  width: var(--diameter);
  position: absolute;
  left: 20px;
  border-radius: 50%;
  --higher: 40%;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
    &::after {
      width: 30%;
      height: 30%;
      content: "";
      display: block;
      background-color: var(--secondary-on-dark);
    }
  }

  will-change: top;
  transition: 0.5s top;
  &.inactivate {
    top: calc(46% + 30px);
  }
  &.activate {
    top: calc(60% + 40px);
  }
`

export const Left = styled.button`
  position: absolute;
  height: var(--higher);
  width: calc((100% - var(--higher) + 2px) / 2);
  left: 0;
  top: 50%;
  transform: translatey(-50%);
  background-color: var(--secondary);
  &::after {
    clip-path: polygon(100% 0, 100% 100%, 0 50%);
  }
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: inset 0.7px 0.7px 0 0 var(--secondary),
    inset 0.7px -0.7px 0 0 var(--secondary),
    inset 1.4px 1.4px 0 0 var(--secondary-on-dark),
    inset 1.4px -1.4px 0 0 var(--secondary-on-dark),
    inset 2px 2px 2px 0 var(--secondary-on-light),
    inset 2px -2px 2px 0 var(--secondary-on-light),
    inset 0px -8px 4px -4px var(--secondary-on-dark),
    inset 0px 8px 4px -4px var(--secondary-on-light),
    1px 1px 3px 0 rgba(0, 0, 0, 0.4);
  &:hover,
  &:focus,
  &:active,
  &.pressed {
    box-shadow: inset 0.7px 0.7px 0 0 var(--secondary),
      inset 0.7px -0.7px 0 0 var(--secondary),
      inset 1.4px 1.4px 0 0 var(--secondary-on-dark),
      inset 1.4px -1.4px 0 0 var(--secondary-on-dark),
      inset 2px 2px 2px 0 var(--secondary-on-light),
      inset 2px -2px 2px 0 var(--secondary-on-light);
  }
`

export const Right = styled.button`
  position: absolute;
  height: var(--higher);
  width: calc((100% - var(--higher) + 2px) / 2);
  right: 0;
  top: 50%;
  transform: translatey(-50%);
  background-color: var(--secondary);
  &::after {
    clip-path: polygon(0 0%, 100% 50%, 0% 100%);
  }
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: inset -0.7px 0.7px 0 0 var(--secondary),
    inset -0.7px -0.7px 0 0 var(--secondary),
    inset -1.4px 1.4px 0 0 var(--secondary-on-dark),
    inset -1.4px -1.4px 0 0 var(--secondary-on-dark),
    inset -2px 2px 2px 0 var(--secondary-on-light),
    inset -2px -2px 2px 0 var(--secondary-on-light),
    inset 0px -8px 4px -4px var(--secondary-on-dark),
    inset 0px 8px 4px -4px var(--secondary-on-light),
    0px 2px 2px 0 rgba(0, 0, 0, 0.4);
  &:hover,
  &:focus,
  &:active,
  &.pressed {
    box-shadow: inset -0.7px 0.7px 0 0 var(--secondary),
      inset -0.7px -0.7px 0 0 var(--secondary),
      inset -1.4px 1.4px 0 0 var(--secondary-on-dark),
      inset -1.4px -1.4px 0 0 var(--secondary-on-dark),
      inset -2px 2px 2px 0 var(--secondary-on-light),
      inset -2px -2px 2px 0 var(--secondary-on-light);
  }
`

export const Up = styled.button`
  position: absolute;
  height: calc((100% - var(--higher) + 2px) / 2);
  width: var(--higher);
  left: 50%;
  top: 0;
  transform: translatex(-50%);
  background-color: var(--secondary);
  &::after {
    clip-path: polygon(0 100%, 50% 0%, 100% 100%);
  }
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: inset 0.7px 0.7px 0 0 var(--secondary),
    inset -0.7px 0.7px 0 0 var(--secondary),
    inset 1.4px 1.4px 0 0 var(--secondary-on-dark),
    inset -1.4px 1.4px 0 0 var(--secondary-on-dark),
    inset 2px 2px 2px 0 var(--secondary-on-light),
    inset -2px 2px 2px 0 var(--secondary-on-light),
    1px 1px 3px 0 rgba(0, 0, 0, 0.4);
  &:hover,
  &:focus,
  &:active,
  &.pressed {
    box-shadow: inset 0.7px 0.7px 0 0 var(--secondary),
      inset -0.7px 0.7px 0 0 var(--secondary),
      inset 1.4px 1.4px 0 0 var(--secondary-on-dark),
      inset -1.4px 1.4px 0 0 var(--secondary-on-dark),
      inset 2px 2px 2px 0 var(--secondary-on-light),
      inset -2px 2px 2px 0 var(--secondary-on-light);
  }
`

export const Down = styled.button`
  position: absolute;
  height: calc((100% - var(--higher) + 2px) / 2);
  width: var(--higher);
  left: 50%;
  bottom: 0;
  transform: translatex(-50%);
  background-color: var(--secondary);
  &::after {
    clip-path: polygon(0 0%, 50% 100%, 100% 0%);
  }
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: inset 0.7px -0.7px 0 0 var(--secondary),
    inset -0.7px -0.7px 0 0 var(--secondary),
    inset 1px -1px 0 0 var(--secondary-on-dark),
    inset -1.4px -1.4px 0 0 var(--secondary-on-dark),
    inset 2px -2px 2px 0 var(--secondary-on-light),
    inset -2px -2px 2px 0 var(--secondary-on-light),
    inset 0px -32px 20px -20px var(--secondary-on-dark),
    1px 1px 3px 0 rgba(0, 0, 0, 0.4);
  &:hover,
  &:focus,
  &:active,
  &.pressed {
    box-shadow: inset 0.7px -0.7px 0 0 var(--secondary),
      inset -0.7px -0.7px 0 0 var(--secondary),
      inset 1.4px -1.4px 0 0 var(--secondary-on-dark),
      inset -1.4px -1.4px 0 0 var(--secondary-on-dark),
      inset 2px -2px 2px 0 var(--secondary-on-light),
      inset -2px -2px 2px 0 var(--secondary-on-light);
  }
`

export const Center = styled.button`
  position: absolute;
  height: var(--higher);
  width: var(--higher);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--secondary);
  &::after {
    width: 50% !important;
    height: 50% !important;
    border-radius: 50%;
    transform: rotate(-30deg);
    background: linear-gradient(
      var(--secondary-on-dark),
      var(--secondary-on-light)
    );
  }
`
