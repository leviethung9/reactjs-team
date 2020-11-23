import React from 'react'
import Bannerimg from "../../assets/images/title.jpg";
import styled from "styled-components";
const Banner = styled.div`
.banner{
width:100%;
margin:0 auto;

}
img{
    width:100%;
    height:50vh;
    object-fit:cover;
  position:relative;
}
.banner h1{
    color:#ffffff;
    font-size:60px;
    font-weight:500;
    position:absolute;
}
`;
const Leftheader = ({ text }) => {
    return (
        <Banner>
            <div className="container-fluid">
                <div className="banner" >
                    <img src={Bannerimg} alt="" />
                    <h1> {text} </h1>
                </div>
            </div>
        </Banner>

    )
}

export default Leftheader;