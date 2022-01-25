import { useMemo } from "react";
import { OrderCompleteTemplateStyle } from "./orderCompleteTemplate.style";

type Props = {
  order: number;
  onClick?: () => void;
};

const OrderCompleteTemplate = (props: Props) => {
  const order = useMemo(() => {
    let stringOrder = props.order.toString();
    let newOrder = "P";
    let zeroCount = 4 - stringOrder.length;

    for (let i = 0; i < zeroCount; i++)
      newOrder += "0";

    newOrder += stringOrder;

    return newOrder;
  }, [props.order])
  return (
    <OrderCompleteTemplateStyle>
      <div id="title">Thank you</div>
      <div id="subtitle">Your order {order} has been registered</div>
      <div id="back" onClick={props.onClick}>Continue shopping</div>
      <img src="/success.png" />
    </OrderCompleteTemplateStyle>
  );
};

export default OrderCompleteTemplate;
