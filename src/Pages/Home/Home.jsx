import { Helmet } from "react-helmet";
import Estate from "../Estate/Estate";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div className="">
      <Helmet>
      <meta charSet="utf-8" />
      <title>Home - Elite Shores Escape</title>

      </Helmet>
      <Slider></Slider>
      <Estate></Estate>
    </div>
  );
};

export default Home;