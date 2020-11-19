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
  }
  a:visited {
    color: black;
  }
`;

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
      
      <div className="top_header">
      <div>
        <div className="hd-top">
          <div className="hd-top-grid">
            <div className="hd-top__left">
              <div className="slogan">
                Website giới thiệu gia sư IT Online
              </div>
            </div>
            <div className="hd-top__right">
              <div className="user-btn">
                <a href="login-reg-to-student.html"><i className="fa fa-user" /> Đăng ký </a>
                <a href="login-reg-to-student.html"> <i className="fa fa-user" /> Đăng nhập</a>
              </div>
              {/* modal login-reg form */}
              {/* Modal */}
              {/* Modal */}
              {/* modal login-reg form end*/}
            </div>
          </div>
        </div>
        {/* hd-top end */}
        {/* hd-area */}
        <div className="hd-area">
          <div className="hd-area-grid">
            <div className="hd-area__left">
              <a className="logo">
                <img src={logo} className="img-fluid" alt="" />
              </a></div><a className="logo">
            </a><div className="hd-area__right"><a className="logo">
                {/* nav */}
              </a><nav className="navigation"><a className="logo">
                </a><ul className="menu"><a className="logo">
                  </a><li><a className="logo"> </a><a href="home.html" className> Trang chủ </a> </li>
                  <li> <a href="course.html" className> Khóa học </a> </li>
                  <li> <a href="mentor-list.html" className> Gia sư </a> </li>
                  <li> <a href="blog.html" className> Tin tức </a> </li>
                  <li> <a href="contact.html" className> Liên hệ </a> </li>
                  {/* search */}
                  {/* search end */}
                </ul>
                <div className="search">
                  <button className="btn-drop" onclick="show()">
                    <i className="fa fa-search" id="hide-icon" />
                  </button>
                  <div id="show-content">
                      <input type="text"  onSearch={handleSearch} />
                      <button type="submit" className="icon-search">
                        <i className="fa fa-search" />
                      </button>
                  </div>
                </div>
                {/* user-dropdown */}
                <div className="dropdown">
                  <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="assets/img/user/user.png" alt="" />
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Hồ sơ</a>
                    <a className="dropdown-item" href="#">Cài đặt</a>
                    <a className="dropdown-item" href="#">Đăng xuất</a>
                  </div>
                </div>
              </nav>
              {/* nav end */}
            </div>
          </div>
        </div>
      </div>
      </div>
    </StyleHeader>
  );
};

export default Header;
