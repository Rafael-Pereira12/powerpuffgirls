import { BrowserRouter, Route, Routes } from "react-router-dom";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage";
import { Navbar } from "./components/base/Navbar";
import TVShowDetailsPage from "./pages/TVShowDetailsPage";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TVShowDetailsPage />} />
        <Route
          path="/details/:season/:number"
          element={<EpisodeDetailsPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
