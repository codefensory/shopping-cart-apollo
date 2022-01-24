import { useMemo } from "react";
import { PriceWithNameContainer } from "./priceWithName.style";

type Props = {
  name: string,
  mark?: boolean,
  price?: number,
  redPrice?: boolean,
}

const PriceWithName = ({ name, price, mark, redPrice }: Props) => {
  const newPrice = useMemo(() => price?.toFixed(2), [price]);

  return (
    <PriceWithNameContainer mark={mark} redPrice={redPrice}>
      <span>{name}</span>
      <span id="price">${newPrice ? newPrice : 0}</span>
    </PriceWithNameContainer>
  )
}

export default PriceWithName;
