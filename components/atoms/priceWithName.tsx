import { useMemo } from "react";

type Props = {
  name: string,
  price?: number,
}

const PriceWithName = ({ name, price }: Props) => {
  const newPrice = useMemo(() => price?.toFixed(2), [price]);

  return (
    <div>
      <span>{name}</span>
      <span>${newPrice ? newPrice : 0}</span>
    </div>
  )
}

export default PriceWithName;
