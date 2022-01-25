import styled from "styled-components";

export const OrderCompleteTemplateStyle = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  #title {
    font-size: 28px;
    user-select: none;
  }

  #subtitle {
    margin-top: 16px;
    font-size: 16px;
  }

  #back {
    font-size: 16px;
    margin-top: 16px;
    color: #0500FF;
    user-select: none;
    cursor: pointer;
  }

  img {
    margin-top: 48px;
    width: 308px;
    height: 288px;
  }
`
