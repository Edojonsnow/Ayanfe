import styled from "styled-components";
import x from "../assets/images/x-icon.svg";
import instagram from "../assets/images/instagram-icon.svg";
import youtube from "../assets/images/youtube-icon.svg";

function Footer() {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon src={x} />
        <Icon src={instagram} />
        <Icon src={youtube} />
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;

  background-color: #217868;
  width: 100%;
  height: 100px;
  left: 0;
  margin-top: 480px;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px;
  gap: 24px;
`;

const Icon = styled.img``;

export default Footer;
