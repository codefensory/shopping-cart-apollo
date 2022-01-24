import styled from "styled-components";
import { ButtonCompleteOrderStyled } from "../atoms/buttonCompleteOrder.style";

export const PriceCartBoxContainer = styled.div`
  width: 100%;
  padding-top: 60px;

  div:first-child {
    margin-bottom: 10px;
  }

  ${ButtonCompleteOrderStyled} {
    margin-top: 20px;
  }
`

export const PriceCartBoxPricesContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: white;

  & > div {
    margin-bottom: 10px;
  }

  div:last-child {
    margin-bottom: 0;
    margin-top: 20px;

    span:first-child {
      font-weight: bold;
    }
  }
`
