import { Header } from "../components/base/Header/Header";
import { TVShowDetails } from "../components/containers/TVShowDetails/TVShowDetails";
import { TVShowSeasons } from "../components/containers/TVShowSeasons/TVShowSeasons";

const TVShowDetailsPage = () => {
  return (
    <>
      <Header title="Show Details" />
      <TVShowDetails />
      <TVShowSeasons />
    </>
  );
};

export default TVShowDetailsPage;
