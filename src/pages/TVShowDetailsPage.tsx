import { Header } from "../components/base/Header/Header";
import { Carousel } from "../components/common/Carousel/Carousel";
import { TVShowDetails } from "../components/containers/TVShowDetails/TVShowDetails";
import { TVShowSeasons } from "../components/containers/TVShowSeasons/TVShowSeasons";

const TVShowDetailsPage = () => {
  return (
    <>
      <Header title="TV Show Details" />
      <TVShowDetails />
      <Carousel>
        <TVShowSeasons />
      </Carousel>
    </>
  );
};

export default TVShowDetailsPage;
