import axios from "axios";
import { useEffect, useState } from "react";
import { Season } from "./TVShowSeasonsTypes";
import { _TVShowSeasons } from "./_TVShowSeasons";
import { TVShowSeasonsEpisodes } from "../TVShowSeasonsEpisodes/TVShowSeasonsEpisodes";

export const TVShowSeasons = () => {
  const [showSeasons, setShowSeason] = useState<Season[]>();

  const seasonUrl = "https://api.tvmaze.com/shows/1955/seasons";

  const getSeasons = async () => {
    let result = await axios.get(seasonUrl);
    setShowSeason(result.data);
  };

  useEffect(() => {
    getSeasons();
  }, []);

  return (
    <_TVShowSeasons>
      {showSeasons &&
        showSeasons?.map((season) => {
          return <article className="seasonBox">{season?.number}</article>;
        })}
      <TVShowSeasonsEpisodes />
    </_TVShowSeasons>
  );
};
