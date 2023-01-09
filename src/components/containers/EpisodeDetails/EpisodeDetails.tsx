import axios from "axios";
import { _EpisodeDetails } from "./_EpisodeDetails";
import { EpisodeDetail, EpisodeDetailProps } from "./EpisodeTypes";
import { useEffect, useState } from "react";

export const EpisodeDetails = ({ season, number }: EpisodeDetailProps) => {
  const [episode, setEpisode] = useState<EpisodeDetail>();

  const episodeDetailsUrl = `https://api.tvmaze.com/shows/1955/episodebynumber?season=${season}&number=${number}`;

  const getEpisodeDetails = async () => {
    let result = await axios.get(episodeDetailsUrl);
    setEpisode(result.data);
  };

  useEffect(() => {
    getEpisodeDetails();
  }, []);

  return (
    <_EpisodeDetails>
      {episode && (
        <>
          <figure className="image">
            <img src={episode.image.medium} alt="Series Poster" />
          </figure>
          <article className="season">
            <h5>Season</h5>
            <h3>{episode.season}</h3>
          </article>
          <article className="title">
            <h5>Title</h5>
            <h3>{episode.name}</h3>
          </article>
          <article className="episode">
            <h5>Episode</h5>
            <h3>{episode.number}</h3>
          </article>
          <article className="airdate">
            <h5>Airdate</h5>
            <h3>{episode.airdate}</h3>
          </article>
          <article className="type">
            <h5>Type</h5>
            <h3>{episode.type}</h3>
          </article>
          <article className="runtime">
            <h5>Runtime</h5>
            <h3>{episode.runtime}</h3>
          </article>
          <article className="description">
            <h4>{episode.summary.replace(/(<([^>]+)>)/gi, " ")}</h4>
          </article>
        </>
      )}
    </_EpisodeDetails>
  );
};
