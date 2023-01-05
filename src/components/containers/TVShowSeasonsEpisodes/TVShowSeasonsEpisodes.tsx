import axios from "axios";
import { useEffect, useState } from "react";
import { CollapsibleComponent } from "../../common/Collapsible";
import { TVShowSeasonEpisode } from "./TVShowSeasonsEpisodesTypes";
import { _TVShowSeasonsEpisodes } from "./_TVShowSeasonsEpisodes";

export const TVShowSeasonsEpisodes = () => {
  const [episode, setEpisode] = useState<TVShowSeasonEpisode[]>();
  console.log(episode);

  const episodesUrl = "https://api.tvmaze.com/seasons/7073/episodes";

  //episodios da season
  // "https://api.tvmaze.com/seasons/7073/episodes" "https://api.tvmaze.com/shows/1955/episodes";

  const getEpisodes = async () => {
    let result = await axios.get(episodesUrl);
    setEpisode(result.data);
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <_TVShowSeasonsEpisodes>
      <CollapsibleComponent>
        {episode &&
          episode?.map((episode) => {
            return <section className="episodeBox">{episode.number}</section>;
          })}
      </CollapsibleComponent>
    </_TVShowSeasonsEpisodes>
  );
};
