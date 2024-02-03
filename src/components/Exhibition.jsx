import styled from "styled-components";

// import ExhibitionCard from "./ExhibitionCard.jsx";

import ExhibitionCard from "./ExhibitionCard.jsx";

import Header from "./Header.jsx";

export default function Exhibition() {
  return (
    <Wrapper>
      <Header />

      <ExhibitionCard />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
