import axios from "axios";
import { EpisodeDetail, EpisodeDetailProps } from "./EpisodeTypes";
import { useEffect, useState } from "react";
import { Wrapper } from "../../common/Wrapper";

export const EpisodeDetails = ({ season, number }: EpisodeDetailProps) => {
  const [episode, setEpisode] = useState<EpisodeDetail>();

  const episodeDetailsUrl = `https://api.tvmaze.com/shows/1955/episodebynumber?season=${season}&number=${number}`;

  const getEpisodeDetails = async () => {
    let result = await axios.get(episodeDetailsUrl);
    setEpisode(result.data);
    console.log("episode: ", episode);
  };

  useEffect(() => {
    getEpisodeDetails();
  }, []);

  return (
    <Wrapper>
      {episode && (
        <article>
          <figure className="image">
            <img src={episode.image.medium} alt="Series Poster" />
          </figure>
          <h5>Season {episode.season}</h5>
          <h5 className="title">Title: {episode.name}</h5>
          <h5>Episode {episode.number}</h5>
          <h5>Airdate: {episode.airdate}</h5>
          <h5 className="type">Type {episode.type}</h5>
          <h5 className="">Runtime: {episode.name}</h5>
          <h5 className="description">
            Description: {episode.summary.replace(/(<([^>]+)>)/gi, " ")}
          </h5>
        </article>
      )}
    </Wrapper>
  );
};
