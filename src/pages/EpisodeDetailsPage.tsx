import { EpisodeDetails } from "../components/containers/EpisodeDetails";
import { Header } from "../components/base/Header/Header";
import { useParams } from "react-router-dom";

const EpisodeDetailsPage = () => {
  const { number, season } = useParams();

  return (
    <div>
      <Header title={"EpisodeDetails"} />
      <EpisodeDetails season={Number(season)} number={Number(number)} />
    </div>
  );
};

export default EpisodeDetailsPage;
