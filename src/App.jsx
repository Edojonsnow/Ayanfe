import "./App.css";
import styled from "styled-components";

import TopHomePage from "./components/TopHomePage";
import MidHomePage from "./components/MidHomePage";
import BottomHomePage from "./components/BottomHomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrapper>
      <TopHomePage />
      <MidHomePage />
      <BottomHomePage />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default App;
