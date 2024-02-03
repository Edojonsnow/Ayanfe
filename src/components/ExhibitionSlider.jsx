import styled from "styled-components";
import Slider from "react-slick";

import { exhibitionData } from "../data/ExhibitionData";
import { getImageURL } from "../utils/ImageUtils";

export default function ExhibitionSlider() {
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
        <div key={index}>
          <Slider {...settings}>
            <Image src={getImageURL(item.image1[0])} />
            <Image src={getImageURL(item.image1[1])} />
          </Slider>
        </div>
      ))}
    </Wrapper>
  );
}
const Image = styled.img`
  margin: 40px auto 0;
`;
const Wrapper = styled.div`
  width: 498px;
`;
