import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/globalContext";
import { TVShowSeasonEpisode } from "./TVShowSeasonsEpisodesTypes";
import { _TVShowSeasonsEpisodes } from "./_TVShowSeasonsEpisodes";

export const TVShowSeasonsEpisodes = ({ number }: TVShowSeasonEpisode) => {
  const { seasonDetails } = useGlobalContext();
  const [episode, setEpisode] = useState<TVShowSeasonEpisode[]>();

  const index = number - 1;

  //@ts-ignore
  const episodesUrl = `https://api.tvmaze.com/seasons/${seasonDetails?.[index].id}/episodes`;

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
            <Link
              //@ts-ignore
              to={`/details/${seasonDetails?.[index].number}/${episode.number}`}
            >
              <section key={episode.number} className="episodeBox">
                {episode.number}
              </section>
            </Link>
          );
        })}
    </_TVShowSeasonsEpisodes>
  );
};
