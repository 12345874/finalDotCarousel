import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

let boolean = false;

const Main = styled.main`
  overflow: hidden;
`;

const Header = styled.header`
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.width > 768 ? "5.75rem" : "3.75rem")};
  line-height: 100%;
  margin: ${(props) =>
    props.width > 768 ? "4.75rem 0 3rem 0" : "5.688rem 0 2.5rem 0"};
  /* or 92px */

  text-align: center;
  letter-spacing: ${(props) => (props.width > 768 ? "-0.05rem" : "-0.04rem")};
  /* Grayscale/Black */
  display: flex;

  justify-content: center;

  color: #0a0e12;
`;

const HeaderText = styled.span`
  width: ${(props) => (props.width > 768 ? "50%" : "100%")};
`;

const CarouselContainer = styled.article`
  position: relative;
  overflow: hidden;
  margin-bottom: ${(props) =>
    props.width > 768 || props.type === "articleCarousel" ? "6rem" : "4rem"};
`;

const CardContainer = styled.section`
  display: flex;
  transition: transform 1s ease-in-out;
  gap: 1rem;
  margin-top: ${(props) => (props.width > 768 ? "5.5rem" : "3rem")};
  ${(props) =>
    props.device === "desktop" &&
    css`
      @media (min-width: 1024px) {
        margin-left: 10rem;
      }
    `}
`;

const CarouselDotContainer = styled.section`
  text-align: center;
  margin-top: ${(props) => (props.width > 768 ? "4rem" : "1.25rem")};
`;

const ArticleCarouselDotContainer = styled.section`
  text-align: center;
  margin-bottom: ${(props) => (props.width > 768 ? "0rem" : "1.25rem")};
  padding: ${(props) => (props.width > 768 ? "0 11rem" : 0)};
`;

const CarouselDot = styled.section`
  display: inline-block;
  width: 1.5rem;
  height: 0.25rem;
  background-color: #dfe4ea;
  border-radius: 1px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 1s ease-in-out;
  background-color: ${(props) =>
    props.index === props.currentImage ? "#0a0e12" : ""};
`;

const Button = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.width > 768 ? "2rem" : "1rem")};
  text-align: center;
`;

const CarouselDotWrapper = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.width > 768 ? "row" : "column")};
  justify-content: space-between;
  margin-top: ${(props) => (props.width > 768 ? "4rem" : "1.25rem")};
`;

const ArticleButtonContainer = styled.div`
  text-align: center;
  padding: ${(props) => (props.width > 768 ? "0 7rem" : 0)};
`;

function MarqueeCarousel({
  mockData,
  currentImage,
  setCurrentImage,
  width,
  type,
  children
}) {
  if (!boolean) {
    mockData.push(mockData[0]);
    boolean = true;
  }

  useEffect(() => {
    // Check if currentImage is the last image index
    if (currentImage === mockData.length - 2) {
      setTimeout(() => {
        setCurrentImage(0);
      }, 3000);
    }
  }, [currentImage]);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <Main>
      <Header width={width}>
        <HeaderText width={width}>Vimeo customer stories</HeaderText>
      </Header>

      {/* button comes here */}

      <Button>button comes here...</Button>

      <CarouselContainer width={width} type={type}>
        <CardContainer
          device="desktop"
          width={width}
          style={{ transform: `translateX(-${currentImage * 94}%)` }}
        >
          {children}
        </CardContainer>

        {type !== "articleCarousel" ? (
          <CarouselDotContainer width={width}>
            {mockData.slice(0, -1).map((image, index) => (
              <CarouselDot
                key={index}
                index={index}
                currentImage={currentImage}
                onClick={() => handleDotClick(index)}
              ></CarouselDot>
            ))}
          </CarouselDotContainer>
        ) : (
          <CarouselDotWrapper width={width}>
            <ArticleCarouselDotContainer width={width} type={type}>
              {mockData.slice(0, -1).map((image, index) => (
                <CarouselDot
                  key={index}
                  index={index}
                  currentImage={currentImage}
                  onClick={() => handleDotClick(index)}
                ></CarouselDot>
              ))}
            </ArticleCarouselDotContainer>
            <ArticleButtonContainer width={width}>
              button comes here...
            </ArticleButtonContainer>
          </CarouselDotWrapper>
        )}
      </CarouselContainer>
    </Main>
  );
}

export default MarqueeCarousel;
