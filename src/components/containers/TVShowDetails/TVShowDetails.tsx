import axios from "axios";
import { useEffect, useState } from "react";
import { TVShowDetail } from "../../containers/TVShowDetails/TVShowDetailsTypes";
import { Wrapper } from "../../common/Wrapper";

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
    <Wrapper>
      {show && (
        <>
          <figure className="image">
            <img src={show.image.medium} alt="Series Poster" />
          </figure>
          <h5 className="title">Title: {show.name}</h5>
          <h5 className="description">
            Description: {show.summary.replace(/(<([^>]+)>)/gi, " ")}
          </h5>
          <h5 className="type">Type: {show.type}</h5>
          <h5 className="rating">Rating: {show.rating.average}</h5>
        </>
      )}
    </Wrapper>
  );
};
