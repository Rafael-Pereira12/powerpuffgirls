import { EpisodeDetails } from "../components/containers/EpisodeDetails";
import { Header } from "../components/common/Header/Header";
import { useParams } from "react-router-dom";
import { Wrapper } from "../components/base/Wrapper";

const EpisodeDetailsPage = () => {
  const { number, season } = useParams();

  return (
    <Wrapper>
      <Header title={"EpisodeDetails"} />
      <EpisodeDetails season={Number(season)} number={Number(number)} />
    </Wrapper>
  );
};

export default EpisodeDetailsPage;
