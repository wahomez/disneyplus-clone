import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Rows from "./Rows";
import requests from "../requests";

const Home = () => {
  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Rows title="Recommended for you" fetchUrl={requests.fetchTrending}/>
      <Rows title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Rows title="Documentary Movies" fetchUrl={requests.fetchDocumentaries}/>
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
