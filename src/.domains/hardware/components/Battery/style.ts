import styled from "styled-components"

export default styled.div`
  user-select: none;
  position: absolute;
  left: 25px;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    will-change: box-shadow;
    transition: box-shadow 0.4s;
    position: relative;
    content: "";
    display: block;
    border-radius: 50%;
    background-color: var(--quaternary);
    position: relative;
    z-index: 100;
  }
  span {
    display: block;
    position: absolute;
    color: var(--on-secondary);
    font-size: 8px;
    bottom: 0;
    transform: translateY(calc(100% + 5px));
  }

  &.inactivate {
    &::after {
      width: 7px;
      height: 7px;
      box-shadow: none;
    }
  }
  &.activate {
    &::after {
      width: 5px;
      height: 5px;
      background-color: #fff6a9;
      box-shadow: 0 0 15px 4px #ffa500, 0 0 20px 5px #ffa500,
        0 0 40px 10px #ffa500, 0 0 60px 15px #ff0000, 0 0 10px 3px #ff8d00,
        0 0 98px 30px #ff0000;
    }
  }
`
