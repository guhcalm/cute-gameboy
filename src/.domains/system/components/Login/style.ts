import styled, { keyframes } from "styled-components"

export default styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20%;
  gap: 10px;
`

export const Lead = styled.h1`
  color: var(--on-primary);
  font-size: 15px;
  font-style: italic;
`

export const Input = styled.input`
  width: 200px;
  height: 30px;
  background-color: transparent;
  border-bottom: 1px solid var(--on-primary);
  outline: none;
  box-sizing: content-box;
  color: var(--on-primary);
  &::placeholder {
    color: var(--on-primary);
    font-weight: 100;
  }
  &:focus {
    border: 0;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid var(--on-primary);
  }
`

export const Button = styled.button`
position: relative;
  display: flex;
  width: 200px;
  height: 45px;
  border-radius: 5px;
  background-color: rgba(255,255,255,.1);
  backdrop-filter: blur(100px);
  justify-content: center;
  align-items: center;
  color: var(--on-primary);
  font-size: 14px;
  font-weight: 900;
  span {
    font-size: 12px;
  font-weight: 900;
  font-style: italic;
  margin-right: 4px;
`
