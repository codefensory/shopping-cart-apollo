type Props = {
  totalPrice: number | undefined,
  minPrice: number
}

const ButtonCompleteOrder = ({ totalPrice, minPrice = 100 }: Props) => {
  return <button disabled={totalPrice ? totalPrice < minPrice : true}>Complete Order</button>
}

export default ButtonCompleteOrder
