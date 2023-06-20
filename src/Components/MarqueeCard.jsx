import React from "react";
import styled, { css } from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 4.5rem;
  gap: 4rem;
  isolation: isolate;
  width: auto;
  height: 100%;
  background: #f1f5f9;
  border-radius: 3rem;
  flex: 0 0 92%;

  ${(props) =>
    props.device === "mobile" &&
    css`
      @media (min-width: 769px) {
        flex-direction: row-reverse;
        gap: 0;
        padding: 0;
      }
    `}
`;

const ImageWrapper = styled.div`
  height: ${(props) => (props.$width > 768 ? "30rem" : "13rem")};
  width: 100%;
  border-radius: ${(props) => (props.$width > 768 ? "3rem" : "2rem")};
  background-size: cover;
  background-repeat: no-repeat;
`;

const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding: ${(props) => (props.$width > 768 ? "0 3.5rem" : "0 2.125rem")};
  width: 85%;
`;

const TitleMain = styled.section``;

const Title = styled.div`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background-color: #fafcfd;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.div`
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.$width > 768 ? "2rem" : "1.5rem")};
  line-height: 110%;
  letter-spacing: -0.04rem;
  color: #0a0e12;
  margin-bottom: ${(props) => (props.$width > 768 ? "5rem" : "4rem")};

  width: ${(props) => (props.$width > 768 ? "25.25rem" : "15.625rem")};
  ${(props) =>
    props.device === "mobile" &&
    css`
      @media (min-width: 769px) {
        font-size: 2rem;
      }
    `};
`;

const ButtonContainer = styled.button`
  width: 5rem;
  height: 2.813rem;
  background: #0a0e12;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;

  &:hover {
    background: #17d5ff;
    color: white;
  }
`;

const MarqueeCard = ({ data, idx, activeIdx, width }) => {
  return (
    <Main device="mobile">
      <ImageWrapper
        $width={width}
        style={{ backgroundImage: `url(${data.image})` }}
      >
        {/* <video src={data.image} controls muted /> */}
      </ImageWrapper>
      <TitleContainer width={width}>
        {width > 768 ? (
          <TitleMain style={{ display: "flex", gap: "0.5rem" }}>
            {data?.desktopTitle.map((item) => {
              return <Title>{item}</Title>;
            })}
          </TitleMain>
        ) : (
          <Title>{data?.mobileTitle}</Title>
        )}
        <Paragraph $width={width}>{data?.paragraph}</Paragraph>
        <ButtonContainer>
          <img src="" alt="" />
        </ButtonContainer>
      </TitleContainer>
    </Main>
  );
};

export default MarqueeCard;
