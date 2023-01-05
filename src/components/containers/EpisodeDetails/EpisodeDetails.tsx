import axios from "axios";
import { EpisodeDetail } from "./EpisodeTypes";
import { useEffect, useState } from "react";
import { Wrapper } from "../../common/Wrapper";

export const EpisodeDetails = () => {
  const [episode, setEpisode] = useState<EpisodeDetail>();

  const episodeDetailsUrl =
    "https://api.tvmaze.com/shows/1955/episodebynumber?season=1&number=1";

  const getEpisodeDetails = async () => {
    let result = await axios.get(episodeDetailsUrl);
    setEpisode(result.data);
  };

  useEffect(() => {
    getEpisodeDetails();
  }, []);

  return (
    <Wrapper>
      {episode && (
        <article>
          <h5>{episode.image.medium}</h5>
          <h5>Season {episode.season}</h5>
          <h5>Title: {episode.name}</h5>
          <h5>Episode {episode.number}</h5>
          <h5>Airdate: {episode.airdate}</h5>
          <h5>Type {episode.type}</h5>
          <h5>Runtime: {episode.name}</h5>
          <h5>Description: {episode.summary}</h5>
        </article>
      )}
    </Wrapper>
  );
};
