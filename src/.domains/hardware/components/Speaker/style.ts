import styled from "styled-components"

export default styled.div`
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 80px;
  right: 20px;
  bottom: 10px;
  div {
    transform: rotate(-30deg);
    min-width: 100%;
    margin-top: 15px;
    height: 55%;
    display: flex;
    justify-content: space-between;
    span {
      height: 100%;
      width: 5px;
      border-radius: 2.5px;
      background-color: var(--background);
      position: relative;
      box-shadow: inset 1px 1px 1px var(--primary-on-dark),
        inset -1px -1px 1px var(--primary-on-light);
      &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 35%;
        opacity: 0.5;
        background-color: var(--primary-on-dark);
        filter: blur(1px);
      }
    }
    &::before {
      content: "";
      display: block;
      background-color: var(--primary-on-dark);
      position: absolute;
      left: 50%;
      top: 70%;
      transform: translateX(-50%);
      width: 300px;
      height: 100px;
      filter: blur(10px);
    }
  }
`
