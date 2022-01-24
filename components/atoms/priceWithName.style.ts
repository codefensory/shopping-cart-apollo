import styled from "styled-components";

type Props = {
  mark?: boolean,
  redPrice?: boolean,
}

export const PriceWithNameContainer = styled.div<Props>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #333333;
  padding: 4px 0;

  ${({ mark }) => mark ? "background: #FFE200;" : ""}

  #price {
    ${({ redPrice }) => redPrice ? "color: #FF2D55;" : ""}
  }
`
