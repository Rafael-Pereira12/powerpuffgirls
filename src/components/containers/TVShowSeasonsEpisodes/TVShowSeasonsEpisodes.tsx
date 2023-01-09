import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  TVShowSeasonEpisode,
  TVShowSeasonEpisodeProps,
} from "./TVShowSeasonsEpisodesTypes";
import { _TVShowSeasonsEpisodes } from "./_TVShowSeasonsEpisodes";

export const TVShowSeasonsEpisodes = ({
  seasonNumber,
}: TVShowSeasonEpisodeProps) => {
  const [episode, setEpisode] = useState<TVShowSeasonEpisode[]>();

  const episodesUrl = `https://api.tvmaze.com/seasons/${seasonNumber}/episodes`;

  const getEpisodes = async () => {
    let result = await axios.get(episodesUrl);
    setEpisode(result.data);
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <_TVShowSeasonsEpisodes>
      {episode &&
        episode?.map((episode) => {
          return (
            <Link to={`/details/${seasonNumber}/${episode.number}`}>
              <section key={episode.number} className="episodeBox">
                {episode.number}
              </section>
            </Link>
          );
        })}
    </_TVShowSeasonsEpisodes>
  );
};
