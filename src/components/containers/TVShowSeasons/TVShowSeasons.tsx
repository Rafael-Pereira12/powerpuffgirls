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

  const seasonUrl = "https://api.tvmaze.com/shows/1955/seasons";

  //uses the variable seasonUrl to request the data to the API,
  //than sets the response data with a hook in order to render the information on the page
  //as well as it stores the data on the ContextAPI so that it can be acessed by the TVShowSeasonEpisodes component
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
                <CollapsibleComponent
                  key={season?.number}
                  number={season?.number}
                >
                  <TVShowSeasonsEpisodes number={season?.number} />
                </CollapsibleComponent>
              )}
            </div>
          );
        })}
    </_TVShowSeasons>
  );
};
