import { useMemo } from "react";
import { ProductType } from "../../types/products";
import ButtonCompleteOrder from "../atoms/buttonCompleteOrder";
import DelivetyDate from "../atoms/deliveryDate";
import PriceWithName from "../atoms/priceWithName";

type Props = {
  cartProducts?: ProductType[]
}

type PricesData = {
  products?: number,
  taxes?: number,
  shippingCost?: number,
  total?: number,
}

const PriceCartBox = ({ cartProducts }: Props) => {
  const pricesData: PricesData | undefined = useMemo(() => {
    if (!cartProducts) return

    let productsPrice = cartProducts
      .reduce((curr, acc) => curr += acc.price * (acc.count ? acc.count : 1), 0);

    const taxes = productsPrice * 0.18;
    productsPrice += taxes;

    const shippingCost = productsPrice * 0.1;

    return {
      products: productsPrice,
      taxes,
      shippingCost,
      total: productsPrice + shippingCost,
    }
  }, [cartProducts])

  return (
    <div>
      <DelivetyDate />

      <div>
        <PriceWithName name="Products" price={pricesData?.products} />
        <PriceWithName name="Shipping Cost" price={pricesData?.shippingCost} />
        <PriceWithName name="Taxes" price={pricesData?.taxes} />
        <PriceWithName name="total" price={pricesData?.total} />
      </div>

      <ButtonCompleteOrder totalPrice={pricesData?.total} minPrice={50} />
    </div>
  )
}

export default PriceCartBox;
