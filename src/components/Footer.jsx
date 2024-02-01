import styled from "styled-components";
import XIcon from "../assets/images/XIcon";
import IGIcon from "../assets/images/IGIcon";
import youtube from "../assets/images/youtube-icon.svg";

function Footer() {
  return (
    <Wrapper>
      <IconWrapper>
        <XIcon color="#AEABA2" size="36" />
        <IGIcon color="#AEABA2" size="36" />
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
