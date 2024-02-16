import styled from "styled-components";
import Header from "./Header";
import React from "react";

import { printData } from "../data/PrintData";
import { getImageURL } from "../utils/ImageUtils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductOverlay from "./ProductOverlay";

export default function Print() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const [activeProduct, setActiveProduct] = React.useState(null);

  function handleClick(event) {
    setActiveProduct(event.target.value);
    setIsOpen(!isOpen);
  }
  // const handleCloseOverlay = () => {
  //   setIsOpen(false);
  //   setActiveProduct(null);
  // };

  return (
    <Wrapper>
      <Header />
      <SliderWrap>
        <PrintWrap className="wrap-1">
          <Title>{printData[0].title}</Title>

          <Carousel
            className="carousel"
            responsive={responsive}
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <div className="pic">
                <Image src={getImageURL(printData[0].images[0])} />
                <button
                  value="pic1"
                  onClick={(event) => handleClick(event)}
                  className="option"
                >
                  ...
                </button>

                {isOpen && activeProduct === "pic1" ? (
                  <ProductOverlay title={"Testing"} className="overlay">
                    {" "}
                    Overlay
                  </ProductOverlay>
                ) : (
                  ""
                )}
              </div>
              <div className="pic-description">
                <p>Teeth That Bite</p>
                <p>From $500</p>
              </div>
            </div>

            <div>
              <div className="pic">
                <Image src={getImageURL(printData[0].images[1])} />
                <button value="pic2" onClick={handleClick} className="option">
                  ...
                </button>
                {isOpen && activeProduct === "pic2" ? (
                  <ProductOverlay
                    title={printData[0].title}
                    className="overlay"
                  >
                    {" "}
                    Overlay
                  </ProductOverlay>
                ) : (
                  ""
                )}
              </div>
              <div className="pic-description">
                <p>Teeth That Bite</p>
                <p>From $500</p>
              </div>
            </div>
            <div className="pic">
              <Image src={getImageURL(printData[0].images[2])} />
              <button className="option">...</button>
            </div>
            <div className="pic">
              <Image src={getImageURL(printData[0].images[3])} />
              <button className="option">...</button>
            </div>
          </Carousel>
        </PrintWrap>
        <PrintWrap>
          <Title>{printData[1].title}</Title>

          <Carousel className="carousel" responsive={responsive}>
            <Image src={getImageURL(printData[0].images[0])} />
            <Image src={getImageURL(printData[0].images[1])} />
            <Image src={getImageURL(printData[0].images[2])} />
            <Image src={getImageURL(printData[0].images[3])} />
          </Carousel>
        </PrintWrap>
        <PrintWrap className="wrap-1">
          <Title>{printData[2].title}</Title>

          <Carousel className="carousel" responsive={responsive}>
            <Image src={getImageURL(printData[0].images[0])} />
            <Image src={getImageURL(printData[0].images[1])} />
            <Image src={getImageURL(printData[0].images[2])} />
            <Image src={getImageURL(printData[0].images[3])} />
          </Carousel>
        </PrintWrap>
      </SliderWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .wrap-1 {
    background-color: #dadfed;
  }
`;
const PrintWrap = styled.div`
  width: 1450px;

  .pic {
    transition: 0.5s ease-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .pic-description {
    position: absolute;
    display: flex;
    gap: 150px;
    margin-left: 12%;
    top: 102%;
  }

  .option {
    position: relative;
    bottom: 40px;
    left: 150px;
    background-color: #217868;
    border-radius: 100%;
    color: white;
    border: #217868;
    padding-bottom: 5px;
    cursor: pointer;
  }
  .carousel {
    height: 520px;
  }
`;
const Title = styled.h1`
  color: #aeaba2;
  padding-top: 20px;
`;
const Image = styled.img`
  border: 8px solid #f2f5fd;
  width: 80%;
  align-content: center;
  margin: 0 50px;
`;
const SliderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
