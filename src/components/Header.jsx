import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderTitle>AYANFE</HeaderTitle>
      <HeaderNav>
        {menuData.map((item, index) => (
          <Link to={item.link} item={item} key={index}>
            <HeaderNavItem>{item.title}</HeaderNavItem>
          </Link>
        ))}
      </HeaderNav>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  position: relative;
  gap: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  color: #f2f5fd;
  font-family: Poppins;
  font-size: 48px;
  font-weight: 400;
  line-height: 96px;
  letter-spacing: 0.24em;
  justify-self: center;
  text-align: left;
`;
const HeaderNavItem = styled.a`
  position: relative;
  color: white;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
`;
const HeaderNav = styled.div`
  display: grid;
  gap: 25px;
  float: right;
  grid-template-columns: repeat(5, auto);
`;
