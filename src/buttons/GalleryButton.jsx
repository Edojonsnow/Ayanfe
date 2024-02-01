import styled from "styled-components";

export default function GalleryButton() {
  return <Button> GALLERY</Button>;
}

const Button = styled.button`
  width: 174px;
  height: 77px;
  margin-top: 560px;
  font-size: 24px;
  padding: 4px;
  border-radius: 24px;
  border: 1px;
  background-color: transparent;
  border: 1px solid #f2f5fd;
  color: #f2f5fd;
  justify-content: center;
  transition: 0.5s ease-out;

  &:hover {
    background-color: #f2f5fd;
    color: #217868;
  }
`;
