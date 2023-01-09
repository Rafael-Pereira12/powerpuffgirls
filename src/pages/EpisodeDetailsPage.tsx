import { EpisodeDetails } from "../components/containers/EpisodeDetails";
import { useParams } from "react-router-dom";

const EpisodeDetailsPage = () => {
  const { number, season } = useParams();

  return (
    <div>
      <EpisodeDetails season={Number(season)} number={Number(number)} />
    </div>
  );
};

export default EpisodeDetailsPage;
