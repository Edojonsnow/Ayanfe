import styled from "styled-components";
import contactImage from "../assets/images/contact-1.png";

function AboutContent() {
  return (
    <Wrapper>
      <ContactImage src={contactImage} />
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
`;

const ContactText = styled.p`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
`;

export default AboutContent;
