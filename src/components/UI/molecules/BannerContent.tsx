import React, { FC } from "react";
import styled from "styled-components";
import "../../../App.css";
import MyLabel from "../atoms/LabelsForInput";

const StyledBannerContent = styled.div`
  width: 1122px;
  height: 379px;
  position: absolute;
  top: 232px;
  left: 0px;
  right: 0px;
  bottom: 0;
  margin: 0 auto;
  z-index: 10;
  text-align: center;
`;
const FirstP = styled.p`
  font-family: "Syne";
  font-weight: 800;
  font-size: 48px;
  color: white;
  margin-bottom: -50px;
`;
const SecondP = styled.p`
  position: relative;
  left: 8px;
  font-family: "Syne";
  font-weight: 800;
  font-size: 310px;
  color: white;
`;
const LabelsWrapper = styled.div`
  position: relative;
  top: -203px;
  left: -37px;
  right: 0;
  bottom: 0;
  z-index: 11;
`;
type MyContentType = {
  page: string;
}
// логика смены цвета инпутов
const changeStyling = (element: any) => {
  element.target.offsetParent.childNodes.forEach((elem: any) => {
    if (elem.id === element.target.id) {
      elem.style.borderColor = "var(--c)";
      elem.style.backgroundSize = "100% 100%";
    } else {
      elem.style = "";
    }
  });
};

const BannerContent:FC<MyContentType> = ({page}) => {
  return (
    <>
    {page === "main" 
    ?  
    <StyledBannerContent>
      <FirstP>THE SPACE IS WAITING FOR</FirstP>
      <SecondP>YOU</SecondP>
      <LabelsWrapper onClick={(e: any) => changeStyling(e)}>
        <MyLabel
          htmlFor="radio1"
          id="1"
          colorType="white"
          style={{ borderColor: "var(--c)", backgroundSize: "100% 100%" }}/>
        <MyLabel htmlFor="radio2" id="2" colorType="white" style={{}} />
        <MyLabel htmlFor="radio3" id="3" colorType="white" style={{}} />
      </LabelsWrapper>
    </StyledBannerContent>
    :
    <StyledBannerContent>
      <FirstP>FAVORITES</FirstP>
    </StyledBannerContent>
    }
    </>
  );
};

export default BannerContent;
