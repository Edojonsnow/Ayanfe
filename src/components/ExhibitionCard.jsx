import styled from "styled-components";
// import React from "react";

// import yanfs from "../assets/images/yanfs_exh_2.png";
import { exhibitionData } from "../data/ExhibitionData";
import Slider from "react-slick";
import { getImageURL } from "../utils/ImageUtils";

export default function ExhibitionCard() {
  //   const [imageIndex, setImageIndex] = React.useState(0);

  //   React.useEffect(() => {
  //     setInterval(() => {
  //       setImageIndex((prev) => (prev === 2 - 1 ? 0 : prev + 1));
  //     }, 5000);
  //   }, []);
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <Wrapper>
      {exhibitionData.map((item, index) => (
        <div className="wrap" key={index}>
          <div className="ex-description">
            <h1>{item.title}</h1>
            <h2> {item.subtitle}</h2>
            <p>{item.content}</p>
          </div>
          <div className="slider-wrapper">
            <Slider {...settings}>
              <Image src={getImageURL(item.image1[0])} />
              <Image src={getImageURL(item.image1[1])} />
            </Slider>
          </div>
        </div>
      ))}
    </Wrapper>
  );
}

const Image = styled.img``;

const Wrapper = styled.div`
  .slider-wrapper {
    width: 496px;
    align-self: center;
  }
  .wrap {
    display: flex;
    justify-content: center;
    gap: 100px;
    margin: 40px auto;
  }

  .ex-description {
    width: 400px;
  }

  h1 {
    color: #217868;
    font-family: "Press Start 2P", system-ui;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    padding-bottom: 20px;
  }
  h2 {
    color: #217868;
    font-family: "Press Start 2P", system-ui;
    font-size: 15px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    color: #217868;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

// const ExhibitionDescription = styled.div``;
// const Title = styled.h1``;
// const Subtitle = styled.h2``;
// const Content = styled.p``;
// const ExImage = styled.img`
//   width: 450px;
// `;
