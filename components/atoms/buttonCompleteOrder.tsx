import { ButtonCompleteOrderStyled } from "./buttonCompleteOrder.style"

type Props = {
  totalPrice: number | undefined;
  minPrice: number;
  onClick: () => void;
}

const ButtonCompleteOrder = ({ totalPrice, minPrice = 100, onClick }: Props) => {
  return <ButtonCompleteOrderStyled
    onClick={onClick}
    disabled={totalPrice ? totalPrice < minPrice : true}>
    COMPLETE ORDER
  </ButtonCompleteOrderStyled>
}

export default ButtonCompleteOrder
