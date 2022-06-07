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
export const Screen = styled.div`
  position: relative;
  height: calc(100% - 50px);
  width: calc(100% - 100px);
  background-color: var(--terciary);
  box-shadow: inset 0 0 15px 5px var(--terciary-on-dark);
`

export const Info = styled.div`
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

export const Logo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(calc(100% + 3px));
  color: var(--quinary);
  span:nth-child(1) {
    font-size: 10px;
    font-weight: 1000;
  }
  span:nth-child(2) {
    font-size: 15px;
    font-style: italic;
    font-weight: 500;
  }
  span:nth-child(3) {
    font-size: 5px;
    font-weight: 1000;
  }
`

export const Battery = styled.div`
  position: absolute;
  left: 25px;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    will-change: width, height, box-shadow, background-color;
    transition: box-shadow 0.8s;
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
      box-shadow: inset 0 0 2px var(--quaternary-on-light),
        inset 0 0 1.5px var(--quaternary-on-dark);
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
