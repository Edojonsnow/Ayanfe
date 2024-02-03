import styled from "styled-components";
import contactImage1 from "../assets/images/contact-1.png";
import contactImage2 from "../assets/images/contact-2.png";
import contactImage3 from "../assets/images/contact-3.png";
import contactImage4 from "../assets/images/contact-4.png";
import Slider from "react-slick";

function AboutContent() {
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
      <Slider {...settings}>
        <ContactImage src={contactImage1} />
        <ContactImage src={contactImage2} />
        <ContactImage src={contactImage3} />
        <ContactImage src={contactImage4} />
      </Slider>
      <ContactText>Unclogging my thoughts, one painting at a time</ContactText>
      <ContactText> Lagos based photographer</ContactText>
      <ContactText>
        Should your inquiry be urgent, please add the word URGENT in the subject
        title of your email
      </ContactText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 498px;
`;

const ContactImage = styled.img`
  width: 498px;
  margin-bottom: 40px;
`;

const ContactText = styled.p`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  margin: 25px auto;
`;

export default AboutContent;
