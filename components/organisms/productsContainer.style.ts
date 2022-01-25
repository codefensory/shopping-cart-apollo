import styled from "styled-components";

type Props = {
  active?: boolean;
  hideRight?: boolean;
}

export const ProductContainerStyle = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ active }) => active ? 1 : 0};
  transition: opacity 200ms, transform ${({ active }) => active ? "200ms" : "400ms"};
  pointer-events: ${({ active }) => active ? "all" : "none"};
  transform: translateY(${({ active }) => active ? "0" : "-30px"});
`

export const PCLoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
`
