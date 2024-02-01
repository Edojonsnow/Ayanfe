import styled from "styled-components";
import ayanfeBottomPic from "../assets/images/ayanfe-home-bottom.png";

function BottomHomePage() {
  return (
    <Wrapper>
      <Background src={ayanfeBottomPic} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 68px;
`;
const Background = styled.img`
  position: absolute;
  width: 100%;
  opacity: 0.9;
  left: 0;
`;
export default BottomHomePage;
