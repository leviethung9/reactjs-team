import React, { useEffect } from "react";
import styled from "styled-components"

import Input from "./Input";
import Price from "./Price";

import {
  PRICE_PRODUCT,
  RANDOM_BRAND,
  RANDOM_COLOR,
  RANDOM_SIZE,
  SORT_PRODUCT,
} from "../constants";
import useSelect from "../utils/hooks/useSelect";
import { getFilter } from "../utils/helpers";
const Hung = styled.div`
margin-top:60px;
`

const Filter = ({ onChange }) => {
  const [color, onColor] = useSelect();
  const [brand, onBrand] = useSelect();
  const [size, onSize] = useSelect();
  const [price, onPrice] = useSelect();
  const [order, onOrder] = useSelect();

  useEffect(() => {
    onChange(getFilter([color, brand, size, order, 2, 12]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, brand, size, price, order]);

  return (
    <Hung>
      <Input
        data={RANDOM_BRAND}
        onChange={onBrand}
        value={brand}
        label="Khóa Học"
      />
      <Input
        data={RANDOM_COLOR}
        onChange={onColor}
        value={color}
        label="Thể Loại"
      />

      <Price data={PRICE_PRODUCT} onChange={onPrice} value={price} />

      <Input
        data={SORT_PRODUCT}
        onChange={onOrder}
        value={order}
        label="Sắp xếp"
      />
    </Hung>
  );
};

export default Filter;
