import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../components/base/Header/Header";
import { TVShowDetail } from "../components/containers/TVShowDetails/TVShowDetailsTypes";

const TVShowDetailsPage = () => {
  const [show, setShow] = useState<TVShowDetail>();

  const url = "https://api.tvmaze.com/shows/1955";

  const getShowDetails = async () => {
    let result = await axios.get(url);
    setShow(result.data);
  };

  useEffect(() => {
    getShowDetails();
  }, []);

  return (
    <article>
      <Header title="Show Details" />

      {show && (
        <section>
          <figure>
            <img src={show.image.medium} alt="Series Poster" />
          </figure>
          <h5>{show.name}</h5>
          <h5>Description: {show.summary.replace(/(<([^>]+)>)/gi, " ")}</h5>
          <h5>Type: {show.type}</h5>
          <h5>Rating: {show.rating.average}</h5>
        </section>
      )}
    </article>
  );
};

export default TVShowDetailsPage;
