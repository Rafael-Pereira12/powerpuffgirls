import { SET_SLIDE, SET_SEASON_DETAILS } from "../actions";
import React, { useCallback, useContext, useReducer } from "react";
import reducer from "../reducer/globalReducer";
import { Season } from "../components/containers/TVShowSeasons/TVShowSeasonsTypes";

const initialState = {
  seasonDetails: {
    number: 0,
    id: 0,
  },
  currentSlide: 0,
};

const GlobalContext = React.createContext<{
  setNextSlide: Function;
  setPreviousSlide: Function;
  setSeasonDetails: Function;
  seasonDetails: Season;
  currentSlide: number;
}>({
  setNextSlide: () => {},
  setPreviousSlide: () => {},
  setSeasonDetails: () => {},
  seasonDetails: {
    number: 0,
    id: 0,
  },
  currentSlide: 0,
});

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSeasonDetails = useCallback((seasonDetails: Season[]) => {
    dispatch({ type: SET_SEASON_DETAILS, payload: seasonDetails });
  }, []);

  const setPreviousSlide = useCallback((currentSlide: number) => {
    dispatch({ type: SET_SLIDE, payload: currentSlide });
  }, []);

  const setNextSlide = useCallback((currentSlide: number) => {
    dispatch({ type: SET_SLIDE, payload: currentSlide });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setNextSlide,
        setPreviousSlide,
        setSeasonDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
