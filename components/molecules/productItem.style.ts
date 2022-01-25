import styled from "styled-components";

export const ProductItemStyle = styled.div`
  position: relative;
  width: 100%;
  height: 106px;

  border-bottom: 1px solid #DDDDDD;
  display: flex;
`

export const PIPhotoContainer = styled.div`
  width: 30%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 10px
  }
`

export const PITextContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const PICountContainer = styled.div`
  position: relative;
  width: 20%;
  height: 100%;
`

export const PIName = styled.div`
  font-size: 16px;
`

export const PIPrice = styled.div`
  font-size: 21px;
  color: #FF2D55;
`

export const PICircleButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: transform 400ms, background 400ms, width 400ms, border-radius 400ms;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #FF8000; 
  border: none;
  font-size: 38px;
  color: white;

  &:hover {
    transform: translate(-50%, -50%) rotateZ(-90deg);
    background: #FF9900;
  }
`

export const PICountButtonContainer = styled.div`
  font-size: 21px;
  font-weight: bold;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #FF8000; 
  user-select: none;

  display:flex;
  justify-content: space-between;
  align-items: center;

  color: white;

  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: transform 400ms, background 400ms, width 400ms, height 400ms, border-radius 400ms;

  &:hover {
    transform: translateX(calc(-50% - 100px + 20px));
    background: #FF8000; 
    width: 200px;
    border-radius: 8px;
    height: 60px;
  }
`

type HiddeProps = {
  enable?: boolean;
  disabled?: boolean;
}

export const HiddeWhenActive = styled.div<HiddeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  font-size: 28px;
  font-weight: normal;
  transition: opacity 300ms, background 300ms;
  user-select: none;
  opacity: ${({ enable, disabled }) => enable ? disabled ? 0.3 : 1 : 0};
  pointer-events: ${({ enable, disabled }) => enable && !disabled ? "all" : "none"};
  border-radius: 8px;
  background: #FF8000; 

  &:hover {
    background: #FF9900;
  }
`

type ScreenProps = {
  enable?: boolean;
}
export const PIShowScreen = styled.div<ScreenProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  transition: 400ms;
  opacity: ${({ enable }) => enable ? 0.9 : 0};
`

export const PIDeleteButton = styled.div<ScreenProps>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 75px;
  user-select: none;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 400ms;
  opacity: ${({ enable }) => enable ? 1 : 0};
`
