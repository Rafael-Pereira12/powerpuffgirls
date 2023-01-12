import { Header } from "../components/common/Header/Header";
import { Carousel } from "../components/common/Carousel/Carousel";
import { SectionHeader } from "../components/common/SectionHeader";
import { TVShowDetails } from "../components/containers/TVShowDetails/TVShowDetails";
import { TVShowSeasons } from "../components/containers/TVShowSeasons/TVShowSeasons";
import { useGlobalContext } from "../context/globalContext";
import { Wrapper } from "../components/base/Wrapper";

const TVShowDetailsPage = () => {
  const { viewEpisodes } = useGlobalContext();
  return (
    <section>
      <Wrapper>
        <Header title="TV Show Details" />
        <TVShowDetails />
        <SectionHeader title="View Episodes" />
        {viewEpisodes && (
          <>
            <Carousel>
              <TVShowSeasons />
            </Carousel>
          </>
        )}
      </Wrapper>
    </section>
  );
};

export default TVShowDetailsPage;
