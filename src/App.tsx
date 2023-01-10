import { BrowserRouter, Route, Routes } from "react-router-dom";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage";
import TVShowDetailsPage from "./pages/TVShowDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TVShowDetailsPage />} />
        <Route
          path="/details/:season/:number"
          element={<EpisodeDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
