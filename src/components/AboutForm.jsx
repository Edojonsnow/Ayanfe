import styled from "styled-components";
import Submit from "../buttons/Submit";

// eslint-disable-next-line no-unused-vars
import React from "react";
import XIcon from "../assets/images/XIcon.jsx";
import IGIcon from "../assets/images/IGIcon.jsx";

function AboutForm() {
  return (
    <Wrapper>
      <Input1 />
      <Input1 />
      <Input2 />
      <Submit />
      <Follow>FOLLOW</Follow>
      <IconWrapper>
        <XIcon color="#fff" size="32" />
        <IGIcon color="#fff" size="32" />
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
  color: white;

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
  color: white;

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
  justify-content: left;

  gap: 10px;
`;
export default AboutForm;
