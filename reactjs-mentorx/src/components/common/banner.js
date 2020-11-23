import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProductCtx } from "../../context/ProductContext.js";
import Search from "../Search.js";
import "./header.css";
import logo from "../../assets/images/logo1.jpg";
const StyleHeader = styled.header`
  width: 100%;
  min-height: 130px;
  border-bottom: 1px solid #e5e5e5;
  position: static;
  margin-top: 20px;

  .title {
    width: 100%;
    text-align: center;
  }
  .icon ul li {
    list-style: none;
    margin-left: 20px;
    font-size: 20px;
  }
  .icon ul li i:hover {
    color: gray;
  }
  .icon ul {
    display: flex;
    margin-left: 80%;
    margin-top: -20px;
  }`;

const Button = styled.button`
  border: 1px solid transparent;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const Header = () => {
  const { searchs } = useContext(ProductCtx);
  const [search, setSearch] = searchs;
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  const gotoCart = (e) => {
    e.preventDefault();
    history.push("/cart");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function handleSearch(e) {
    setSearch(e);
    toggleModal();
  }

  return (
    <StyleHeader>

     
      
    </StyleHeader>
  );
};

export default Header;
