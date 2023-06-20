import React, { useEffect } from "react";
import styled from "styled-components";
import MarqueeCard from "./Components/MarqueeCard";
import MarqueeCarousel from "./MarqueeCarousel";
let mockData = [
  {
    image: "https://i.postimg.cc/RhYnBf5m/er-slider.jpg",
    mobileTitle: "Pre-Production",
    desktopTitle: ["Pre-Production", "Use Case"],
    paragraph: "How Stellantis is powering limitless learning with video"
  },
  {
    image: "https://i.postimg.cc/qBGQNc37/ro-slider.jpg",
    mobileTitle: "Pre-Production",
    desktopTitle: ["Pre-Production", "Use Case"],
    paragraph: "How Stellantis is powering limitless learning with video"
  },
  {
    image: "https://i.postimg.cc/C12h7nZn/ms-1.jpg",
    mobileTitle: "Pre-Production",
    desktopTitle: ["Pre-Production", "Use Case"],
    paragraph: "How Stellantis is powering limitless learning with video"
  }
];

const Article = styled.main`
  font-family: sans-serif;
`;

export default function App() {
  const [currentImage, setCurrentImage] = React.useState(0);

  const [width, setWidth] = React.useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <Article>
      <MarqueeCarousel
        mockData={mockData}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        width={width}
        type="articleCarousel"
      >
        {mockData.map((data, index) => (
          <MarqueeCard
            data={data}
            idx={index}
            activeIdx={currentImage}
            width={width}
          />
        ))}
      </MarqueeCarousel>
    </Article>
  );
}
