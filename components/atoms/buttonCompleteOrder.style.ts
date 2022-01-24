import styled from "styled-components";

export const ButtonCompleteOrderStyled = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  background: #FF8000;
  border: 2px solid #FF8000;
  font-weight: bold;
  cursor: pointer;

  transition: background 400ms, border 400ms, color 400ms;

  &:disabled {
    border-color: #DDDDDD;
    background: none;
    color: #C1C1C1; 
  }

  &:hover {
    background: #FF9900;
    border-color: #FF9900;
  }
`

