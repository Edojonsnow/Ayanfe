import styled from "styled-components";
import Submit from "../buttons/Submit";
import { x } from "../assets/images/x-icon.svg";
import { instagram } from "../assets/images/instagram-icon.svg";

function AboutForm() {
  return (
    <Wrapper>
      <Input1 />
      <Input1 />
      <Input2 />
      <Submit />
      <Follow>FOLLOW</Follow>
      <IconWrapper>
        <Icon src={x} />
        <Icon src={instagram} />
      </IconWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input1 = styled.input`
  width: 480px;
  height: 24px;
  padding: 16px;
  border: 1px;

  background-color: transparent;
  border: 1px solid #fff;

  &:focus {
    outline: none;
  }
`;

const Input2 = styled.textarea`
  width: 480px;
  height: 146px;
  padding: 16px;
  background-color: transparent;
  border: 1px solid #fff;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const Follow = styled.p`
  text-align: left;
  color: #dadfed;
  font-size: 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px;
  gap: 24px;
`;

const Icon = styled.img``;

export default AboutForm;
