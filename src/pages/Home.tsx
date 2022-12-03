import Carousel from "../components/Carousel/Carousel";
import Container from "../components/Container/Index";
import Header from "../components/Header/Index";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Header />
      <Container>
        <Carousel />
      </Container>
    </>
  );
};

export default Home;
