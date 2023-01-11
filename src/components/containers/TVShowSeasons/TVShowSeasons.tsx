import axios from "axios";
import { CollapsibleComponent } from "../../common/Collapsible";
import { Season } from "./TVShowSeasonsTypes";
import { _TVShowSeasons } from "./_TVShowSeasons";
import { TVShowSeasonsEpisodes } from "../TVShowSeasonsEpisodes/TVShowSeasonsEpisodes";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/globalContext";

export const TVShowSeasons = () => {
  const { currentSlide, setSeasonDetails } = useGlobalContext();
  const [showSeasons, setShowSeason] = useState<Season[]>();
  console.log("currentSlide: ", currentSlide);

  const seasonUrl = "https://api.tvmaze.com/shows/1955/seasons";

  const getSeasons = async () => {
    let result = await axios.get(seasonUrl);
    setShowSeason(result.data);
    setSeasonDetails(result.data);
  };

  useEffect(() => {
    getSeasons();
  }, []);

  return (
    <_TVShowSeasons>
      {showSeasons &&
        showSeasons?.map((season, index) => {
          return (
            <div className={index === currentSlide ? "slideActive" : "slide"}>
              {index === currentSlide && (
                <CollapsibleComponent number={season?.number}>
                  <TVShowSeasonsEpisodes number={season?.number} />
                </CollapsibleComponent>
              )}
            </div>
          );
        })}
    </_TVShowSeasons>
  );
};
