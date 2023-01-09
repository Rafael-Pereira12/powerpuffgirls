import axios from "axios";
import { useEffect, useState } from "react";
import { TVShowDetail } from "../../containers/TVShowDetails/TVShowDetailsTypes";
import { _TVShowDetails } from "./_TVShowDetails";

export const TVShowDetails = () => {
  const [show, setShow] = useState<TVShowDetail>();

  const showUrl = "https://api.tvmaze.com/shows/1955";

  const getShowDetails = async () => {
    let result = await axios.get(showUrl);
    setShow(result.data);
  };

  useEffect(() => {
    getShowDetails();
  }, []);

  return (
    <_TVShowDetails>
      {show && (
        <>
          <figure className="image">
            <img src={show.image.medium} alt="Series Poster" />
          </figure>
          <article className="title">
            <h5>Title</h5>
            <h3>{show.name}</h3>
          </article>
          <article className="description">
            <h4>{show.summary.replace(/(<([^>]+)>)/gi, " ")}</h4>
          </article>
          <article className="type">
            <h5>Type</h5>
            <h3>{show.type}</h3>
          </article>
          <article className="rating">
            <h5>Rating</h5>
            <h3>{show.rating.average}</h3>
          </article>
        </>
      )}
    </_TVShowDetails>
  );
};
