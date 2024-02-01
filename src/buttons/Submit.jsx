import styled from "styled-components";

export default function Submit() {
  return <Button>SUBMIT</Button>;
}

const Button = styled.button`
  display: flex;
  width: inherit;
  height: 40px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: #217868;
  color: white;
  border: none;
  font-size: 15px;
  margin-top: 60px;
`;
