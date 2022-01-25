import { useState } from "react";
import { ProductType } from "../../types/products";
import Show from "../helpers/Show";
import {
  HiddeWhenActive,
  PICircleButton,
  PICountButtonContainer,
  PICountContainer,
  PIDeleteButton,
  PIName,
  PIPhotoContainer,
  PIPrice,
  PIShowScreen,
  PITextContainer,
  ProductItemStyle,
} from "./productItem.style";

type ProductItemProps = {
  data: ProductType,
  isCart?: boolean,
  onAddProduct?: (id: number) => void,
  onDeleteProduct?: (id: number) => void,
  onIncrementCounter?: (id: number) => void,
  onDecrementCounter?: (id: number) => void,
}

const ProductItem = (props: ProductItemProps) => {
  const data = props.data

  const [isHover, setIsHover] = useState(false);

  const handlerClickSendId = (fn?: (id: number) => void) => {
    if (!fn) return;
    fn(data.id);
  }

  return (
    <ProductItemStyle>
      <PIPhotoContainer>
        <img src={data.image} />
      </PIPhotoContainer>

      <PITextContainer>
        <PIName>{data.name}</PIName>
        <PIPrice>${data.price.toFixed(2)}</PIPrice>
      </PITextContainer>

      <PIShowScreen enable={isHover} />

      <PICountContainer>
        <Show when={props.isCart}>

          <PIDeleteButton enable={!isHover} onClick={() => handlerClickSendId(props.onDeleteProduct)}>
            Delete
          </PIDeleteButton>

          <PICountButtonContainer
            onPointerEnter={() => setIsHover(true)}
            onPointerLeave={() => setIsHover(false)}>

            <HiddeWhenActive
              enable={isHover}
              disabled={data.count ? data.count <= 1 : false}
              onClick={() => handlerClickSendId(props.onDecrementCounter)}>
              -
            </HiddeWhenActive>

            <div>{data.count}</div>

            <HiddeWhenActive
              enable={isHover}
              onClick={() => handlerClickSendId(props.onIncrementCounter)}>
              +
            </HiddeWhenActive>

          </PICountButtonContainer>

        </Show>

        <Show when={!props.isCart}>
          <PICircleButton onClick={() => handlerClickSendId(props.onAddProduct)}>
            +
          </PICircleButton>
        </Show>
      </PICountContainer>

    </ProductItemStyle>
  )
}

export default ProductItem
