import styled from "styled-components";
import Header from "./Header";
import AboutContent from "./AboutContent";
import AboutForm from "./AboutForm";

function About() {
  return (
    <Wrapper>
      <Header />
      <ContactHeader> CONTACT US </ContactHeader>
      <ContentWrapper>
        <AboutContent />
        <AboutForm />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #aeaba2b2;
`;

const ContentWrapper = styled.div`
  padding-top: 44px;
  display: flex;
  gap: 50px;
  justify-content: center;
`;
const ContactHeader = styled.h1`
  font-family: Poppins;
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
  margin-top: 50px;
`;

export default About;
