import React, { FC } from "react";
import styled from "styled-components";
import BannerContent from "../molecules/BannerContent";
import "../../../App.css";

const StyledBanner = styled.div`
  height: 740px;
  width: 100%;
`

type MyBannerType = {
  page: string;
}
const BannerSectionSlider:FC<MyBannerType> = ({page}) => {

  let firstImage = process.env.PUBLIC_URL + "/images/pexels-spacex-sattelite.png";
  let secondImage = process.env.PUBLIC_URL + "/images/pexels-woman.png";
  let thirdImage = process.env.PUBLIC_URL + "/images/astronaut.png";
  
  return (
    <>
    {page === "main" 
    ?  
    <StyledBanner>
    <div className="slides">
      <BannerContent page = {page}/>
      <input type="radio" name="radio-btn" id="radio1" />
      <input type="radio" name="radio-btn" id="radio2" />
      <input type="radio" name="radio-btn" id="radio3" />
      <div className="cover"></div>
      <div className="slide first">
        <img src={firstImage} alt=""/>
      </div>
      <div className="slide">
        <img src={secondImage} alt="" />
      </div>
      <div className="slide">
        <img src={thirdImage} alt="" />
      </div>
    </div>
    </StyledBanner>
    : 
    <StyledBanner>
      <BannerContent page = {page}/>
      <div className="cover"></div>
      <div style={{marginTop: "-80px"}}>
        <img src={thirdImage} alt="" />
      </div>
    </StyledBanner>
    }
    
    </>
  );
};

export default BannerSectionSlider;
