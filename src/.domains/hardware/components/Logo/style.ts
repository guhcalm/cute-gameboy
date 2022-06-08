import styled from "styled-components"

export default styled.div`
  user-select: none;
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
