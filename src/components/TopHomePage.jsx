import styled from "styled-components";
import "../App.css";
import topBackground from "../assets/images/home.png";
import Header from "./Header";
import GalleryButton from "../buttons/GalleryButton";

function TopHomePage() {
  return (
    <Wrapper>
      <Background src={topBackground} />
      <Header />
      <GalleryButton />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  img {
    width: 100%;
  }
`;

const Background = styled.img`
  position: absolute;
  width: 100%;

  left: 0;
  top: 0;
  z-index: -1;
`;

export default TopHomePage;
