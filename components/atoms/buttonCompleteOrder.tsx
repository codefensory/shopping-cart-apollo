import { ButtonCompleteOrderStyled } from "./buttonCompleteOrder.style"

type Props = {
  totalPrice: number | undefined,
  minPrice: number
}

const ButtonCompleteOrder = ({ totalPrice, minPrice = 100 }: Props) => {
  return <ButtonCompleteOrderStyled
    disabled={totalPrice ? totalPrice < minPrice : true}>
    COMPLETE ORDER
  </ButtonCompleteOrderStyled>
}

export default ButtonCompleteOrder
