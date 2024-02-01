import styled from "styled-components";
import firstMidPic from "../assets/images/ayanfe-mid-1.png";
import secondMidPic from "../assets/images/ayanfe-mid-2.png";
import thirdMidPic from "../assets/images/ayanfe-mid-3.png";

function MidHomePage() {
  return (
    <Wrapper>
      <CardWrapper>
        <Card src={firstMidPic} />
        <Card src={secondMidPic} />
        <Card src={thirdMidPic} />
      </CardWrapper>
      <WorkWithMe>WORK WITH ME</WorkWithMe>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const CardWrapper = styled.div`
  display: flex;
  padding-top: 150px;
  justify-content: center;
  gap: 24px;
`;

const Card = styled.img`
  width: 388px;
`;

const WorkWithMe = styled.h1`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0.08em;
  text-align: right;
  color: #217868;
  padding-top: 27px;
`;

export default MidHomePage;
