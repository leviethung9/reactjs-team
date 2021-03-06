import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

export const StyleCard = styled.div`
  padding: 40px 30px;
  flex: 0 0 25%;

  .content {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0 0 0;

    .left p {
      text-transform: uppercase;
      color: #000;
      font-size: 0.78125rem;
      letter-spacing: 1px;
      text-align: left;
    }

    .right span {
      letter-spacing: 0.5px;
      line-height: 0;
      color: #000;
      font-size: 0.78125rem;
    }
  }

  h4 {
    font-size: 0.78125rem;
    font-weight: 500;
    line-height: 35px;
    color: #333;
    letter-spacing: 1px;
    text-align: left;
  }

  h5 {
    line-height: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    cursor: pointer;
  }

  .round {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid #000;
    position: relative;
    margin: 10px 0 0 0;
    &::after {
      content: "";
      background-image: url(${({ img }) => img});
      background-position: center;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      cursor: pointer;
      position: absolute;
      top: 1.8px;
      right: 1.48px;
    }

    button {
      position: absolute;
      /* right: 0; */
      left: 179px;
      top: -5px;
    }
  }
`;

export const Card = ({ product, onhandleClick }) => {
  return (
    <StyleCard img={product.image}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt="" />
      </Link>
      <h4>{product.name}</h4>
      <div className="content">
        <div className="right">
        <span>Thể loại: {product.cate}</span>
        </div>
        <div className="right">
          <span>Giá:{product.price} VND</span>
        </div>
      </div>
    
    

    </StyleCard>
  );
};
export default Card;
